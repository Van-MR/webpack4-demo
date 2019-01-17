const path = require("path");

module.exports = {
  entry: {
    app: "./src/app.js"
  },
  output: {
    publicPath: __dirname + "/dist/",   //js文件的引入路径
    path: path.resolve(__dirname, "dist"),  //打包文件输出路径
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // css处理为style标签
        use: [
          {
            loader: "style-loader",
            options: {
              singleton: true
            }
          },
          {
            loader: "css-loader"
          }
        ]
        // css处理为link标签
        // use: [
        //   {
        //     loader: "style-loader/url"
        //   },
        //   {
        //     loader: "file-loader"
        //   }
        // ]
        // css卸载和加载样式(use与unuse方法)
        // use: [
        //   {
        //     loader: "style-loader/useable"
        //   },
        //   {
        //     loader: "css-loader"
        //   }
        // ]
      }
    ]
  }
};
