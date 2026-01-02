import React from 'react';
import { Phone, MessageCircle, Mail } from 'lucide-react';

interface HeroSectionProps {
  name: string;
  title: string;
  subtitle: string;
  photoUrl?: string;
  phoneNumber: string;
  whatsappNumber: string;
  email: string;
}

export default function HeroSection({
  name,
  title,
  subtitle,
  photoUrl,
  phoneNumber,
  whatsappNumber,
  email,
}: HeroSectionProps) {
  return (
    <div className="hero-section mb-8 md:mb-12">
      <div className="line-accent"></div>
      
      <div className="grid md:grid-cols-3 gap-8 items-start pt-2">
        {/* Content */}
        <div className="md:col-span-2 fade-in">
          <h1 className="text-white mb-2">{name}</h1>
          <p className="text-lg text-gray-100 font-semibold mb-1">{title}</p>
          <p className="text-gray-300 text-sm mb-6">{subtitle}</p>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            <a
              href={`tel:${phoneNumber.replace(/\s/g, '')}`}
              className="btn-primary inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Llamar</span>
            </a>
            
            <a
              href={`https://wa.me/${whatsappNumber.replace(/\s/g, '')}`}
              className="btn-whatsapp inline-flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
            
            <a
              href={`mailto:${email}`}
              className="btn-secondary inline-flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
          </div>
        </div>
        
        {/* Photo - Asymmetric placement */}
        {photoUrl && (
          <div className="fade-in md:col-span-1 flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-secondary opacity-20 rounded-sm transform rotate-2"></div>
              <img
                src={photoUrl}
                alt={name}
                className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-sm border-2 border-white shadow-lg relative z-10"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
