/*let myAge = 30
let humanDogRatio = 7
let myDogAge = myAge * humanDogRatio

console.log(myDogAge)

let bonusCount = 50
bonusCount = bonusCount + 50
bonusCount = bonusCount - 75
bonusCount = bonusCount + 45
console.log(bonusCount)*/

// Lesson 1
/*let people = ["Greg", "Mary", "Devon", "James"];
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}
people.shift()
people.pop()
people.unshift("Matt")
people.push("Dagogo")
for (let i = 0; i < 2; i++) {
    console.log(people[i]);
}
people.slice(2,3);
people.indexOf(1);
people.indexOf("foo");
people
people.splice(2,1, "Elizabeth", "Artie")
let withBob = people.concat("Bob")
withBob
people*/


// Lesson 2
/*let obj = {
    firstName: "Lanre",
    lastName: "Dagogo",
    occupation: "Developer"
}
obj.firstName
obj.lastName
obj.occupation
obj.hobby = "Reading"
delete obj.occupation*/


// Lesson 3 
/*let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "https://www.devtopics.com/best-programming-jokes/"
};

programming.languages.push("Go");
programming.difficulty = 7;
delete programming.jokes
programming.isFun = true
for (let i = 0; i < programming.languages.length; i++) {
    console.log(programming.languages[i])
    console.log(programming)
}

function myName()  {
    let fullName = "Lanre Adebayo Dagogo"
    console.log(fullName)
}
myName()

let favoriteFood = ["Rice", "Beans"]

function randomFood() {
    let bestFood = Math.floor(Math.random() * favoriteFood.length)
    console.log(favoriteFood[bestFood])
}

randomFood()




let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function sortNumbers() {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2) {
            console.log(numbers[i] + 2)
        } else if (numbers[i] = 1) {
          
        }
    }
}
sortNumbers()*/




/*function map(array, callback) {
    let results = array.concat(callback)
    for (let i = 0; i < callback.length; i++) {
        //return callback[i]
        console.log(callback[i])
    }
}

map()*/


let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "https://www.devtopics.com/best-programming-jokes/"
};

programming.languages.push("Go");
programming.difficulty = 7
delete programming.jokes;
programming.isFun = true;
for (let i = 0; i > programming.languages.length; i++) {
    console.log(programming.languages[i])
}
for (let language of programming.languages){
    console.log(language)
}

for (let key in programming) {
    console.log(key)
}

for (let key in programming) {
    console.log(programming[key])
}



let namesAndHobbies = {
    elie: "JavaScript",
    matt: "jogging",
    janey: "table building",
    tim: "sailing"
}

for (let key in namesAndHobbies) {
    console.log(key)
    console.log(namesAndHobbies[key])
}

namesAndHobbies.name = "coding"

if ("name" in namesAndHobbies) {
    console.log(namesAndHobbies.name)
    // this logout only the value
}

let myInfo = {
    firstName: "lanre",
    lastName: "akinbote",
    occupation: "frontend developer"
}

myInfo.firstName
myInfo["firstName"]
myInfo.lastName
myInfo["lastName"]
myInfo.occupation
myInfo["occupation"]

myInfo.hobby = "reading";
delete myInfo.occupation;

function myName() {
    let fullName = "lanre dagogo";
    console.log(fullName);
}

let favoriteFood = ["pizza", "icream"]
function randomFood() {
    let randomInFood = Math.floor(Math.random() * favoriteFood.length)
    console.log(favoriteFood[randomInFood])
}


