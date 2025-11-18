const btns = document.querySelectorAll(".addCart");
const bag = document.querySelector(".shopping-bag");

for(let btn of btns) {
    btn.addEventListener("click", bigger);
}

function bigger () {
    bag.classList.add("bigger-img");
    setTimeout(() => {
        bag.classList.remove("bigger-img");
    }, 600); 
}   

const toggleBtn = document.querySelector("#toggle-btn");
const mobilMenu = document.querySelector("#hamburger-menu");
const closeMobilMenuBtn = document.querySelector("#close-hamburger-menu");

toggleBtn.addEventListener('click', ()=> {
    mobilMenu.classList.toggle("open");
});

closeMobilMenuBtn.addEventListener('click', ()=> {
    mobilMenu.classList.remove("open");
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 992) {
        mobilMenu.classList.remove("open");
    }
});