const glob = require('glob')
const path = require('path')

require('dotenv').config()

module.exports = {
  outputDir: "assets/webpack/",
  devServer: {
    port:  process.env.DEV_SERVER_PORT,
    host: "0.0.0.0",
    public: process.env.DEV_SERVER_PUBLIC,
    watchOptions: {
      poll: true
    },
    publicPath: '/',
    writeToDisk: true,
    https: false,
    disableHostCheck: true,
  },
  publicPath: `themes/${path.basename(__dirname)}/assets/webpack/`,
  pages: glob.sync('src/**/*.js').map(entry => ({
    entry,
    template: entry.replace(/\.js$/, '.htm'),
    filename: entry.replace(/\.js$/, '.webpack.htm').replace(/^src/, `${__dirname}/pages`),
    minify: {
      removeComments: true
    }
  })).reduce((obj, el) => ({
    ...obj,
    [el.entry]: el,
  }), {})
  // pages: {
  //   // TODO: auto scan all files
  //   test: {
  //     entry: "src/test.js",
  //     template: "src/test.htm",
  //     filename: "../pages/test.htm",
  //     minify: {
  //       removeComments: true
  //     }
  //   }
  // }
}
