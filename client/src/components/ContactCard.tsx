import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ContactCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
  isLink?: boolean;
  items?: Array<{ label: string; href: string }>;
}

export default function ContactCard({
  icon: Icon,
  label,
  value,
  href,
  isLink = false,
  items,
}: ContactCardProps) {
  return (
    <div className="card-industrial p-6 fade-in">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 pt-1">
          <Icon className="w-5 h-5 text-secondary" strokeWidth={2.5} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="label-mono text-xs mb-2">{label}</p>
          {isLink && href ? (
            <a
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
              className="text-primary hover:text-secondary font-semibold break-all transition-colors duration-100"
            >
              {value}
            </a>
          ) : (
            <p className="text-foreground font-semibold">{value}</p>
          )}
          {items && items.length > 0 && (
            <ul className="mt-3 space-y-2">
              {items.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="text-sm text-primary hover:text-secondary transition-colors duration-100"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
