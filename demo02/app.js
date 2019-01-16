import "babel-polyfill";

let func = () => {};

const Num = 45;

let arr = [1,2,3];

let arr2 = [4,5,6];

console.log(arr2.includes(8));

let arrb =[...arr,...arr2];

console.log(arrb);
