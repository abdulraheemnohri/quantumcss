import React from 'react';
import 'quantumcss/dist/components/card.css';

interface CardProps {
  title?: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ title, footer, children }) => {
  return (
    <div className="q-card">
      {title && <div className="q-card-header">{title}</div>}
      <div className="q-card-body">{children}</div>
      {footer && <div className="q-card-footer">{footer}</div>}
    </div>
  );
};
