<<<<<<< HEAD
// object is a key:value pair

// object can be declared as : literal OR constructor
// constructor - singleton   ( Object.create )

/******    Object literals {}  ******/

const mySym = Symbol("Key1")

const JsUser = {
    name: "Vandana",
    "full name": "Vandana Gera", 
    [mySym] : "myKey1",   // for symbol use []
    age: 18,
    location:"Ambala",  
    email:"vandanagera@gmail.com",
    isLoggedIn: false,
    lastLoginDays: [ "Monday" , "Wednesday"]

}  

console.log( JsUser.email);
console.log( JsUser["email"]);
console.log( JsUser["full name"]);
console.log( JsUser [mySym]);


JsUser.email = "vandanagera@chatgpt.com"
  //to change
console.log( JsUser.email);
// Object.freeze(JsUser)    // to freeze object
JsUser.email = "vandanagera@microsoft.com"
console.log( JsUser.email);

JsUser.greeting = function(){
    console.log(" Hello JS User ");
}
  
// console.log(JsUser.greeting);       //undefined(Freeze)  //Function refrence
// console.log(JsUser.greeting());     // TypeError(Freeze) : Its not a function   // run then undefined

JsUser.greetingTwo = function(){
  console.log(`Hello JS User , ${this.name}`);   // Using - this
}

console.log(JsUser.greeting()); 
console.log(JsUser.greetingTwo()); 






=======
// object can be declared as : literal OR constructor
// constructor - singleton   ( Object.create )

/******    Object literals {}  ******/

const mySym = Symbol("Key1")

const JsUser = {
    name: "Vandana",
    "full name": "Vandana Gera", 
    [mySym] : "myKey1",   // for symbol use []
    age: 18,
    location:"Ambala",  
    email:"vandanagera@gmail.com",
    isLoggedIn: false,
    lastLoginDays: [ "Monday" , "Wednesday"]

}  

console.log( JsUser.email);
console.log( JsUser["email"]);
console.log( JsUser["full name"]);
console.log( JsUser [mySym]);


JsUser.email = "vandanagera@chatgpt.com"
  //to change
console.log( JsUser.email);
// Object.freeze(JsUser)    // to freeze object
JsUser.email = "vandanagera@microsoft.com"
console.log( JsUser.email);

JsUser.greeting = function(){
    console.log(" Hello JS User ");
}
  
// console.log(JsUser.greeting);       //undefined(Freeze)  //Function refrence
// console.log(JsUser.greeting());     // TypeError(Freeze) : Its not a function   // run then undefined

JsUser.greetingTwo = function(){
  console.log(`Hello JS User , ${this.name}`);   // Using - this
}

console.log(JsUser.greeting()); 
console.log(JsUser.greetingTwo()); 






>>>>>>> 10576b4891b8ab941137bfe1faacf6a73ead2d91
