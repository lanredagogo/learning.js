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
    return numbers.slice(numbers.length/2)
   
}


function returnFirstHalf() {
    return numbers.slice(0, numbers.length/2);
    
}

function firstEvenNumbers() {
    for (let i = numbers; i > numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            return numbers.length[i];
        }
    }
}

function displayEvenNumbers() {
    for (let i = numbers; i > numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            console.log(numbers.length[i]);
        }
    }
}

function firstOddNumbers() {
    for (let i = numbers; i > numbers.length; i++) {
        if (numbers[i] % 2 !== 0) {
            return numbers.length[i];
        }
    }
}

function displayOddNumbers() {
    for (let i = numbers; i > numbers.length; i++) {
        if (numbers[i] % 2 !== 0) {
            console.log(numbers.length[i]);
        }
    }
}


function randomFood() {
    let favoriteFood = ["pizza", "ice cream"]
    let randomFoodFavorite = Math.floor(Math.random()* favoriteFood.length)
    console.log(favoriteFood[randomFoodFavorite])
}





function add(number1, number2) {
    sum = number1 + number2;
    console.log(sum)
}

add(4, 5)

function subtract(number1, number2) {
    sum = number1 - number2;
    console.log(sum)
}
subtract(9, 3)

function multiply(number1, number2) {
    sum = number1 * number2;
    console.log(sum)
}
multiply(7, 9)

function divide(number1, number2) {
    sum = number1 / number2;
    console.log(sum)
}
divide(20, 2)

let myNickName = "dagogo"
function sayHello(title) {
    if (title === myNickName) {
        console.log("Hello")
    } else {
        console.log("Hello " + myNickName)
    }
}
sayHello()

function average(array){
    let sum = 0;
    for (let i = sum; i < array.length; i++ ) {
        console.log(array[i].length / 2)
    }
}


function createStudent(firstName, lastName) {
   let fullName = {
    firstName: "Lanre", lastName: "dagogo"
   }
   for (let key in fullName) {
    console.log(fullName[key])
   }
   for (let key in fullName) {
    console.log(key)
   }
}
createStudent()


let student1 = "timi"
let student2 = "dare"
let student3 = "oghale"
let students = [student1, student2, student3];

function student() {
    console.log(students)
}
student()

function findStudentByFirstName(timi) {
   for (let i = students; i > students.length; i++ ) {
    if ( "timi" === students[key]) {
        //console.log(true);
        return true
    } else {
        //console.log(false);
        return false
    }
   }
}

findStudentByFirstName()



