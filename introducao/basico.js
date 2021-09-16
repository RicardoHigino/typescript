"use strict";
var a = 'Teste TS! v2';
console.log(a);
function compact(arr) {
    if (arr.length > 10)
        return arr.slice(0, 10);
    return arr;
}
console.log(compact(["ricardo", "teste", "jsajda", "aaa"]));
