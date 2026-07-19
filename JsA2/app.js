
//Check if a number is positive or negative.
var number = prompt("Enter a number")

if(number>=0){
  console.log("number is postive")
}
else{
    console.log("number is negative")
}
//Check if a number is even or odd.
if(number % 2 == 0){
    console.log("number is even")
}
  else{
      console.log("number is odd")
}
//Check if a person's age is 18 or above. If yes, print "Eligible to vote", otherwise print "Not eligible to vote".
var age = prompt("Please enter your age")

if(age >= 18){
    console.log("Eligible to vote")
}
  else{
      console.log("Not eligible to vote")
}
//Check if a student has passed. Passing marks are 50.
var marks = prompt("Please enter marks")

if(marks >= 50){
    console.log("Student has passed")
}
  else{
      console.log("student has failed")
}
//Check if a number is greater than 100. If yes, print "Large Number", otherwise print "Small Number".
var number1 = prompt("Enter a number")

if(number1 > 100){
    console.log("Large Number")
}
  else{
      console.log("Small Number")
}
//Check if a password is equal to "admin123". If yes, print "Login Successful", otherwise print "Incorrect Password".
var password = prompt("Enter your password")

if(password == "admin123"){
    console.log("Login Successful")
}
  else{
      console.log("Incorrect Password")
}
//Check if a user has enough balance to buy an item. If the balance is greater than or equal to the item price, print "Purchase Successful", otherwise print "Insufficient Balance".
var balance = prompt("Enter your balance")
var itemPrice = prompt("Enter the item price")

if(balance >= itemPrice){
    console.log("Purchase Successful")
}
  else{
      console.log("Insufficient Balance")
}
//Check if a temperature is above 30°C. If yes, print "It's Hot", otherwise print "Weather is Pleasant".
var temperature = prompt("Enter temperature")

if(temperature > 30){
    console.log("It's Hot")
}
  else{
      console.log("Weather is Pleasant")
}
//Check if a number is divisible by 5.
var number2 = prompt("Enter a number")

if(number2 % 5 == 0){
    console.log("Divisible by 5")
}
  else{
      console.log("Not divisible by 5")
}
//Check if a traffic light is "green". If yes, print "Go", otherwise print "Stop".
var trafficLight = prompt("Enter the traffic light color")

if(trafficLight == "green"){
    console.log("Go")
}
  else{
      console.log("Stop")
}
//Check if a username is "admin". If yes, print "Welcome Admin", otherwise print "Access Denied".
var userName = prompt("Enter user name")
if(userName == "admin"){
    console.log("Welcome Admin")
}
  else{
      console.log("Access Denied")
}
//Check if a person's height is 170 cm or more. If yes, print "Tall", otherwise print "Average Height".
var height = prompt("Enter your height in cm")

if(height >= 170 ){
    console.log("Tall")
}
  else{
      console.log("Average height")
}
//Check if a user is logged in (true or false). If logged in, print "Welcome Back", otherwise print "Please Login".
var loginStatus = prompt("Enter login status, either true or false");
if(loginStatus == "true" ){
    console.log("Welcome Back")
}
  else{
      console.log("Please Login")
}
//Check if a person's age is 60 or above. If yes, print "Senior Citizen", otherwise print "Not a Senior Citizen".
var age1 = prompt("Enter your age");
if(age1 >= 60 ){
    console.log("Senior Citizen")
}
  else{
      console.log("Not a Senior Citizen")
}
//Check if a shop is open (true or false). If open, print "Shop is Open", otherwise print "Shop is Closed".
var shopStatus = prompt("Enter shop open status, either true or false");
if(shopStatus == "true" ){
    console.log("Shop is Open")
}
  else{
      console.log("Shop is Closed")
}
