const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const nodeEnv = process.env.NODE_ENV || 'pro'


var webpackPlugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(nodeEnv)
  }),
]

webpackPlugins.push(
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
      // Disabled because of an issue with Uglify breaking seemingly valid code:
      // https://github.com/facebookincubator/create-react-app/issues/2376
      // Pending further investigation:
      // https://github.com/mishoo/UglifyJS2/issues/2011
      comparisons: false
    },
    output: {
      comments: false,
      // Turned on because emoji and regex is not minified properly using default
      // https://github.com/facebookincubator/create-react-app/issues/2488
      ascii_only: true
    }
  })
)

const output = {
  path: path.resolve(path.join(__dirname, '/../../', 'dist')),
  filename: '[name].' + nodeEnv.replace(/"/g, '') + '.js'
}

const moduleRules = {
  rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules|src\/webpack)/,
      use: {
        loader: 'babel-loader'
      }
    },
    {
      test: /\.yml$/,
      loader: 'json-loader!yaml-loader'
    }
  ]
}

const entries = {
  banner: './src/performance/single_formats/banner.js',
  bubbles: './src/performance/single_formats/bubbles.js',
  native: './src/performance/single_formats/native.js',
  roadblock: './src/performance/single_formats/roadblock.js',
  video: './src/performance/single_formats/video.js',
  banner_banner_banner: './src/performance/combined_formats/banner_banner_banner.js',
  banner_bubbles: './src/performance/combined_formats/banner_bubbles.js',
  banner_bubbles_native: './src/performance/combined_formats/banner_bubbles_native.js',
  roadblock_banner_native: './src/performance/combined_formats/roadblock_banner_native.js',
  roadblock_video_native: './src/performance/combined_formats/roadblock_video_native.js'
}

Object.keys(entries).forEach(
  key => webpackPlugins.push(
    new HtmlWebpackPlugin({
      title: `Open Ads Demo Performance ${key}`,
      template: 'src/ui/performance_template.html',
      chunks: [key],
      filename: `${key}.html`,
    })
  )
)

module.exports = [
  {
    entry: entries,
    output,
    module: moduleRules,
    plugins: webpackPlugins
  }
]
