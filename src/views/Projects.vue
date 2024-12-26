<template>
  <h1>Mes projets</h1>
  <h2>Méditrip</h2>
  <p>Application web de gestion de voyages</p>
  <div id="carouselProjects" class="carousel slide" data-bs-ride="carousel">
    <!-- Indicators -->
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselProjects" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselProjects" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselProjects" data-bs-slide-to="2" aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#carouselProjects" data-bs-slide-to="3" aria-label="Slide 4"></button>
      <button type="button" data-bs-target="#carouselProjects" data-bs-slide-to="4" aria-label="Slide 5"></button>
    </div>
    <!-- Slides -->
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="carousel-image-wrapper">
          <img :src="img1" class="d-block w-100" alt="..." loading="eager">
        </div>
        <div class="carousel-caption">
          <h5>Page d'accueil</h5>
        </div>
      </div>
      <div class="carousel-item">
        <div class="carousel-image-wrapper">
          <img :src="img2" class="d-block w-100" alt="..." loading="eager">
        </div>
        <div class="carousel-caption">
          <h5>Création d'un voyage</h5>
        </div>
      </div>
      <div class="carousel-item">
        <div class="carousel-image-wrapper">
          <img :src="img3" class="d-block w-100" alt="..." loading="eager">
        </div>
        <div class="carousel-caption">
          <h5>Section contact</h5>
        </div>
      </div>
      <div class="carousel-item">
        <div class="carousel-image-wrapper">
          <img :src="img4" class="d-block w-100" alt="..." loading="eager">
        </div>
        <div class="carousel-caption">
          <h5>Étapes d'un voyage</h5>
        </div>
      </div>
      <div class="carousel-item">
        <div class="carousel-image-wrapper">
          <img :src="img5" class="d-block w-100" alt="..." loading="eager">
        </div>
        <div class="carousel-caption">
          <h5>Profil utilisateur</h5>
        </div>
      </div>
    </div>
    <!-- Controls -->
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselProjects" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselProjects" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

  <h2>Autres projets</h2>
  <div class="container">
    <div class="row">
      <div class="col-12 col-sm-6 col-lg-4 d-flex justify-content-center mb-5">
        <project-card title="Projet 1" description="Description du projet 1" :img="img1" />
      </div>
      <div class="col-12 col-sm-6 col-lg-4 d-flex justify-content-center mb-5">
        <project-card title="Projet 2" description="Description du projet 2" :img="img2" />
      </div>
      <div class="col-12 col-sm-6 col-lg-4 d-flex justify-content-center mb-5">
        <project-card title="Projet 3" description="Description du projet 3" :img="img3" />
      </div>
    </div>
  </div>
</template>

<script setup>
import ProjectCard from '@/components/ProjectCard.vue'
import img1 from '@/assets/images/meditrip1.png'
import img2 from '@/assets/images/meditrip2.png'
import img3 from '@/assets/images/meditrip3.png'
import img4 from '@/assets/images/meditrip4.png'
import img5 from '@/assets/images/meditrip5.png'
</script>

<style scoped>

#carouselProjects {
  width: 800px;
  margin-bottom: 50px;
}

.carousel-image-wrapper img {
  border-radius: 10px;
}

@media (max-width: 470px) {
  #carouselProjects {
    width: 300px;
  }
}

@media (min-width: 471px) {
  #carouselProjects {
    width: 400px;
  }
}

@media (min-width: 700px) {
  #carouselProjects {
    width: 600px;
  }
}

@media (min-width: 1200px) {
  #carouselProjects {
    width: 800px;
  }
}

.carousel-caption {
  background-color: rgba(0, 0, 0, 0.5); /* Fond semi-transparent */
  padding: 10px;
  border-radius: 5px;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: #6d7fe2; /* Couleur des flèches */
  border-radius: 10px;
}

.carousel-control-prev-icon:hover,
.carousel-control-next-icon:hover {
  background-color: #0028c7; /* Couleur des flèches au survol */
}
</style>