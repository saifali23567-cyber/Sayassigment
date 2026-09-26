//map() 
//Double the numbers
const numbers = [1, 2, 3, 4, 5];
const modifiedNumbers = numbers.map((value) => value *=2 )
console.log(modifiedNumbers)
//Add 10 to each number
const numbers1 = [5, 10, 15, 20];
const modifiedNumbers1 = numbers1.map((value) => value +=10)
console.log(modifiedNumbers1)
//Convert names to uppercase
const names = ["ali", "sara", "ahmed"];
const modifiedNames = names.map((value) => value.toLocaleUpperCase())
console.log(modifiedNames)
//filter() 
//Get even numbers
const numbers2 = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers2.filter((value) => value % 2 == 0)
console.log(evenNumbers)
//Get numbers greater than 10
const numbers3 = [5, 12, 8, 20, 3, 15];
const modifiedNumbers3 = numbers3.filter((value) => value > 10) 
console.log(modifiedNumbers3)
//Get names longer than 4 characters
const names2 = ["Ali", "Ahmed", "Sara", "Usman", "John"];
const modifiedNames2 = names2.filter((value) => value.length > 4)
console.log(modifiedNames2)
//⭐ Use both
//First filter numbers greater than 5, then map them to double:
const numbers4 = [2, 6, 8, 3, 10];
const modifiedNumbers4 = numbers4.filter((value) => value > 5).map((value) => value *=2)
console.log(modifiedNumbers4)