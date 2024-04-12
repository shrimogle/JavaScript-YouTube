const name = "hitesh"
const repoCount = 50

 console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('shrinivas')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('i'));
//console.log(gameName.repeat());


const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   shrinivas    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://shrinivas.com/shrinivas%20mogle"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

const gameName1 = new String("shrinivas-mogle")
console.log(gameName1.split('-'));