let buttonLike = document.getElementById("like");
let buttonMal  = document.getElementById("mal");
let mensaje    = document.getElementById("mensaje");
let gifMal        = document.getElementById("gifMal");          
let gif2          = document.getElementById("gif2");            
let gifLikeFirst  = document.getElementById("gifLikeFirst");    


let firstChoice = null;

function ocultarGifs() {
    if (gifMal) gifMal.style.display = "none";
    if (gif2) gif2.style.display = "none";
    if (gifLikeFirst) gifLikeFirst.style.display = "none";
}

if (buttonMal) {
    buttonMal.addEventListener("click", () => {
        if (firstChoice === null) {
            firstChoice = 'mal';
        }
        mensaje.textContent = "¡COMO! ven aqui Dudu, que me esforze para que no te guste😠";
        ocultarGifs();
        if (gifMal) gifMal.style.display = "block";
    });
}

if (buttonLike) {
    buttonLike.addEventListener("click", () => {
        if (firstChoice === null) {
            firstChoice = 'like';
            mensaje.textContent = "¡SIII te gusta!😊";
            ocultarGifs();
            if (gifLikeFirst) gifLikeFirst.style.display = "block";
        } else if (firstChoice === 'mal') {
            mensaje.textContent = "¡Ahora sí que te gusta, ya sabia!😊";
            ocultarGifs();
            if (gif2) gif2.style.display = "block";
        } else {
            mensaje.textContent = "¡Se que te gusta tranquilo Dudu!😊";
            ocultarGifs();
            if (gifLikeFirst) gifLikeFirst.style.display = "block";
        }
    });
}
