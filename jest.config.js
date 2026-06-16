module.exports = {
  moduleFileExtensions: ['js', 'vue'],
  transform: {
    '^.+\.vue$': 'vue-jest',
    '^.+\.js$': 'babel-jest'
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/tests/setup.js']
};
