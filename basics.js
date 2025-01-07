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

// we also have conditional statements with one of them already being shown
//we have the classic
if (pointer == 2){
    console.log("the number is 2")
}
else if (pointer > 2){
    console.log("number is greater than 2")
}
else{
    console.log("Number is not 2 and lesser than 2 :(")
}
//also == and === is different since == check if they have the same value regardless of type while === checks for both
// != and !== are the same but check to see if the opposite is true
console.log(2=="2")
console.log(2==="2")

// we also have to learn about basics of javascript when using it on the frontend and some basic javascript functions

// map() creates new array by copying a previous array and changing the values based on the function used to change it

const numbers = [1, 2, 3]
const numbersSquared = numbers.map(num => num**2)
console.log(numbersSquared)

// we also have filter() which just filters an array based on some given conditional. creates new array
const evenOnly = numbers.filter(num => num % 2 === 0)
console.log(evenOnly);
// reduce() is another function where it basically allows you to add each item to one another for a total
//additionally you could add the index where its supposed to start
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue)
console.log(sum)
//we also have trim(gets rid of whitespace surrounding a word), toUpperCase and toLowerCase 
//javascript has event listeners where they essentially wait for a click or some other action
//based on what you make it "listen" to
document.getElementById('myButton').addEventListener('click', () => {
    alert('Button clicked!');
  });
// this code also used the getElementById which basically searches for a id tag based on what name you enter
//similar to this we also have query selctor where it selects a class
const header = document.querySelector('h1');
//apparently you can change the value of a tag like this
header.textContent = 'Welcome to My Site';
//below is useful way to validat forms. will have to use on portfolio
const emailInput = document.getElementById('email');
if (!emailInput.value.includes('@')) {
  alert('Please enter a valid email address.');
}
//alert just shows a pop up box with the given message. If you want to change it then you can use css
//to make your own by hiding the pop up and creating your own
//alternatively you can go to javascript libraries and use the alert designs they have there (like sweetAlert2)
//below is very important

//fetch is used to make calls to API's
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
//fetch by default is a get method but you can change it
const response = await fetch("https://example.org/post", {
    method: "POST",
    // ...
  });
// here are some other examples of what I might want to use for my to do list API:
fetch('http://127.0.0.1:8000/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title: 'New To-Do Item' })
  })
    .then(response => response.json())
    .then(data => {
      console.log('Created:', data);
      // Update your UI with the new to-do item
    })
    .catch(error => {
      console.error('Error creating to-do item:', error);
    });

// body is the data that is going to be sent to the api where the data is turned to a string


//Request headers give the server information about the request: for example, the Content-Type header tells the server the format of the request's body.
  
fetch('http://127.0.0.1:8000/todos/1', {
    method: 'DELETE'
  })
    .then(response => {
      if (response.ok) {
        console.log('Deleted successfully');
        // Remove the item from your UI
      } else {
        throw new Error('Delete operation failed');
      }
    })
    .catch(error => {
      console.error('Error deleting to-do item:', error);
    });
  
fetch('http://127.0.0.1:8000/todos/1', {
    method: 'DELETE'
    })
    .then(response => {
        if (response.ok) {
        console.log('Deleted successfully');
        // Remove the item from your UI
        } else {
        throw new Error('Delete operation failed');
        }
    })
    .catch(error => {
        console.error('Error deleting to-do item:', error);
    });
//we could also consider fetching like below. The method below can be better if its more comfortable to use
//ill probably be using the method below
async function fetchData() {
    try {
      const response = await fetch('https://api.example.com/data');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
      // Further processing of the retrieved data
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }
  
  fetchData();
//fetch is a must for asynchronous data fetching
  
      