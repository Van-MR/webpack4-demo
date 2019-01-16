  /**
   *   webpack 支持ES6  CommanJS和AMD规范
   */

   //ES6
    import sum from './vendor/sum';
    console.log("sum(1,2) = ",sum(1,2));


    //CommanJs
    const minus = require('./vendor/minus');
    console.log("minus(1,2) = ",minus(1,2));
