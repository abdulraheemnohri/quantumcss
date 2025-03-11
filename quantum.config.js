module.exports = {
  theme: {
    colors: {
      primary: '#007bff',
      secondary: '#6c757d',
      success: '#28a745',
      danger: '#dc3545'
    },
    spacing: {
      unit: '1rem',
      scale: {
        1: '0.25rem',
        2: '0.5rem',
        3: '1rem',
        4: '1.5rem',
        5: '3rem'
      }
    },
    breakpoints: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    }
  },
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./src/**/*.html', './src/**/*.js']
  }
};
