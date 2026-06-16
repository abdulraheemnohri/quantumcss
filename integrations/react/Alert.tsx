import React from 'react';
import 'quantumcss/dist/components/alert.css';

/**
 * Alert Component
 * Used to provide contextual feedback messages.
 */
interface AlertProps {
  /** The theme variant of the alert */
  variant?: 'success' | 'error' | 'warning' | 'info';
  /** Main message of the alert */
  children: React.ReactNode;
}

export const Alert: React.FC<AlertProps> = ({ variant = 'info', children }) => {
  return (
    <div className={`q-alert q-alert-${variant}`}>
      {children}
    </div>
  );
};
