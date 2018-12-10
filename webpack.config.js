const path = require('path')
const webpack = require('webpack')
const pkg = require('./package.json')

const banner = `CollapseJs v${pkg.version}
(c) 2018 Ahsan Abrar
Released under the MIT License.`

const config = {
  entry: './src/js/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin({
      banner
    })
  ]
}

// umd
const umd = Object.assign({}, config, {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'collapsejs.js',
    library: 'collapsejs',
    libraryTarget: 'umd',
    libraryExport: 'default',
    umdNamedDefine: true
  }
})

// esm
const esm = Object.assign({}, config, {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'collapsejs-esm.js',
    // libraryTarget: 'es'
  }
})

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    console.log('development env')
  }

  if (argv.mode === 'production') {
    console.log('production env')
  }

  return [umd, esm]
}
