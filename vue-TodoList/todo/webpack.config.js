const VueLoaderPlugin = require('vue-loader/lib/plugin')//引入
const HTMLPlugin = require('html-webpack-plugin')//引入
const webpack = require('webpack')//引入
const ExtrcactPlugin = require('extract-text-webpack-plugin')//引入

const path = require('path');//node基本包 路径设置

const isDve = process.env.NODE_ENV === 'development'//环境变量全部存在process.env对象里面

const config = {
  target: 'web',//跑在浏览器 编译目标web平台
  mode: 'development',
  entry: path.join(__dirname, 'src/index.js'),//把这个路径跟后面的路径拼接起来形成绝对路径
  output: {
    filename: 'dundle.[hash:8].js',//输出文件名
    path: path.join(__dirname, 'dist')//输出路径 绝对路径
  },
  module: {
    rules: [//规则
      {
        test: /\.vue$/, //检测文件类型
        loader: 'vue-loader'//加载程序
      },
      {
        test: /\.jsx$/, //检测文件类型
        loader: 'babel-loader'//加载程序
      },
      {//图片
        test: /\.(png|jpeg|svg|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',//file-loader的语法糖
            options: {
              limit: 8192,//base64
              name: '[name]-aaa.[ext]'//配置图片文字
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // 确保包含插件
    new VueLoaderPlugin(),//注册
    new HTMLPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: isDve ? '"development"' : '"production"'
      }
    })
  ]
}


if (isDve) {
  config.module.rules.push({
    test: /\.styl/,//只处理css
    use: [
      'style-loader',
      'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: 'true',
        }
      },
      'stylus-loader'
    ]
  })
  config.devtool = '#cheap-module-eval-source-map'//映射代码
  config.devServer = {
    port: 8000, //启动 端口
    host: '0.0.0.0',//谁都可以访问
    overlay: {//将错误显示到网页上
      errors: true,
    },
    // open: true //启动dev自动打开浏览器
    hot: true,//

  }
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  )
} else {
  config.entry = {
    app: path.join(__dirname, 'src/index.js'),
    vendor: ['vue']
  }
  config.output.filename = '[name].[chunkhash:8].js'
  config.module.rules.push(
    {
      test: /\.styl/,//只处理css
      use: ExtrcactPlugin.extract({
        fallback: 'style-loader',
        use: [
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: 'true',
            }
          },
          'stylus-loader'
        ]
      })
    },
  )
  config.plugins.push(
    new ExtrcactPlugin('styles.[contextHash:8].css'),
    new webpack.optimize.SplitChunksPlugin({
      name: 'vendor'
    }),
    new webpack.optimize.SplitChunksPlugin({
      name: 'runtime'
    }),
  )
}
module.exports = config