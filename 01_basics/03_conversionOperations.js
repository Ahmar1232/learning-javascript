"use strict";
let score = "33"
console.log(typeof score)
let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

score = "33ab"
console.log(typeof score)
valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

score = "abc"
console.log(typeof score)
valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber) // Not a Number (NaN) : a standalone value 

score = true
console.log(typeof score)
valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber) //1 and in case of fasle boolean value => 0

score = null
console.log(typeof score)
valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

score = undefined
console.log(typeof score)
valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

let isLoggedIn = 1
console.log(typeof isLoggedIn)
let booleanisLoggedIn = Boolean (isLoggedIn)
console.log(typeof booleanisLoggedIn)
console.log(booleanisLoggedIn)

let someString ="Ahmar"
console.log(typeof someString)
let booleansomeString = Boolean (someString)
console.log(typeof booleansomeString)
console.log(booleansomeString)

someString ="" // empty string
console.log(typeof someString)
booleansomeString = Boolean (someString)
console.log(typeof booleansomeString)
console.log(booleansomeString)

let someNumber =-3
console.log(typeof someNumber)
let numberInString = String (someNumber)
console.log(typeof numberInString)
console.log(numberInString)
