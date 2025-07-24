// assets/js/principal.js


// Aparición del texto de bienvenida
document.addEventListener("DOMContentLoaded", function () {
  const textoBienvenida = document.querySelector(".texto-bienvenida");
  setTimeout(() => {
    textoBienvenida.classList.add("show");
  }, 1500);
});
