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
const resenas = document.querySelectorAll(".resena");
const puntos = document.querySelectorAll(".punto");

const anterior = document.getElementById("anterior");
const siguiente = document.getElementById("siguiente");

let resenaActual = 0;


function mostrarResena(numero) {

    resenas.forEach(resena => {
        resena.classList.remove("activa");
    });

    puntos.forEach(punto => {
        punto.classList.remove("activo");
    });

    resenas[numero].classList.add("activa");
    puntos[numero].classList.add("activo");

    resenaActual = numero;
}


/* SIGUIENTE */

siguiente.addEventListener("click", () => {

    let siguienteResena = resenaActual + 1;

    if (siguienteResena >= resenas.length) {
        siguienteResena = 0;
    }

    mostrarResena(siguienteResena);
});


/* ANTERIOR */

anterior.addEventListener("click", () => {

    let anteriorResena = resenaActual - 1;

    if (anteriorResena < 0) {
        anteriorResena = resenas.length - 1;
    }

    mostrarResena(anteriorResena);
});


/* CAMBIO AUTOMÁTICO */

setInterval(() => {

    let siguienteResena = resenaActual + 1;

    if (siguienteResena >= resenas.length) {
        siguienteResena = 0;
    }

    mostrarResena(siguienteResena);

}, 5000);