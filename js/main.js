const logo = document.getElementById("logo");
const menu = document.getElementById("menu");
const header = document.querySelector("header");

window.addEventListener("scroll", function() {

    if (window.scrollY > 50) {
        header.classList.add("compacto");
        menu.classList.add("showMenu");
    } else {
        header.classList.remove("compacto");
        
        menu.classList.remove("showMenu");

    }

});

logo.addEventListener("mouseenter", function() {
    menu.classList.remove("showMenu");
    header.classList.remove("compacto");
});

menu.addEventListener("mouseleave", function() {
    if (window.scrollY > 50) {
        
        header.classList.add("compacto");
        menu.classList.add("showMenu");
    }
});

let slides = document.querySelectorAll(".slide");

let indice = 0;

function cambiarFoto() {

    slides[indice].classList.remove("active");

    indice++;

    if (indice >= slides.length) {
        indice = 0;
    }

    slides[indice].classList.add("active");
}

setInterval(cambiarFoto, 4000);