const date=(document.getElementById("date") .innerHTML=new Date().getFullYear())

// nav
const navBtn=document.getElementById("nav-btn");
const navbar=document.getElementById("navbar");
const navClose=document.getElementById("nav-close");

//nav show
navBtn.addEventListener("click",()=>{
    navbar.classList.add("showNav");
});

navClose.addEventListener("click", ()=>{
    navbar.classList.remove("showNav");
})