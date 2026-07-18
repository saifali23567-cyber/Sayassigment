//Question 1: Personal Information
var userName = prompt("Please enter your name")
var age = prompt("Please enter your age")
var city = prompt("Please enter your city")

console.log("Hello "+ userName +"!")
console.log("You are " + age + " years old.")
console.log("You live in " + city + ".")

//Question 2: Sum of Two Numbers
var x = prompt("Please enter a number")
var y = prompt("Please enter a number")
console.log(+x + +y)

//Question 3: Basic Calculator
var x = prompt("Please enter a number")
var y = prompt("Please enter a number")

console.log("Addition: "+ (+x + +y))
console.log("Subtraction: "+ (x - y))
console.log("Multiplication: "+ (x * y))
console.log("Division: "+ (x / y))

//Question 4: Rectangle Area
var L = prompt("Please enter length")
var W = prompt("Please enter width")
var A = L*W
console.log("Area: "+A)

//Question 5: Circle Circumference
var radius = prompt("Enter radius")
var circumference = 2*Math.PI*radius
console.log("Circumference: "+ circumference)

//Question 6: Student Marks
var studentName = prompt("Enter student name")
var englishMarks = prompt("Enter english marks")
var mathMarks = prompt("Enter math marks")
var scienceMarks = prompt("Enter science marks")

var totalMarks = 300;
var obtainedMarks = +englishMarks + +mathMarks + +scienceMarks

console.log("Student Name: "+studentName)
console.log("Total Marks: "+totalMarks)
console.log("Obtained Marks: "+obtainedMarks)

//Question 7: Age After 10 Years
var currentAge = prompt("Enter your current age"); 
var futureAge = +currentAge + 10
console.log("Age after 10 years: "+futureAge) 

// Question 8: Currency Conversion
var pkr = 285;
var amountUsd = prompt("Enter amount in USD: ")
console.log("Amount converted to PKR: "+ amountUsd*pkr)

//Question 9: Favorite Programming Language
var userName = prompt("Please enter your name")
var programmingLanguage = prompt("Please enter your favorite programming language")
console.log("Hello "+userName+"!")
console.log("Your favorite programming language is "+ programmingLanguage +".")
console.log("Keep practicing!")

//Question 10: Simple Receipt
var productName = prompt("Please enter product name")
var price = prompt("Please price")
var quantity = prompt("Please enter quantity")

var totalPrice = price * quantity

console.log("Product: "+productName)
console.log("Price: "+price)
console.log("Quantity: "+quantity)
console.log("Total: "+totalPrice)
