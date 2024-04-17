/*
Immediateli Invoked Function Expressions ( IIFE )

    immediate execution
    to avoid Global Scope pollution
*/

/*
function start(){
    console.log(` DB connected `);
}
start();                          //required semi-colon
*/

// SYNTAX --------- (fun definition) (execution)
// (function start(){
//     console.log(` DB connected `);
// })();                         //required semi-colon

/*
// ++++++++ Arrow function
( () => {
    console.log(` DB connected `);
})()
*/

( ( name ) => {
    console.log(` DB connected ${name}`);
})( 'vnduuu')
