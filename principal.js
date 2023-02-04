// mostrar barrita del costado

/*function mostrarParaiso(){

    const barraLateral = document.querySelector(".cote")
    let paraiso = ["W","E","L","C","O","M","E"," ","P","A","R","A","D","I","S","E"];
    
    for(let i=0 ; i < paraiso.length; i++){

        barraLateral.innerHTML +=  "<br>" + paraiso[i];
        
    };
}*/
function mostrarParaiso(){
    const barraLateral = document.querySelector(".cote")
        barraLateral.style.backgroundColor = "rgb(128,128,128,0.9)"
        barraLateral.style.visibility = "visible"

}

//esconder barrita del costado

function esconderParaiso(){
    const barraLateral = document.querySelector(".cote")

    barraLateral.style.visibility = "hidden";
}

//cambiar foto botas

function cambiarBotas(){
    const fondo = document.querySelector(".botas-container");

    fondo.style.backgroundImage = "url('botas1.webp')";
    fondo.style.transition = "1s";

}

function cambiarBotas1(){
    const fondo = document.querySelector(".botas-container");

    fondo.style.backgroundImage = "url('botas2.jpg')";
    fondo.style.transition = "1s";

}

//cambiar remeras

function cambiarRemeras(){
    const fondo = document.querySelector(".remeras-container");

    fondo.style.backgroundImage = "url('imagenes/remera1.jpg')";
    fondo.style.transition = "1s";

}

function cambiarRemeras1(){
    const fondo = document.querySelector(".remeras-container");

    fondo.style.backgroundImage = "url('imagenes/remera.jpg')";
    fondo.style.transition = "1s";

}

//cambiar jeans

function cambiarJeans(){
    const fondo = document.querySelector(".jeans-container");

    fondo.style.backgroundImage = "url('imagenes/jean.webp')";
    fondo.style.transition = "1s";

}

function cambiarJeans1(){
    const fondo = document.querySelector(".jeans-container");

    fondo.style.backgroundImage = "url('imagenes/jean1.webp')";
    fondo.style.transition = "1s";

}

function cambiarCamperas(){
    const fondo = document.querySelector(".camperas-container");

    fondo.style.backgroundImage = "url('imagenes/campera1.jpg')";
    fondo.style.transition = "1s";

}

function cambiarCamperas1(){
    const fondo = document.querySelector(".camperas-container");

    fondo.style.backgroundImage = "url('imagenes/campera.jpg')";
    fondo.style.transition = "1s";

}

//formulario
function subirName(){

    const label = document.querySelector(".formname");
    
    label.style.transform = "translate(-1em,-2.5em) scale(.7)";
    label.style.transition = ".5s";
    
    }


function subirEmail(){
    
    const label = document.querySelector(".formemail");
        
    label.style.transform = "translate(-1em,-2.5em) scale(.7)";
    label.style.transition = ".5s";
        
}

function subirPassword(){
    
    const label = document.querySelector(".formpassword");
            
    label.style.transform = "translate(-1em,-2.5em) scale(.7)";
    label.style.transition = ".5s";
            
}

function chau(){
    const chau = document.querySelector(".modal");

    chau.style.opacity = "0";
    chau.style.pointerEvents = "none";
}
