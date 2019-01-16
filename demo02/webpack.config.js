const path =  require("path");

module.exports = {
     entry: {
       app:'./app.js'
     },
     output:{
        filename:'bundle.js'
     },
     module:{
        rules:[
           {
             test:/.js$/,
             exclude:/(node_modules)/,
             use:{
               loader:"babel-loader"  //转化需要的laoder
               //options 选项配置在 .bablerc
               //options:{
               //...
               //}
             }
           }
        ]
     }
};
