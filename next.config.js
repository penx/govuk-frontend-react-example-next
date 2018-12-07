const withSass = require('@zeit/next-sass')

// if (typeof require !== 'undefined') {
//   require.extensions['.scss'] = (file) => {}
// }

module.exports = withSass({
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    return config
  },
  cssModules: true,
  // sassLoaderOptions: {
  //   includePaths: ["node_modules"]
  // }
});
