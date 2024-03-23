//truthy values, falsy value

/*in below ex we checked th value which userEmail exsist or not, i.e, 
  we haven't check the condition, just assumed it to be true if it exixt
  this is called truthy value. if userEmail has empty string then it 
  would print else statement. */

const userEmail = "hurmademohit@gmail.com"

if(userEmail){
    console.log("Got user eail");
}
else{
    console.log("don't have user email");
}

/* Falsy value -  values which are consider as false
                  ex: false, 0, -0, BigInt 0n, ""(empty string), null, undefined, NaN(not a no.)
   Truthy Value - values which are consider as true
                  ex: "0", 'false'/"false" (becoz itz a string), " "(space inside quote), [](empty array), {}, functio(){} (empty function and object)               
                  */

// to check empty array
if (userEmail.length === 0){
    console.log("Array is empty");
}

// to check object is empty
const emptyObj = {}
if(Object.keys(emptyObj).length === 0){ 
    console.log("Object is empty");
} //Object.keys(emptyObj) is now an array so we can use its function here



/*******************/

//Nullish Coalescing Operator (??): null undefined
// this is used to handle errors

let val1; 
val1 = 5 ?? 10 // will print 5
val1 = null ?? 10 // will print 10
val1 = undefined ?? 15 // will print 15
val1 = null ?? 10 ?? 20 // will print 10

console.log(val1);

// Terniary Operator - condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("< 80") : console.log("> 80")
