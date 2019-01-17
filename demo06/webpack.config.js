const path =  require("path");

module.exports = {
    entry:{
      app:"./src/app.js"
    },
    output:{
      publicPath:__dirname + "/dist/",
      path:path.resolve(__dirname,"dist"),
      filename:"[name].bundle.js"
    },
    module:{
      rules:[
         {
            test:/\.scss$/,
            use:[
              {
                loader:"style-loader"   //将js字符串生成为style节点
              },
              {
                loader:"css-loader"   //将CSS转化为 CommonJS模块
              },
              {
                loader:"sass-loader"  //将Sass 编译为css
              }
            ]
         }
      ]
    }
};
