/*console.log("Hello World");
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
}*/

//Two equality operators, == and ===
//== just checks the value of the things being compared, while === will check the data type as well.
//Can do !== and !===, there is also < <= > >=, and && ||

// *** Arrays ***
const array = [1, 2, 4];
const array1 = [4, 5, 6];
const array2 = array.concat(array1);

console.log(search(array2, "test"));

function search(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == item) return item;
    }

    return null;
}

//Can push/pop from arrays in javascript
array.push(8);
console.log(array);
array.pop();
console.log(array);

//To insert at start
array.unshift(17);
console.log(array);

//Iterator for array
array.forEach((i) => console.log(i));

const array4 = array.map((i) => i * 2);
console.log(array4);

const array5 = array.filter((i) => i % 2 == 0);
console.log(array5);

console.log(`The sum of 7 and 12 is ${7 + 12}`);

//Arrow functions
let sumGreaterB = (a, b) => {
    c = a + b;
    return c > b;
};

console.log(sumGreaterB(10, 25));

//If only one statement in function.
//If only one parameter can get rid of () around parameter
let multiply = (x, y) => x * y;
console.log(multiply(3, 4));

//Object Literals, can make arrays of them
const student1 = {
    firstName: "John",
    lastName: "Smith",
    gpa: 4.0,
    age: 21,
    courses: ["Web Design", "Game Design", "Programming Languages"],
    address: {
        street: "123 Main St.",
        city: "Auburn Hills",
        state: "MI",
        zip: "12345",
    },
};

console.log(student1.firstName);

const {
    address: { zip },
} = student1;
console.log(zip);

student1.email = "testemail@gmail.com";
console.log(student1);

const tasks = [
    { name: "task1", status: "In-Progress" },
    { name: "task2", status: "Done" },
];
console.log(tasks.filter((item) => item.status === "Done"));

let tasksJSON = JSON.stringify(tasks);
console.log(tasksJSON);

//OOP Classes and Functions
class Employee {
    constructor(fName, lName, age) {
        this.fName = fName;
        this.lName = lName;
        this.age = age;
    }

    getAge() {
        return this.age;
    }

    getFullName() {
        return this.fName + " " + this.lName;
    }
}

const steve = new Employee("Steve", "Green", 23);
console.log(steve.getFullName());
