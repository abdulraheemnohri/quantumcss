import React from 'react';
import 'quantumcss/dist/components/progress.css';

/**
 * Progress Component
 * Displays the status of an ongoing process.
 */
interface ProgressProps {
  /** Percentage of completion (0-100) */
  value: number;
  /** Use indeterminate animation */
  indeterminate?: boolean;
}

export const Progress: React.FC<ProgressProps> = ({ value, indeterminate }) => {
  return (
    <div className={`q-progress ${indeterminate ? 'q-progress-indeterminate' : ''}`}>
      <div
        className="q-progress-bar"
        style={{ width: indeterminate ? undefined : `${value}%` }}
      />
    </div>
  );
};
