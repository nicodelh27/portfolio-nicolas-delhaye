<template>
  <div class="arrow-container" :class="{hide : isMenuOpen}">
    <img src="@/assets/images/arrow.png" alt="Clique ici pour en découvrir plus sur moi" class="arrow-img" />
  </div>
  <div class="container">
    <div class="row mb-5">
      <div class="col-12 col-md-6 information">
        <h1>Nicolas Delhaye</h1>
        <h2>Développeur informatique junior</h2>
        <p>Depuis tout jeune, je suis très fortement intéressé par tout ce qui touche à l'informatique.
          J'en ai depuis fait ma spécialité. Je suis actuellement en troisième année de BUT Informatique à l'IUT de Lens.
          J'y développe mes compétences en algorithmique, programmation, développement web, base de données, réseaux et systèmes.
        </p>
      </div>
      <div class="col-12 col-md-6 image-container">
        <img src="../assets/images/me.png" alt="Nicolas Delhaye">
      </div>
    </div>
    <div class="row mb-5" id="btn-row">
      <div class="col-12 col-sm-6 d-flex justify-content-sm-end justify-content-center">
        <a href="/cv_fr_nicolas_delhaye.pdf" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
          Mon CV
          <img src="@/assets/icons/french.png" alt="drapeau français">
        </a>
      </div>
      <div class="col-12 col-sm-6 d-flex justify-content-sm-start justify-content-center">
        <a href="/cv_en_nicolas_delhaye.pdf" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
          My CV
          <img src="@/assets/icons/english.png" alt="drapeau anglais">
        </a>
      </div>
    </div>
    <div class="row d-flex justify-content-center gx-md-5">
      <h2 class="text-center text-md-start" id="titre_a_propos">À propos</h2>
      <div class="info col-12 col-md-4">
        <p>
          <span class="emoji">💡</span> Je suis quelqu'un de très réfléchi et logique, j'adore résoudre des problèmes et trouver des solutions.
          Je suis également très organisé et j'adore aller au bout de ce que je fais.
          Cela est lié à mon côté ambitieux, je prends grand plaisir à me surpasser.
        </p>
      </div>
      <div class="info col-12 col-md-4">
        <p>
          <span class="emoji">🗣️</span> De plus, grâce à mes différentes <router-link to="/experiences">expériences</router-link> dans de nombreux domaines, j'ai eu l'occasion de travailler en équipe,
          d'améliorer ma communication et de travailler ma relation client.
          Tout ceci fait que je suis extrêmement sociable et j'adore le contact humain.
        </p>
      </div>
      <div class="info col-12 col-md-4">
        <p>
          <span class="emoji">🎾️</span> En dehors de l’informatique, j'aime beaucoup sortir et m'amuser.
          Je pratique de nombreuses activités comme le padel et le roundnet.
          Je m'intéresse beaucoup aux différents sujets liés à l'intelligence artificielle et au machine learning.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>

import {inject} from "vue";

const isMenuOpen = inject('isMenuOpen');
</script>

<style scoped>

.container {
  margin-top: 50px;
  margin-bottom: 80px;
}

@media (max-width: 768px) {
  .information {
    text-align: center;
  }

  p {
    margin: auto;
  }
}

p {
  text-align: justify;
  width: 90%;
}

/* Image */

.image-container {
  max-width: 100%; /* S'assure que le conteneur ne dépasse pas la largeur */
  display: flex;
  justify-content: end;
  align-items: center;
}

img {
  width: 400px;
  max-width: 100%; /* Empêche l'image de dépasser la largeur disponible */
  height: auto; /* Maintient les proportions */
}

@media (max-width: 768px) {
  .image-container {
    justify-content: center;
  }
}

@media (max-width: 576px) {
  img {
    width: 350px;
  }
}

/* Boutons */

.btn {
  background-color: var(--light-blue-color);
  border: 0;
  border-radius: 10px;
  padding: 12px 0;
  font-size: 24px;
  width: 200px;

  display: flex; /* Active Flexbox */
  align-items: center; /* Centre verticalement */
  justify-content: center; /* Centre horizontalement */
}

.btn img {
  width: 26px;
  margin-left: 15px;
}

.btn:hover {
  background-color: var(--dark-blue-color);
}

@media (max-width: 576px) {
  #btn-row {
    gap: 20px; /* Espace entre les boutons */
    margin-top: 50px;
  }
}

/* À propos */

.info {
  text-align: center;
  margin-bottom: 20px; /* Espace entre les paragraphes sur petits écrans */
}

#titre_a_propos {
  margin-bottom: 30px;
}

.info p {
  text-align: justify;
  width: 100%;
  margin: auto;
}

@media (max-width: 576px) {
  .info p{
    width: 90%;
  }
}

.info br {
  margin-bottom: 15px; /* Ajoute un espace entre les lignes */
  display: block;
}

.info span.emoji {
  font-size: 1.2em;
  margin-right: 10px;
}


/* Flèche */
.arrow-container {
  display: none;
  position: absolute;
  top: -30px; /* Ajuste selon ton design */
  right: 30px; /* Ajuste selon l'emplacement du burger */
  text-align: center;
  z-index: 1; /* Derrière le burger */
}

.arrow-img {
  width: 200px; /* Ajuste la taille */
  animation: translateRotate 1s;
}

@keyframes translateRotate {
  0% {
    transform: translate(20px, 20px) rotate(50deg);
    opacity: 0;
  }
  100% {
    transform: translate(0, 0) rotate(0deg);
    opacity: 1;
  }
}

@media (max-width: 767px) {
  .arrow-container {
    display: block; /* Affiche uniquement sur mobile */
  }
}

.hide {
  display: none;
}
</style>