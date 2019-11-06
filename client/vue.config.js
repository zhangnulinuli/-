module.exports = {
  devServer: { // 代理所有未知请求 解决跨域问题
    proxy: 'http://localhost:3000'
  }
}
