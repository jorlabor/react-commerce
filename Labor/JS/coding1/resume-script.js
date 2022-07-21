
// let body = document.querySelector("body");
// body.style.backgroundColor = '#000000';
// console.log("Body", body);
// document.addEventListener("click", ()=>{
//     let body = document.querySelector("body");
//     body.style.backgroundColor = '#000000';
// })

let section = document.querySelector(".header-address");

section.addEventListener("mouseenter", ()=>{
    
    section.classList.add("header-address-color");
});

section.addEventListener("mouseleave", ()=>{
    alert("ENTER");
    section.classList.remove("header-address-color");
});

const buttonA = document.querySelector('#button_A');
const headingA = document.querySelector('#heading_A');

buttonA.onclick = () => {
    const name = prompt('What is your name?');
    alert(`Hello ${name}, nice to see you!`);
    headingA.textContent = `Welcome ${name}`;
}
