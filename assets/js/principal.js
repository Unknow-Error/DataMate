// assets/js/principal.js

document.addEventListener("DOMContentLoaded", function() {
  const welcomeText = document.querySelector(".welcome-text");
  setTimeout(() => {
    welcomeText.classList.add("show");
  }, 1000); // Retraso de 1 segundo para la animación
});