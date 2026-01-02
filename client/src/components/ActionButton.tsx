import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ActionButtonProps {
  href: string;
  label: string;
  icon?: LucideIcon;
  variant?: 'primary' | 'secondary' | 'whatsapp';
  target?: '_blank' | '_self';
  rel?: string;
  download?: boolean;
}

export default function ActionButton({
  href,
  label,
  icon: Icon,
  variant = 'primary',
  target = '_self',
  rel,
  download = false,
}: ActionButtonProps) {
  const buttonClass =
    variant === 'primary'
      ? 'btn-primary'
      : variant === 'whatsapp'
        ? 'btn-whatsapp'
        : 'btn-secondary';

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      download={download}
      className={`${buttonClass} inline-flex items-center gap-2`}
    >
      {Icon && <Icon className="w-4 h-4" />}
      <span>{label}</span>
    </a>
  );
}
