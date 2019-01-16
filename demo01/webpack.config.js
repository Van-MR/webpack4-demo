  const path = require("path");

  module.exports = {
    entry:{
       app:'./app.js'
    },
    output:{
         publicPath:__dirname + '/dist/', // 引用的js路径
         path: path.resolve(__dirname,dist), //打包文件输出目录
         filename: bundle.js
    },
    module:{

    }


  }
