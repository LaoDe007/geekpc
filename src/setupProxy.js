const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api1",//预见 /api1前缀的请求,就会触发该代理设置
    createProxyMiddleware({
      target: "http://localhost:8000/",//请求转发给谁
      changeOrigin: true,//控制服务器收到的请求头中Host的值
      pathRewrite: { "^/api1": "" },//重写请求路径（必须）
    })
  );
};
