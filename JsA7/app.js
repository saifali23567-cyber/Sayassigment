let h1 = document.getElementById("heading1")
h1.textContent = "My Student Profile"

let name = document.getElementsByClassName("name")
name[0].style.color = "blue"

let messages = document.querySelectorAll(".message")

for (let i = 0;i<messages.length;i++){
    messages[i].style.color = "green"
}

document.body.style.background = "lightgray"

function bgChange(){
document.body.style.background = "lightblue"
}

let btn = document.querySelector("#btn")
btn.onclick = bgChange

let link = document.querySelector("a")
console.log(link.getAttribute("href"))
link.setAttribute("target","_blank")

let box = document.querySelector("#box")
box.classList.add("active")

console.log(box.classList.contains("active"))

console.log(box.parentElement)