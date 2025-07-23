// assets/js/principal.js



// Aparición del texto de bienvenida
document.addEventListener("DOMContentLoaded", function () {
  const welcomeText = document.querySelector(".texto-bienvenida");
  setTimeout(() => {
    welcomeText.classList.add("show");
  }, 1500);
});
