let name = "ahmar"
let repoCount = 40
// console.log(`my name is ${name} and my repo count is ${repoCount}`);
let webName = "www.freeTea.com"
// console.log(webName.split('.'));
const str = 'The quick brown fox jumps over the lazy dog.';
const strCopy = str.split();
// console.log(strCopy[1]);
// console.log(str.split("",0));

let stringObject = new String('ahmar anwar')
// console.log(stringObject);
// console.log(stringObject.length);
// console.log(stringObject.toUpperCase());
// console.log(stringObject.charAt(2));
// console.log(stringObject.split(""));
// console.log(stringObject.indexOf('a',2));
let subString = stringObject.substring(0,11);
// console.log(subString);
let anotherSubString = stringObject.slice(0,);
// console.log(anotherSubString);
let someString = "   ahmar    anwar   "
// console.log(someString.trim())
// console.log(someString)
let url="https://hitesh.com/hitesh%20choudhary"
let domainName="www.myWebsite.com"
console.log(domainName.replaceAll(".","_")); // replace all the occurences of the pattren (".") with the replacement string ("_")
console.log(domainName.replace(".","_")); // replace only the first occurence of the pattren (".") with the replacement string ("_")
 console.log(str.includes("o"))