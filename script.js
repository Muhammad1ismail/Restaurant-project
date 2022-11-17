console.log("hello world");

const getElement = (selector) =>{
    const element = document.querySelector(selector);
    if(element) return element;
    throw Error(`Please double check.There is no ${selector} class.`);
}

const links = getElement(".nav-links");
const navBtn = getElement(".nav-btn");
navBtn.addEventListener("click",()=>{
   links.classList.toggle("show-links");
});

const date = getElement("#date");
const currentYear = new Date().getFullYear();
date.textContent = currentYear;
