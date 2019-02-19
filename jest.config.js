module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/cypress/', '<rootDir>/_build/'],
  testMatch: ['<rootDir>/**/*.spec.js'],
  modulePaths: ['<rootDir>/node_modules/', '<rootDir>/'],
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.js?$': '<rootDir>/jest-custom-transformer.js',
  },
};
