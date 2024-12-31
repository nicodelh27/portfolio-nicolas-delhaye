<template>
  <div class="container">
    <div class="row mb-4">
      <div class="col-12 col-md-6 information">
        <h1>Nicolas Delhaye</h1>
        <h2>Développeur informatique junior</h2>
        <p>Depuis tout jeune, je suis très fortement intéressé par tout ce qui touche à l'informatique.
          J'en ai depuis fait ma spécialité. Je suis actuellement en deuxième année de BUT Informatique à l'IUT de Lens.
          J'y développe mes compétences en algorithmique, programmation, développement web, base de données, réseaux et systèmes.
        </p>
      </div>
      <div class="col-12 col-md-6 d-flex justify-content-center image-container">
        <img src="../assets/images/me.png" alt="Nicolas Delhaye">
      </div>
    </div>
    <div class="row" id="btn-row">
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
  </div>
</template>

<script setup>
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
</style>