const bubbleMaker = () => {
  const bubble = document.createElement("span"); // création d'un span
  bubble.classList.add("bubble"); //injecter une class
  document.body.appendChild(bubble); // ajouter la span dans le body
  const size = Math.random() * 200 + 100 + "px"; //nombre aléatoire pour la taille des bulles

  bubble.style.width = size;
  bubble.style.height = size;

  bubble.style.top = Math.random() * 100 + 50 + "%";
  bubble.style.left = Math.random() * 100 + "%";

  bubble.style.setProperty("--left", Math.random() * 100 + "%");
};
