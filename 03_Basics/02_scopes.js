// Local and Global scope
// var is used globally

//var c = 300
let a = 5
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "vandana"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "vandana"
    if (username === "vandana") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++

// it Will not throw error if used first and declared later

console.log(addone(5))
function addone(num){
    return num + 1
}


// Will throw error if used first and declared later(because a variable holds this function)

// addTwo(5)
const addTwo = function(num){
    return num + 2
}   
