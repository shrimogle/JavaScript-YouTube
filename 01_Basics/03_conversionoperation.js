let score = 33

console.log(typeof score);
console.log(typeof (score));



let score1 = "33"
console.log(typeof(score1));

//Declare new variable for score1 which you want to convert into number from string

let ValueInNumber1 = Number(score1)
console.log(typeof ValueInNumber1);
console.log(ValueInNumber1);


// Check the variable having String+Number as value
// output will be NaN

let score2 = "33abs"
let ValueInNumber2 = Number(score2)
console.log(typeof ValueInNumber2 );
console.log(ValueInNumber2);

//If variable contains value NULL

let score3 = null
console.log(typeof score3);

let ValueInNumber3 = Number(score3)
console.log(typeof ValueInNumber3);
console.log(ValueInNumber3);

//

let score4 = undefined
console.log(typeof score4);

let ValueInNumber4 = Number(score4)
console.log(typeof ValueInNumber4);
console.log(ValueInNumber4);

//

let score5 = true
console.log(typeof score5);

let ValueInNumber5 = Number(score5)
console.log(typeof ValueInNumber5);
console.log(ValueInNumber5);

//"33" ==>33
//"33abbd" ==> NaN
//true ==> 1  false ==> 0
//undefined ==> NaN
//null ==> 0

let isloggedIn = ""

let booleanisloggedIN = Boolean(isloggedIn)

console.log(booleanisloggedIN);

//1 ==> true  or 0/null ==> false
//"string" ==> true


let somenumber = 14

let stringnumber = String(somenumber)

console.log(stringnumber);
console.log(typeof stringnumber);

//*************************  Operations  *****************************


let value = 3
let negValue = -value
console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); 2 to the power of 3
// console.log(2/3);
// console.log(2%3);  remainder

let str1 = "hello"
let str2 = " Shrinivas"

let str3 = str1 + str2
console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion