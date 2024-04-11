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