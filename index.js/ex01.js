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
    let fullName = "Lanre Adebayo Dagogo";
    console.log(fullName)
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
numbers.slice(5, 9)

function returnSecondHalf() {
    console.log(numbers.slice(4, 9)) ;
   
}

function returnFirstHalf() {
    console.log(numbers.slice(0, 4));
    
}


function randomFood() {
    let favoriteFood = ["pizza", "ice cream"]
    let randomFoodFavorite = Math.floor(Math.random()* favoriteFood.length)
    console.log(favoriteFood[randomFoodFavorite])
}


