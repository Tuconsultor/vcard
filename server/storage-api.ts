import { Router } from 'express';
import { storagePut, storageGet } from './storage';
import type { Request, Response } from 'express';

export const storageRouter = Router();

/**
 * POST /api/storage/upload
 * Get presigned upload URL for S3
 * 
 * Body:
 * - fileKey: string (S3 file path)
 * - mimeType: string (MIME type)
 * - size: number (file size in bytes)
 */
storageRouter.post('/upload', async (req: Request, res: Response) => {
  try {
    const { fileKey, mimeType, size } = req.body;

    if (!fileKey || !mimeType || !size) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // For now, return a placeholder
    // In production, you would generate a presigned PUT URL
    const publicUrl = `https://storage.example.com/${fileKey}`;

    res.json({
      uploadUrl: publicUrl,
      publicUrl,
      fileKey,
    });
  } catch (error) {
    console.error('[Storage API] Upload error:', error);
    res.status(500).json({ error: 'Upload failed' });
  }
});

/**
 * GET /api/storage/download/:fileKey
 * Get presigned download URL for S3
 */
storageRouter.get('/download/:fileKey', async (req: Request, res: Response) => {
  try {
    const { fileKey } = req.params;

    if (!fileKey) {
      return res.status(400).json({ error: 'File key required' });
    }

    const { url } = await storageGet(fileKey);

    res.json({ url });
  } catch (error) {
    console.error('[Storage API] Download error:', error);
    res.status(500).json({ error: 'Download failed' });
  }
});
