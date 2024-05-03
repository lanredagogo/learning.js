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
let people = ["Greg", "Mary", "Devon", "James"];
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
people


// Lesson 2
let obj = {
    firstName: "Lanre",
    lastName: "Dagogo",
    occupation: "Developer"
}
obj.firstName
obj.lastName
obj.occupation
obj.hobby = "Reading"
delete obj.occupation


// Lesson 3 
let programming = {
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


/*function map(array, callback) {
    let results = array.concat(callback)
    for (let i = 0; i < callback.length; i++) {
        //return callback[i]
        console.log(callback[i])
    }
}

map()*/

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function sortNumbers() {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2) {
            console.log(numbers[i] + 2)
        } else if (numbers[i] = 1) {
          
        }
    }
}
sortNumbers()