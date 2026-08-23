//Level 1 — Very Basic Functions
// 1. sayHello()
function sayHello() {
    console.log("Hello World");
}
sayHello();

// 2. showName(name)
function showName(name) {
    console.log(name);
}
showName("Saif Ali")

// 3. add(a, b)
function add(a, b) {
    return a + b;
}
console.log(add(10, 5));              

// 4. subtract(a, b)
function subtract(a, b) {
    return a - b;
}
console.log(subtract(10, 5));      

// 5. multiply(a, b)
function multiply(a, b) {
    return a * b;
}
console.log(multiply(10, 5));        


// 6. square(num)
function square(num) {
    return num**2;
}
console.log(square(5));


// 7. cube(num)
function cube(num) {
    return num**3;
}
console.log(cube(3));                

// 8. getFullName(firstName, lastName)
function getFullName(firstName, lastName) {
    return firstName + " " + lastName;
}
console.log(getFullName("Saif", "Ali"));

//Level 2 — Functions + Conditions

// 1. isEven(num)
function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(10));      

// 2. isPositive(num)
function isPositive(num) {
    if (num > 0) {
        return "Positive";
    } else if (num < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}

console.log(isPositive(-5)); 

// 3. findGreater(a, b)
function findGreater(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

console.log(findGreater(10, 20)); 
// 4. canVote(age)
function canVote(age) {
    if (age >= 18) {
        return "Eligible";
    } else {
        return "Not Eligible";
    }
}

console.log(canVote(20));  
// 5. checkNumber(num)
function checkNumber(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(checkNumber(7));    
// 6. getGrade(marks)
function getGrade(marks) {
    if (marks >= 80) {
        return "A";
    } else if (marks >= 70) {
        return "B";
    } else if (marks >= 60) {
        return "C";
    } else if (marks >= 50) {
        return "D";
    } else {
        return "Fail";
    }
}

console.log(getGrade(85));           
// 7. isDivisibleBy5(num)
function isDivisibleBy5(num) {
    if (num % 5 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isDivisibleBy5(25));

//Level 3 — Functions + Strings
// 1. getLength(str)
function getLength(str){
   return str.length
}

console.log(getLength("Hello")); 
// 2. toUpperCase(str)
function toUpperCase(str){
   return str.toUpperCase();
}

console.log(toUpperCase("hello"));
// 3. getFirstCharacter(str)
function getFirstCharacter(str){
    return str[0];
}

console.log(getFirstCharacter("Hello"));
// 4. getLastCharacter(str)
function getLastCharacter(str){
  return str[str.length-1]
}

console.log(getLastCharacter("Hello"));

// 5. isLongWord(word)
function isLongWord(word){
  if(word.length > 5){
    return true
  }
  else {
    return false;
  }  
}

console.log(isLongWord("elephant")); 
//Level 4 — Small Problem Solving
// 1. calculateDiscount(price, discount)

function calculateDiscount(price, discount){
    let discountAmount = price * discount / 100;
    return price - discountAmount;
}

console.log(calculateDiscount(1000, 20));
// 2. calculateAge(birthYear, currentYear)
function calculateAge(birthYear, currentYear){
    return currentYear - birthYear;
}

console.log(calculateAge(2000, 2026));

// 3. convertToMinutes(hours)
function convertToMinutes(hours){
    return hours * 60;
}

console.log(convertToMinutes(2));

// 4. getLargest(a, b, c) 
function getLargest(a, b, c){
      if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

console.log(getLargest(10, 20, 15)); 

// 5. calculator(a, b, operator)
function calculator(a, b, operator){
   if (operator === "+") {
        return a + b;
    } else if (operator === "-") {
        return a - b;
    } else if (operator === "*") {
        return a * b;
    } else if (operator === "/") {
        return a / b;
    } else {
        return "Invalid operator";
    }
}

console.log(calculator(10, 5, "+"));
console.log(calculator(10, 5, "-")); 
console.log(calculator(10, 5, "*")); 
console.log(calculator(10, 5, "/")); 