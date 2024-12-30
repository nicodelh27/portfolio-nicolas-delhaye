<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-6 information">
        <h1>Nicolas Delhaye</h1>
        <h2>Développeur informatique junior</h2>
        <p>Depuis tout jeune, je suis très fortement intéressé par tout ce qui touche à l'informatique.
          J'en ai depuis fait ma spécialité. Je suis actuellement en deuxième année de BUT Informatique à l'IUT de Lens.
          J'y développe mes compétences en algorithmique, programmation, développement web, base de données, réseaux et systèmes.
        </p>
      </div>
      <div class="col-12 col-md-6 d-flex justify-content-center image-container">
        <img src="@/assets/images/me_bg_remove.png" alt="Nicolas Delhaye">
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>

.container {
  margin-top: 60px;
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

@media (max-width: 576px) {
  h1 {
    font-size: 50px;
  }

  h2 {
    font-size: 30px;
  }
}

.image-container {
  max-width: 100%; /* S'assure que le conteneur ne dépasse pas la largeur */
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  width: 350px;
  max-width: 100%; /* Empêche l'image de dépasser la largeur disponible */
  height: auto; /* Maintient les proportions */
}

p {
  text-align: justify;
  width: 90%;
}
</style>