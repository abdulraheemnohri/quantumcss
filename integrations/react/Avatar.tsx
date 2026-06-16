import React from 'react';
import 'quantumcss/dist/components/avatar.css';

/**
 * Avatar Component
 * Visual representation of a user or entity.
 */
interface AvatarProps {
  /** Optional image URL */
  src?: string;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Shape of the avatar */
  square?: boolean;
  /** Fallback text (e.g., initials) */
  children?: React.ReactNode;
}

export const Avatar: React.FC<AvatarProps> = ({ src, size = 'md', square, children }) => {
  const classes = [
    'q-avatar',
    size !== 'md' && `q-avatar-${size}`,
    square && 'q-avatar-square'
  ].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      {src ? <img src={src} alt="avatar" /> : children}
    </div>
  );
};
