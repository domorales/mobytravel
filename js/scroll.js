window.addEventListener('scroll' , function(){

    let dato;
    let posicion;
    let heightWindow = screen.height;
    let widthWindow = screen.width;

    
    dato = document.getElementById("info");
    posicion = dato.getBoundingClientRect().top;
    if(posicion<heightWindow) dato.style.animation = "fadeinleft 1.5s  ease-out";


    dato = document.getElementById("tour");
    posicion = dato.getBoundingClientRect().top;
    if(posicion<heightWindow) dato.style.animation = "fadein 2s";


    dato = document.getElementById("cards");
    posicion = dato.getBoundingClientRect().top;
    if(posicion<heightWindow) dato.style.animation = "fadeinUp 1.5s";

    dato = document.getElementById("contact");
    posicion = dato.getBoundingClientRect().top;
    if(posicion<heightWindow) dato.style.animation = "fadeinleft 1.3s  ease-out";




})