//if

if (true){

}

if(false){
    //this code won't execute
}

//comparison operator : <, >, ==, <=, >=, !=, ===, !== (strict check)
if (2=="2"){
    console.log("executed");
} 
if (2==="2"){
    console.log("executed");
} //strict check


// if-else
const temp = 41;
 if(temp === 41){
    console.log("less than 50");
 }
 else{
    console.log("temp>50");
 }
 console.log("executed") //it will surely execute
 
 //+++++++++++++++
 
 const score = 200

 if(score>100){
    const power = "fly"
    console.log(`user power: ${power}`);
 }
 console.log(`user power: ${power}`); //it will show error bcoz power is locla scope variable


 //implicit scope 
 const balance = 1000
 if(balance>500) console.log("test"); //it is called single line implicit scope

 const marks = 75
 if(marks > 35) console.log("pass"),
 console.log("goood cg");  //multi line, very unreadable 


//else if

const price = 350

if(price < 500){
    console.log("less than 500");
}
else if (price < 750){
    console.log("<750");
}
else if(price>200){
    console.log(">200");
}
else{
    console.log("kuch bhi")
}
 
/*************************************/

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log("Allow to buy courses");
}
if (loggedInFromEmail || loggedInFromGoogle){
    console.log("user logged in");
}

