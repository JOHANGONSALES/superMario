

document.querySelector(".barra_menu ").addEventListener("click", animateBars);

var linea1 = document.querySelector(".linea1_barra-menu");
var linea2 = document.querySelector(".linea2_barra-menu");
var linea3 = document.querySelector(".linea3_barra-menu");

function animateBars() {
  linea1.classList.toggle("activelinea1_barra-menu");
  linea2.classList.toggle("activelinea2_barra-menu");
  linea3.classList.toggle("activelinea3_barra-menu");
  document.querySelector(".menu-lateral").style.display = "block";
}

document.addEventListener("click", function(event) {
  // Comprueba si el clic fue dentro del menú o en la barra de menú
  var dentroMenu = event.target.closest(".menu-lateral, .barra_menu");
  
  if (!dentroMenu) {
    // se activa para ocultar el menu
    document.querySelector(".menu-lateral").style.display = "none";
    linea1.classList.remove("activelinea1_barra-menu");
    linea2.classList.remove("activelinea2_barra-menu");
    linea3.classList.remove("activelinea3_barra-menu");
  }
});
