let menu = document.querySelector(".menu");
let dropdown = document.querySelector(".drop_down");
let animationbtn = document.querySelector(".animationbtn");

//target = element which triggered the event
//currenttarget = element which listener is attached

menu.addEventListener("click", (e) => {
    if(e.target === e.currentTarget){
        dropdown.classList.toggle("visible");
    }
})

animationbtn.addEventListener("mouseover", (e) => {
    if(e.target === e.currentTarget){
        animationbtn.classList.toggle("animation");
    }
})