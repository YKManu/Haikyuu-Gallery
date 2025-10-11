// Detecta el toque en móvil o clic en PC

const cards = document.querySelectorAll(".Target");

cards.forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("flip");
  });
});
