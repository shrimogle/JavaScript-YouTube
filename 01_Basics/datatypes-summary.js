//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

console.log(typeof anotherId);


// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3


// Stack Memory(Primitive)   ,
// Heap Memory(Non-Primitive)

let myname = "Shrinivas"

let anothername = myname
anothername= "Rushi"

console.log(myname);
console.log(anothername);

/***************      *************** */

let myid = {
    PRN:"RBT21CB014",
    email:"mogleshri@gmail.com"
}

let anotherid = myid

anotherid.PRN = "RBT21CB027"
anotherid.email = "shrimogle@gmail.com"

console.log(anotherid.PRN,anotherid.email);

console.log(myid.PRN,myid.email);
