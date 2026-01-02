import React from 'react';

interface SectionHeaderProps {
  title: string;
  badge?: string;
  description?: string;
}

export default function SectionHeader({
  title,
  badge,
  description,
}: SectionHeaderProps) {
  return (
    <div className="mb-6 fade-in">
      <div className="flex items-center gap-3 mb-2">
        <h2 className="text-2xl md:text-3xl text-foreground">{title}</h2>
        {badge && (
          <span className="badge-status">{badge}</span>
        )}
      </div>
      {description && (
        <p className="text-muted-foreground text-sm">{description}</p>
      )}
      <div className="section-divider mt-4"></div>
    </div>
  );
}
