const withSass = require('@zeit/next-sass')
const withTM = require('next-plugin-transpile-modules');

module.exports = withTM(withSass({
  transpileModules: ['govuk-frontend-react', 'govuk-frontend'],
  webpack: (config, options) => {
    config.node = {
      fs: 'empty'
    }
    return config
  },
  cssModules: true,
}));
