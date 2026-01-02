import React, { useState, useRef } from 'react';
import { trpc } from '@/lib/trpc';
import { useAuth } from '@/_core/hooks/useAuth';
import { Upload, Trash2, Download, File, AlertCircle } from 'lucide-react';

/**
 * File Storage Management Page
 * 
 * Features:
 * - Upload files to S3
 * - List user files
 * - Delete files
 * - Download files
 * - Industrial Minimalist design
 */

export default function Files() {
  const { user, isAuthenticated } = useAuth();
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Fetch user files
  const { data: files, isLoading, refetch } = trpc.files.list.useQuery(undefined, {
    enabled: isAuthenticated,
  });

  // Upload mutation
  const uploadMutation = trpc.files.upload.useMutation({
    onSuccess: () => {
      refetch();
      setError(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    },
    onError: (err) => {
      setError(err.message || 'Error uploading file');
      setUploading(false);
    },
  });

  // Delete mutation
  const deleteMutation = trpc.files.delete.useMutation({
    onSuccess: () => {
      refetch();
    },
    onError: (err) => {
      setError(err.message || 'Error deleting file');
    },
  });

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !user) return;

    setUploading(true);
    setError(null);

    try {
      // Upload to S3
      const fileBuffer = await file.arrayBuffer();
      const fileKey = `${user.id}-files/${file.name}-${Date.now()}`;
      
      const response = await fetch('/api/storage/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fileKey,
          mimeType: file.type,
          size: file.size,
        }),
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error('Failed to get upload URL');
      }

      const { uploadUrl, publicUrl } = await response.json();

      // Upload file to S3
      const uploadResponse = await fetch(uploadUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': file.type,
        },
        body: fileBuffer,
      });

      if (!uploadResponse.ok) {
        throw new Error('Failed to upload file to S3');
      }

      // Save metadata to database
      await uploadMutation.mutateAsync({
        filename: file.name,
        mimeType: file.type,
        size: file.size,
        url: publicUrl,
        fileKey,
        category: 'general',
        description: `Uploaded on ${new Date().toLocaleDateString()}`,
      });

      setUploading(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Upload failed');
      setUploading(false);
    }
  };

  const handleDelete = (fileId: number) => {
    if (confirm('Are you sure you want to delete this file?')) {
      deleteMutation.mutate(fileId);
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('es-MX', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="card-industrial p-8 max-w-md w-full text-center">
          <AlertCircle className="w-12 h-12 text-secondary mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-foreground mb-2">Acceso Requerido</h1>
          <p className="text-muted-foreground mb-6">
            Debes iniciar sesión para acceder al almacenamiento de archivos.
          </p>
          <a href="/login" className="btn-primary inline-block">
            Iniciar Sesión
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-4xl mx-auto py-8 md:py-12">
        {/* Header */}
        <div className="mb-8 fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
            Almacenamiento de Archivos
          </h1>
          <p className="text-muted-foreground">
            Gestiona tus documentos de forma segura en la nube
          </p>
          <div className="section-divider mt-4"></div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-sm">
            <p className="text-red-800">{error}</p>
          </div>
        )}

        {/* Upload Section */}
        <section className="mb-12 fade-in">
          <div className="card-industrial p-8">
            <div className="flex flex-col items-center justify-center">
              <Upload className="w-12 h-12 text-secondary mb-4" />
              <h2 className="text-2xl font-semibold text-foreground mb-2">
                Cargar Archivo
              </h2>
              <p className="text-muted-foreground text-center mb-6">
                Arrastra un archivo aquí o haz clic para seleccionar
              </p>
              
              <input
                ref={fileInputRef}
                type="file"
                onChange={handleFileSelect}
                disabled={uploading}
                className="hidden"
                accept="*/*"
              />
              
              <button
                onClick={() => fileInputRef.current?.click()}
                disabled={uploading}
                className="btn-primary"
              >
                {uploading ? 'Cargando...' : 'Seleccionar Archivo'}
              </button>
            </div>
          </div>
        </section>

        {/* Files List Section */}
        <section className="fade-in">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Mis Archivos
          </h2>

          {isLoading ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Cargando archivos...</p>
            </div>
          ) : !files || files.length === 0 ? (
            <div className="card-industrial p-8 text-center">
              <File className="w-12 h-12 text-accent mx-auto mb-4 opacity-50" />
              <p className="text-muted-foreground">
                No hay archivos aún. ¡Carga tu primer archivo!
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {files.map((file) => (
                <div
                  key={file.id}
                  className="card-industrial p-6 flex items-center justify-between hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    <File className="w-8 h-8 text-secondary flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground truncate">
                        {file.filename}
                      </h3>
                      <div className="flex gap-4 text-sm text-muted-foreground">
                        <span>{formatFileSize(file.size)}</span>
                        <span>{formatDate(file.createdAt)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2 ml-4 flex-shrink-0">
                    <a
                      href={file.url}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 hover:bg-primary hover:bg-opacity-10 rounded-sm transition-colors"
                      title="Descargar"
                    >
                      <Download className="w-5 h-5 text-primary" />
                    </a>
                    <button
                      onClick={() => handleDelete(file.id)}
                      disabled={deleteMutation.isPending}
                      className="p-2 hover:bg-red-50 rounded-sm transition-colors disabled:opacity-50"
                      title="Eliminar"
                    >
                      <Trash2 className="w-5 h-5 text-red-500" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 Almacenamiento Seguro. Todos los archivos están protegidos.</p>
        </footer>
      </div>
    </div>
  );
}
