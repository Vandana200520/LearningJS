// Local and Global scope
// var is used globally

let a = 50
const b = 5
var c = 8


if(true){

    let a = 100
    const b = 10
    var c = 16
    console.log("Inner: ",a);
    console.log("Inner: ",b);
    console.log("Inner: ",c);
}


console.log(a);
console.log(b);
console.log(c);     
