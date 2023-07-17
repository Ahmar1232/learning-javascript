let number = 123
// console.log(number);
let numberObj = new Number("123")
// console.log(numberObj);
// let decimalNumber = new Number(1235.5)
// console.log(decimalNumber.toFixed(4)); // number of digits after the decimal
// console.log(decimalNumber.toPrecision(5)); // number of the significant digits 


let num = 0.001658853
// console.log(typeof(num.toPrecision(2)));

let amount = 10000000
// console.log(amount.toLocaleString("en-IN"));


//+++++++++++++++++++++++++++++++Maths++++++++++++++++++++++++++
// console.log(Math);
// console.log(Math.PI);
// console.log(Math.abs(4));
// console.log(Math.round(199.55))
// console.log((Math.floor(0.1)));
// console.log((Math.ceil(199.55)));
// console.log(Math.min(100,122,10));
// console.log(Math.max(20,250,123));
console.log(Math.floor(Math.random()*11));
let min = 0
let max = 6
console.log(Math.floor(Math.random()*(max-min+1))+min);
