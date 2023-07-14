console.log("2" > 1); // converting string to number
console.log(2 > "1");// converting string to number
console.log(1 > "0.00002"); // converting string to number
console.log("02" > 1); // converting string to number
console.log("22" > "07") // pick first digit 
console.log("ali" > "ammar"); // dicitionary check

console.log(null > 0);//  false
console.log(null >= 0);// true ---------------->converting null to number (0) instead of NaN
console.log(null < 0);//  false
console.log(null <= 0);// true
console.log(null == 0);// false ---------------->converting null to NaN instead of number(0)

console.log(undefined > 0); // false
console.log(undefined >= 0);// false
console.log(undefined < 0); // false
console.log(undefined <= 0);// false
console.log(undefined == 0);// false ------> converting undefined  to NaN instead of number(0)

let someValue;
console.log(typeof someValue);
console.log(someValue);
let valueInNumber = Number(someValue);
console.log(typeof valueInNumber);
console.log(valueInNumber);
// no strict check
console.log("1" == true); // conversion => true
//strict check
console.log("1" === true); // no conversion => false
console.log(true === true); // true