<template>
    <h1>Nicolas Delhaye</h1>
    <h2>Développeur informatique junior</h2>
    <img src="@/assets/images/me.jpg" alt="Nicolas Delhaye">

    <p>Depuis tout jeune, je suis très fortement intéressé par tout ce qui touche à l'informatique.
      J'en ai depuis fait ma spécialité. Je suis actuellement en deuxième année de BUT Informatique à l'IUT de Lens.
      J'y développe mes compétences en algorithmique, programmation, développement web, base de données, réseaux et systèmes.
    </p>
</template>

<script setup>
</script>

<style scoped>

.moving-object {
  position: absolute;
  top: 30%; /* Position verticale */
  left: 0; /* Début de l'animation */
  width: 50px;
  height: 50px;
  background-color: #606166;
  border-radius: 50%;
  z-index: -1;
  animation: move-horizontal 2s; /* Animation */
}

/* Animation CSS */
@keyframes move-horizontal {
  0% {
    left: 0; /* Position de départ */
  }
  33% {
    left: 70%; /* Milieu de l'écran */
    top : 30%;
  }
  66% {
    left: 30%;
    top: 70%;
  }
  100% {
    left: calc(100% - 50px); /* Fin de l'écran */
    top: 70%;
  }
}

img {
  border-radius: 50%;
  width: 350px;
  height: auto;
  margin-bottom: 20px;
}

p {
  width: 50%;
  text-align: justify;
}

@media (max-width: 768px) {
  p {
    width: 70%; /* Réduire la largeur sur les petits écrans */
  }
}

@media (max-width: 480px) {
  p {
    width: 80%; /* Réduire davantage sur les très petits écrans */
  }
  img {
    width: 250px; /* Réduire la taille de l'image */
  }
}
</style>