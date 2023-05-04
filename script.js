const cuerpoPagina = document.querySelector("body");
const textoh1 = document.querySelector ("#texto-1"); 

const COLOR_FONDO = "white";
const TXT_TAM = "35px";
const TXT_COLOR = "black";
const TXT_FUENTE = "Arial";

function modificarPagina() {
    cuerpoPagina.style.color = TXT_COLOR;
    cuerpoPagina.style.backgroundColor = COLOR_FONDO;
    cuerpoPagina.style.fontFamily = TXT_FUENTE;
    cuerpoPagina.style.fontSize = TXT_TAM;
    textoh1.style.color=TXT_COLOR;
}