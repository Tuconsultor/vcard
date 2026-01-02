import React from 'react';
import { useAuth } from '@/_core/hooks/useAuth';
import HeroSection from '@/components/HeroSection';
import SectionHeader from '@/components/SectionHeader';
import ContactCard from '@/components/ContactCard';
import ActionButton from '@/components/ActionButton';
import ServiceCard from '@/components/ServiceCard';
import {
  Phone,
  MessageCircle,
  Mail,
  Linkedin,
  Github,
  Music,
  FileText,
  Download,
  Users,
  Truck,
  BarChart3,
  Zap,
  Shield,
} from 'lucide-react';

/**
 * Industrial Minimalist Design System
 * 
 * Design Philosophy:
 * - Precision and clarity (technical drawing aesthetic)
 * - Hard edges, straight lines, minimal curves (radius: 0.25rem)
 * - Asymmetric layouts with strategic whitespace
 * - Steel blue primary (#1a3a52) + oxidized orange accents (#d97706)
 * - Fast, precise interactions (100ms transitions)
 * 
 * Typography:
 * - Display: IBM Plex Mono (technical, monospaced)
 * - Body: Roboto (readable, geometric)
 * 
 * Color Palette:
 * - Primary: #1a3a52 (Steel Blue - Trust, Technical)
 * - Secondary: #d97706 (Oxidized Orange - Energy, Signaling)
 * - Accent: #78716c (Warm Gray - Balance)
 * - Background: #fafaf8 (Clean white with warmth)
 * - Foreground: #1a1a1a (Dark gray, not pure black)
 */

export default function Home() {
  // Authentication state
  const { user, loading, error, isAuthenticated, logout } = useAuth();

  const contactData = {
    name: 'Lic. Ramón Daniel Rivera Ayala',
    title: 'Vendedor Profesional',
    subtitle: 'Asesoría comercial B2B · Soluciones para logística y flotillas',
    phone: '+52 477 580 5988',
    whatsapp: '524775805988',
    email: 'daniel.rivera@elambajio.com',
    photoUrl: 'WhatsApp Image 2025-12-30 at 5.11.52 PM.jpeg',
  };

  const directContactItems = [
    {
      icon: Phone,
      label: 'Teléfono',
      value: '+52 477 580 5988',
      href: `tel:+524775805988`,
      isLink: true,
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: 'Mensaje directo',
      href: `https://wa.me/524775805988`,
      isLink: true,
    },
    {
      icon: Mail,
      label: 'Email Corporativo',
      value: 'daniel.rivera@elambajio.com',
      href: 'mailto:daniel.rivera@elambajio.com',
      isLink: true,
    },
    {
      icon: Mail,
      label: 'Email Personal',
      value: 'ramondanielrivera@gmail.com',
      href: 'mailto:ramondanielrivera@gmail.com',
      isLink: true,
    },
  ];

  const alternativeChannels = [
    {
      icon: Users,
      label: 'Threema',
      value: '2WD68EAY',
      href: 'threema://add?id=2WD68EAY',
      isLink: true,
    },
    {
      icon: Users,
      label: 'WeChat',
      value: 'asesorcamionero',
      href: 'weixin://dl/chat?username=asesorcamionero',
      isLink: true,
    },
  ];

  const services = [
    {
      icon: Truck,
      title: 'Asesoría en Logística',
      description: 'Optimización de operaciones de transporte y flotillas',
      features: [
        'Análisis de rutas y costos',
        'Gestión de flotillas',
        'Negociación con proveedores',
        'Implementación de tecnología',
      ],
    },
    {
      icon: BarChart3,
      title: 'Análisis Comercial',
      description: 'Estrategias de negocio para empresas de transporte',
      features: [
        'Estudios de mercado',
        'Proyecciones financieras',
        'Benchmarking competitivo',
        'Planes de crecimiento',
      ],
    },
    {
      icon: Zap,
      title: 'Optimización Operativa',
      description: 'Mejora de eficiencia y reducción de costos',
      features: [
        'Auditoría operacional',
        'Procesos lean',
        'Capacitación de equipos',
        'Métricas de desempeño',
      ],
    },
    {
      icon: Shield,
      title: 'Cumplimiento Normativo',
      description: 'Asesoría en regulaciones y normativas del sector',
      features: [
        'Normativas de transporte',
        'Seguridad vial',
        'Documentación legal',
        'Auditorías de cumplimiento',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-6xl mx-auto py-8 md:py-12">
        {/* Hero Section */}
        <HeroSection
          name={contactData.name}
          title={contactData.title}
          subtitle={contactData.subtitle}
          photoUrl={contactData.photoUrl}
          phoneNumber={contactData.phone}
          whatsappNumber={contactData.whatsapp}
          email={contactData.email}
        />

        {/* Services Section */}
        <section className="mb-12 md:mb-16 fade-in-stagger">
          <SectionHeader
            title="Servicios Profesionales"
            description="Soluciones integrales para optimizar tu operación comercial"
          />
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="fade-in">
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  features={service.features}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Direct Contact Section */}
        <section className="mb-12 md:mb-16 fade-in-stagger">
          <SectionHeader
            title="Contacto Directo"
            badge="Disponible"
            description="Múltiples canales para comunicación inmediata y eficiente"
          />
          <div className="contact-grid">
            {directContactItems.map((item, idx) => (
              <div key={idx} className="fade-in">
                <ContactCard
                  icon={item.icon}
                  label={item.label}
                  value={item.value}
                  href={item.href}
                  isLink={item.isLink}
                />
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-6 italic">
            Respondo en horario comercial y puedo coordinar visitas o llamadas de seguimiento según tus necesidades.
          </p>
        </section>

        {/* Alternative Channels */}
        <section className="mb-12 md:mb-16 fade-in-stagger">
          <SectionHeader
            title="Canales Alternativos"
            description="Comunicación segura y privada a través de plataformas especializadas"
          />
          <div className="grid md:grid-cols-2 gap-6">
            {alternativeChannels.map((item, idx) => (
              <div key={idx} className="fade-in">
                <ContactCard
                  icon={item.icon}
                  label={item.label}
                  value={item.value}
                  href={item.href}
                  isLink={item.isLink}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Professional Networks */}
        <section className="mb-12 md:mb-16 fade-in-stagger">
          <SectionHeader
            title="Redes Profesionales"
            description="Conecta conmigo en plataformas de networking empresarial"
          />
          <div className="flex flex-wrap gap-4">
            <ActionButton
              href="https://www.linkedin.com/in/ramondanielriveraayala/"
              label="LinkedIn"
              icon={Linkedin}
              variant="primary"
              target="_blank"
              rel="noreferrer"
            />
            <ActionButton
              href="https://github.com/Tuconsultor"
              label="GitHub"
              icon={Github}
              variant="secondary"
              target="_blank"
              rel="noreferrer"
            />
          </div>
        </section>

        {/* Media & Entertainment */}
        <section className="mb-12 md:mb-16 fade-in-stagger">
          <SectionHeader
            title="Música Favorita"
            description="Descubre lo que escucho cuando trabajo"
          />
          <ActionButton
            href="https://open.spotify.com/track/5t8yddZze4jLTAoTzDRFtC?si=piAMinzfSKmkWuXJzekLdw"
            label="Escuchar en Spotify"
            icon={Music}
            variant="secondary"
            target="_blank"
            rel="noreferrer"
          />
        </section>

        {/* Documents & Resources */}
        <section className="mb-12 md:mb-16 fade-in-stagger">
          <SectionHeader
            title="Documentos y Recursos"
            description="Descarga mi CV, portafolio y datos de contacto"
          />
          <div className="flex flex-wrap gap-4">
            <ActionButton
              href="https://firebasestorage.googleapis.com/v0/b/mi-nfc-hub.appspot.com/o/resume.pdf?alt=media&token=..."
              label="Descargar CV"
              icon={Download}
              variant="primary"
              target="_blank"
              rel="noreferrer"
            />
            <ActionButton
              href="https://firebasestorage.googleapis.com/v0/b/mi-nfc-hub.appspot.com/o/portfolio.pdf?alt=media&token=..."
              label="Ver Portafolio"
              icon={FileText}
              variant="secondary"
              target="_blank"
              rel="noreferrer"
            />
            <ActionButton
              href="ramon-daniel-rivera.vcf"
              label="Guardar Contacto"
              icon={Users}
              variant="secondary"
              download={true}
            />
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 md:mt-20 pt-8 border-t border-border">
          <div className="text-center text-sm text-muted-foreground">
            <p className="mb-2">
              © 2025 Lic. Ramón Daniel Rivera Ayala. Todos los derechos reservados.
            </p>
            <p className="text-xs">
              Diseño industrial minimalista • Desarrollado con precisión técnica
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
