const menuHamburger = document.querySelector('#menuHamburger');
let isMenuOpen = false;
const navbar = document.querySelector(".nav-links");

const openMenu = () => {
    isMenuOpen = !isMenuOpen;
    navbar.style.transform = "translateY(0)";
    navbar.style.opacity = "1";
    navbar.style.display = "inherit";
};

const closeMenu = () => {
    isMenuOpen = !isMenuOpen;
    navbar.style.transform = "translateY(-600px)";
    navbar.style.opacity = "0";
};

const toggleMenu = () => {
    isMenuOpen ? openMenu() : closeMenu();
};

const windowResize = () => {
    if (window.innerWidth > 820) {
        isMenuOpen = true;
    } else {
        isMenuOpen = false;
        navbar.style.display = "none";
    }
    
    toggleMenu()
}

window.addEventListener("resize", windowResize);
menuHamburger.addEventListener("click", toggleMenu);
