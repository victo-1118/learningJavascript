let name = "this must be a valid string"
const sumNum = 23 //I dont think semicolons are needed. even though in java its needed
var city = "old way to code variables"
//Why is let used?
// if var is used then it will be available anyweher no matter the scope where it is established
// However let isnt like that. If established in a loop it is only accessible in that loop making easer
// to control where exactly your variables will be at

//lets explore the datatypes
//we have num, bool and string of course
let word = "this is a word"
let num = 1
let bool = false
let char = 'a'
// there is no character type though just strings

console.log(typeof char)
//arrays can have multiple datatypes
let array = [true, 10, "apple"];
console.log(array)
// apparently you can create objects like this
let person = { name: "John", age: 30 }
console.log(typeof person)
console.log(person)

//lets create a simple greeting function

function greet(name) {
    return "hello ${name}!"
}

// doesnt work because we need backticks so that the computer doesnt take it completely literally and knows
// that it needs to subsitute
function updatedGreet(name) {
    return `hello ${name}!`
}
console.log(updatedGreet("victor"))

// now time for our loops
//first our for loop
for (let i = 0; i<5; i++){
    console.log(i)
}
// for function can also be used to iterate through arrays
array.forEach(item => console.log(item))
// while loop
let pointer = 0
while (typeof array[pointer] !== 'string'){
    pointer++
}
console.log(`ran ${pointer} times until it encountered a string`)
