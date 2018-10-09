const autoprefixer = require('autoprefixer')
//stylus编译成css文件后通过postCss优化css代码 优化的过程通过一系列的组件优化
module.exports = {
  plugins: [
    autoprefixer()//优化需要加浏览器前缀的css属性
  ]
}