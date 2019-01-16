import(/* webpackChunkName: ‘subPageA’*/ "./subPageA").then(function(subPageA) {
    console.log(subPageA);
});

import("./subPageA").then(function(subPageB) {
    console.log(subPageB);
});

import("lodash").then(function(_) {
    console.log(_join(["1","2"]));
});

export default "page";
