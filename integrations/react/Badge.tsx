import React from 'react';
import 'quantumcss/dist/components/badge.css';

interface BadgeProps {
  variant?: 'primary' | 'success' | 'warning' | 'danger';
  dot?: boolean;
  children?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({ variant = 'primary', dot, children }) => {
  const classes = [
    'q-badge',
    `q-badge-${variant}`,
    dot && 'q-badge-dot'
  ].filter(Boolean).join(' ');

  return <span className={classes}>{children}</span>;
};
