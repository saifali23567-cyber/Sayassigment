//Q1. Array
var colors = ["Red", "Blue", "Green", "Yellow"];
console.log(colors[0])
console.log(colors[colors.length-1])
colors[1]="Black"
console.log(colors)
//Q2. Object
var student = {
    name: "Ali",
    age: 20,
    city: "Karachi"
};
console.log(student.name)
console.log(student.city)
student.city = "Lahore"
console.log(student)
//Q3. Array of Objects
var students = [
    {
        name: "Ali",
        marks: 70,
        atten: true
    },
    {
        name: "Ahmed",
        marks: 50,
        atten: false
    },
    {
        name: "Zubair",
        marks: 90,
        atten: true
    }
];
console.log(students[0].marks)
console.log(students[1].atten)
students[2].marks = 95
students[1].atten = true 
console.log(students)
//Q4. Loop
for(var i = 0; i<students.length; i++){
   console.log(students[i].name)
}
for(var i = 0; i<students.length; i++){
   console.log(students[i].marks)
}
for(var i = 0; i<students.length; i++){
   console.log(students[i].name + " - " + students[i].marks + " - " + students[i].atten)
}
//Bonus Question ⭐
var total =0;
for(var i = 0; i<students.length; i++){
   total +=students[i].marks
}
console.log(total)
var avg =total/students.length;
console.log(avg)
for(var i = 0; i<students.length; i++){
   students[i].marks +=5
}
console.log(students)