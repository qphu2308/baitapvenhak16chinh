//bai1
let tuoi = 15;
let coTheMuaRuou = tuoi > 18;
console.log(coTheMuaRuou);
//bai2
let a = Boolean("");
console.log(a);
//false
let b = !!0;
console.log(b);
//false
let c = !![];
console.log(c);
//true
let d = !!1 > 2;
console.log(d);
//false
let e = !!{};
console.log(e);
//true
let f = !!"0";
console.log(f);
//true
//bai3
let a3 = 1023456789;
let b3 = a3;
console.log(b3);
//bai4
//bai5
let x =
  typeof (10 >= -1 && typeof NaN === "number" && "Ky" && false && true) ===
  false;
console.log(x);
//false
//bai6
var a6 = "1";
var b6 = 2;

var c6 = typeof a6;
var d6 = typeof b6;
var e6 = typeof d;
console.log(c6, d6, e6);
// c la string
// d la number
// e la object
//bai7
const x7 = 1 / 0;
console.log(x7 === x7 + 1);
//true
