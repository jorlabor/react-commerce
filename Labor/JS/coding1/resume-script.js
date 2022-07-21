
// let body = document.querySelector("body");
// body.style.backgroundColor = '#000000';
// console.log("Body", body);
document.addEventListener("click", ()=>{
    let body = document.querySelector("body");
    body.style.backgroundColor = '#000000';
})

let section = document.querySelector(".header-address");

section.addEventListener("mouseenter", ()=>{
    
    section.classList.add("header-address-color");
});

section.addEventListener("mouseleave", ()=>{
    alert("ENTER");
    section.classList.remove("header-address-color");
});