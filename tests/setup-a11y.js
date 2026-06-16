import { configureAxe } from 'jest-axe';
import '@testing-library/jest-dom';

configureAxe({
  rules: {
    'region': { enabled: false } // Typical for component testing
  }
});
