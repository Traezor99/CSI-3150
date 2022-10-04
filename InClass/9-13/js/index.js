console.log("Hello World");
console.warn("Warning!");
console.debug("testing");

//Variables and constants
const PI = 3.1415;
console.log(PI);

let thing = 23; //Scope of let is apparently the local code block
var thing2 = 32; //Scope of var is apparently global, so not ideal

const str = "A string"; //string type
const num = 3.45; //number data type
const integer = 4; //also number data type
const isCool = true; //boolean
const sk = null; //null
console.log(typeof num); //check the type of a variable

if (integer === "4") {
    console.log("integer is 4");
}

//Two equality operators, == and ===
//== just checks the value of the things being compared, while === will check the data type as well.
//Can do !== and !===, there is also < <= > >=, and && ||
