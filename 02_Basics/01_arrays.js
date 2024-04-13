// array
const myArr = [0,1,2,3,4,5]
console.log(myArr[3]);

// const myHeors = ["shatiman","naagraj"]
 
const myArr1 = new Array(0,1,2,3,4,5)
// console.log(myArr1);

//  Array Methods

// myArr.push(6)
// console.log(myArr);
// myArr.push(7)
// console.log(myArr);

// myArr.pop()
// console.log(myArr);

// myArr.unshift(9)
// console.log(myArr);

// myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(9));

// console.log(myArr.indexOf(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

// slice, splice

console.log("A ", myArr); //original

const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log("B ", myArr);  //after slice

const myn2 = myArr.splice(1, 3)
console.log(myn2);
console.log("C ", myArr);  //after splice



