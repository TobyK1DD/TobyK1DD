const username = "TobyK1DD";
let age = 25;
const hobbies = ["gaming", "coding", "reading"];
const name = "Toby";
const isHealthy = true;
const isTall = false;

const person = {
    name: "Toby",
    age: 35,
    hobbies: ["gaming", "coding", "reading"],
};

console.log(username);
console.log(age);   
console.log(hobbies[1]);
console.log(person);

function greetUser(user) {
    console.log("Hello, " + username + "!");}

    greetUser(username);


function addNumbers(a,b) {
    return a + b;
}

const result = addNumbers(200, 500);
console.log(result);

if (isHealthy === false) {
    console.log("You are healthy!");
} else {
    console.log("You need to take care of your health.");
}

if (isTall === true) {
    console.log("You are tall!");
} else {
    console.log("You are not tall.");
}

function introduce(person) {
    console.log("My name is " + person.name);
    if (person.age >= 18) {
        console.log("you're a wise one");}
    else {
        console.log("still so much to learn, young one!");}
}
introduce(person);

