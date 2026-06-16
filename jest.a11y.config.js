module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/tests/setup-a11y.js'],
  testMatch: [
    '<rootDir>/tests/a11y/**/*.test.js'
  ],
  transform: {
    '^.+\.vue$': 'vue-jest',
    '^.+\.js$': 'babel-jest'
  }
};
