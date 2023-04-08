let button1 = document.getElementById("buttonMain1")
let ul1 = document.getElementById("ul1")
button1.addEventListener('click', () => {
    console.log("Принято")
    if (button1.dataset.active == 0) {
        button1.style.borderBottomLeftRadius = 0
        button1.style.borderBottomRightRadius = 0
        button1.style.transition = "0s"
        ul1.style.display = "block"
        button1.dataset.active = 1
    } else {
        button1.style.borderBottomLeftRadius = "20px"
        button1.style.borderBottomRightRadius = "20px"
        button1.style.transition = "1s"
        ul1.style.display = "none"
        button1.dataset.active = 0
    }
});

let button2 = document.getElementById("buttonMain2")
let ol1 = document.getElementById("ol1")

button2.addEventListener('click', () => {
    console.log("Принято")
    if (button2.dataset.active == 0) {
        button2.style.borderBottomLeftRadius = 0
        button2.style.borderBottomRightRadius = 0
        button2.style.transition = "0s"
        ol1.style.display = "block"
        button2.dataset.active = 1
    } else {
        button2.style.borderBottomLeftRadius = "20px"
        button2.style.borderBottomRightRadius = "20px"
        button2.style.transition = "1s"
        ol1.style.display = "none"
        button2.dataset.active = 0
    }
});

let button3 = document.getElementById("buttonMain3")
let ul2 = document.getElementById("ul2")

button3.addEventListener('click', () => {
    console.log("Принято")
    if (button3.dataset.active == 0) {
        button3.style.borderBottomLeftRadius = 0
        button3.style.borderBottomRightRadius = 0
        button3.style.transition = "0s"
        ul2.style.display = "block"
        button3.dataset.active = 1
    } else {
        button3.style.borderBottomLeftRadius = "20px"
        button3.style.borderBottomRightRadius = "20px"
        button3.style.transition = "1s"
        ul2.style.display = "none"
        button3.dataset.active = 0
    }
});