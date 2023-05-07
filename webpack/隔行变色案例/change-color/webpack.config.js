const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin')
const htmlPlugin = new HtmlPlugin({
    template:'./src/index.html',
    filename:'./index.html'
})
module.exports = {
  devtool: 'eval-source-map ',
  mode:"development",
  plugins:[htmlPlugin,  new CleanWebpackPlugin(),],
  // 设置入口文件路径
  entry:path.join(__dirname,"./src/index.js"),
  // 设置出口文件路径
  output:{
    path:path.join(__dirname,"dist"),
    filename:"main.js"
  },
  devServer:{
    open:true,
    port:80
  },
  module:{
    rules:[
      {test:/\.css$/,use:['style-loader','css-loader']},
      {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
      {text:/\.js$/,use:'babel-loader',exclude:/node_modules/}

    ]
  }
}