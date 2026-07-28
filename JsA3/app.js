// 1. Write a program that prints numbers from 1 to 10 using a for loop.
for(var i = 1; i<=10; i++){
    console.log(i)
}
// 2. Write a program that prints numbers from 10 to 1 using a for loop
for(var i = 10; i>=1; i--){
    console.log(i)
}
// 3. Write a program that prints "Hello, JavaScript!" 5 times using a for loop.
for(var i = 0; i<5; i++){
    console.log("Hello, JavaScript")
}
// 4. Given the array below, print all its elements using a for loop.
var fruits = ["Apple", "Banana", "Mango", "Orange"];
for(var i = 0; i<fruits.length; i++){
    console.log(fruits[i])
}
// 5. Given the array below, calculate and print the total marks.
var marks = [50, 60, 70, 80];
var totalMarks = 0;
for(var i = 0; i<marks.length; i++){
    totalMarks = totalMarks + marks[i];
}
console.log(totalMarks)
// 6. Using the same array below, calculate and print the average marks.
var marks = [50, 60, 70, 80];
var totalMarks = 0;
var averageMarks = 0;
for(var i = 0; i<marks.length; i++){
    totalMarks = totalMarks + marks[i];
}
averageMarks = totalMarks / marks.length
console.log(averageMarks)
// 7. Given the array below, print all elements in reverse order using a for loop
var colors = ["Red", "Green", "Blue", "Yellow"];
for(var i = colors.length-1; i>=0; i--){
    console.log(colors[i])
}
// 8. Given the array below, print each element along with its index.
var numbers = [5, 10, 15, 20];
for(var i = 0; i<numbers.length; i++){
    console.log(numbers[i], i)
}
// 9. Given the array below, count how many elements it contains without using the number directly.
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var count = 0; 
for(var i = 0; i<cities.length; i++){
    count++;
}
console.log(count)
// 10. Given the array below, print only the even numbers.
var numbers = [2, 5, 8, 11, 14, 17, 20];
for(var i = 0; i<numbers.length; i++){
    if(numbers[i] % 2 == 0){
      console.log(numbers[i])
    }
}

