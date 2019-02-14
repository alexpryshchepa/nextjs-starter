/* eslint-disable */
const withSass = require('@zeit/next-sass');
const path = require('path');

module.exports = withSass({
  distDir: '_build',
  cssModules: true,
  cssLoaderOptions: {
    localIdentName: '[name]-[local]-[hash:base64:5]',
  },
  webpack(config) {
    config.resolve.modules = [path.resolve(__dirname), 'node_modules'];

    return config;
  },
});
