module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/_build/', '<rootDir>/node_modules/'],
  testMatch: ['<rootDir>/**/*.jest.js'],
  modulePaths: ['<rootDir>/', '<rootDir>/node_modules/'],
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.js?$': '<rootDir>/jest-custom-transformer.js',
  },
};
