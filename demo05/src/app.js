

let clicked =  false;
window.addEventListener("click",function() {
     //需要手动点击页面才会引入样式
     if(!clicked){
         import("./css/base.css");
     }
});
