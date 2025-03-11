import React from 'react';
import 'quantumcss/dist/components/button.css';

interface ButtonProps {
  primary?: boolean;
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  primary,
  disabled,
  loading,
  children,
  onClick
}) => {
  const classes = [
    'q-btn',
    primary && 'q-btn-primary',
    loading && 'q-btn-loading'
  ].filter(Boolean).join(' ');

  return (
    <button 
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
