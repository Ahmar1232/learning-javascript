//Primitive types(call by value) 
// 7 types : String, Number, BigInt, Boolean, null, undefined, Symbol
let string = "ahmar"
let someString = string
// console.log(string); 
someString = "anwar"
// console.log(string);

let number = 3334.4
console.log(typeof number)

//Reference types i.e., call by reference (non-Primitive)
// 3 types: Arrays, Objects, Functions
//Variables hold the actual values of primitive types, but they hold only references to the values of reference types.
let  heros = ["ninjaTurtles", "batman", "daredevil"]
let superHeros = heros 
superHeros[0] = "krish"
superHeros[1] = "superman"
superHeros[2] = "flash"
// console.log(heros);
// console.log(superHeros);
let myObj = {
    //key : value
    name : "ahmar", 
    rollNo : 6506 
}
// console.log(myObj);
let func = function (a,b) {
    console.log("Sum is:");
    return a+b
}

// console.log(func);
// console.log(func(3,3));
// console.log("Array: " + typeof heros);
// console.log("Function: " + typeof func);
// console.log("Object: " + typeof myObj);

let id = Symbol("123")
let anotherId = Symbol("123")
// console.log(typeof id);
// console.log(typeof anotherId);
// console.log(id === anotherId)


// let BigInt = 12343434334343399n
// console.log(BigInt);
// console.log(typeof BigInt);

