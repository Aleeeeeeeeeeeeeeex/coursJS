// Créer 3 ronds de tailles différentes (dont un qui remplacera la souris)
const rond_1 = document.querySelector(".rond_1");
const rond_2 = document.querySelector(".rond_2");

window.addEventListener("mousemove", (e) => {
  rond_1.style.left = e.pageX + "px";
  rond_1.style.top = e.pageY + "px";
});

window.addEventListener("mousemove", (e) => {
  rond_2.style.left = e.pageX + "px";
  rond_2.style.top = e.pageY + "px";
});

// Ajouter un événement sur la fenetre (window) puis animer la position de ces ronds (top, left injecter "e")

// S'assurer que les liens sont clickables

// Donner un style de transparence aux 2 plus gros ronds (mix-blend-mode)
