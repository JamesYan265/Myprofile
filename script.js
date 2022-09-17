const MenuIcon = document.querySelector(".MenuIcon");
const MenuBox = document.querySelector(".BigMenuBox");
const MenuBar = document.querySelector(".MenuBar");

MenuIcon.addEventListener('click',()=>{
    MenuBox.classList.toggle('active');
});

VanillaTilt.init(document.querySelector(".card"), {
    max: 3,
    speed: 200,
    glare: true,
    "max-glare":0.1,
});

