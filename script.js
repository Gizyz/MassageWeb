const navEl = document.querySelector(".nav");
const titlEl = document.querySelector("#title");
const bacdropEl = document.querySelector(".backdrop")

const menuEl = document.querySelector(".menuPop")
const menuBtn = document.querySelector(".menuBtn")
const closeBtn = document.querySelector(".closeBtn")

window.addEventListener("scroll", () => {
    console.log(window.scrollY)
    if (window.scrollY > 1) {
        navEl.setAttribute("class", "nav scrolled");

    } else {
        navEl.setAttribute("class", "nav unscrolled");
    }
})

menuBtn.addEventListener("click", function() {
    menuEl.setAttribute("class", "menuPop shown")
    bacdropEl.style.opacity = "0.6"    
})
closeBtn.addEventListener("click", function(){
    menuEl.setAttribute("class", "menuPop hidden")
})