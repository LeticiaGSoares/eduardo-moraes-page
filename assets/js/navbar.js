const menuHamburger = document.querySelector('#menuHamburger');
const navbar = document.querySelector(".nav-links");
let isMenuOpen



const openMenu = () => {
    navbar.style.transform = "translateY(0)";
    navbar.style.opacity = "1";
    navbar.style.display = "inherit";
    console.log('aberto')
};

const closeMenu = () => {
    navbar.style.transform = "translateY(-600px)";
    navbar.style.opacity = "0";
    console.log('fechado')
};

const toggleMenu = () => {
    isMenuOpen ? openMenu() : closeMenu();
    isMenuOpen= !isMenuOpen
};

const windowResize = () => {
    if (window.innerWidth > 820) {
        isMenuOpen = true;
        navbar.style.display = 'flex'
    } else {
        isMenuOpen = false;
        navbar.style.display = "none";
        console.log('a')
    }
    
    toggleMenu()
}

document.addEventListener("DOMContentLoaded", windowResize())

window.addEventListener("resize", windowResize);
menuHamburger.addEventListener("click", toggleMenu);
