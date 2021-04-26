let img=document.querySelector("#foco");
img.src="img/foco_prendido.png";
let body=document.querySelector("#body");
let btn_prender=document.querySelector("#btn_prender");
let btn_apagar=document.querySelector("#btn_apagar");
btn_prender.addEventListener("click",prender);
btn_apagar.addEventListener("click",apagar);
prender();

function prender() {
    img.src="img/foco_prendido.png";
    body.classList.add("encendido");
    body.classList.remove("apagado");
}

function apagar() {
    img.src="img/foco_apagado.png";
    body.classList.add("apagado");
    body.classList.remove("encendido");

}