<template>
  <h1>Mes projets</h1>
  <hr class="custom-line">
  <h2>Méditrip</h2>
  <p id="description">Nous avons réalisé ce projet en équipe dans le cadre du Marathon du Web, un évènement organisé par notre école qui se déroule durant 48 heures sans pause.
  Le but de ce projet était de créer un site web de gestion de voyage où chacun pourrait raconter ses aventures.
  Nous avons réalisé le site avec Laravel.</p>
  <div id="carouselProjects" class="carousel slide" data-bs-ride="carousel" data-aos="flip-left" data-aos-duration="1500">
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
          <img src="@/assets/images/projects/meditrip1.png" class="d-block w-100" alt="..." loading="eager">
        </div>
        <div class="carousel-caption">
          <h5>Page d'accueil</h5>
        </div>
      </div>
      <div class="carousel-item">
        <div class="carousel-image-wrapper">
          <img src="@/assets/images/projects/meditrip2.png" class="d-block w-100" alt="..." loading="eager">
        </div>
        <div class="carousel-caption">
          <h5>Création d'un voyage</h5>
        </div>
      </div>
      <div class="carousel-item">
        <div class="carousel-image-wrapper">
          <img src="@/assets/images/projects/meditrip3.png" class="d-block w-100" alt="..." loading="eager">
        </div>
        <div class="carousel-caption">
          <h5>Section contact</h5>
        </div>
      </div>
      <div class="carousel-item">
        <div class="carousel-image-wrapper">
          <img src="@/assets/images/projects/meditrip4.png" class="d-block w-100" alt="..." loading="eager">
        </div>
        <div class="carousel-caption">
          <h5>Étapes d'un voyage</h5>
        </div>
      </div>
      <div class="carousel-item">
        <div class="carousel-image-wrapper">
          <img src="@/assets/images/projects/meditrip5.png" class="d-block w-100" alt="..." loading="eager">
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

  <hr class="custom-line">
  <h2>Autres projets</h2>
  <div class="container">
    <div class="row">
      <div
          v-for="(project, index) in projects"
          :key="index"
          class="col-12 col-sm-6 col-lg-4 d-flex justify-content-center mb-5" data-aos="fade-right" data-aos-duration="1500">
          <project-card :title="project.title" :description="project.description" :img="project.img" />
      </div>
    </div>
  </div>
</template>

<script setup>
import ProjectCard from '@/components/ProjectCard.vue'
import bomberman1 from '@/assets/images/projects/bomberman1.png'
import flask1 from '@/assets/images/projects/flask1.png'
import reseau from '@/assets/images/projects/reseau.jpg'

const projects = [
  {
    title: 'Bomberman',
    description: 'Reproduction du jeu vidéo Bomberman en Java et JavaFX et création d\'un exécutable',
    img: bomberman1
  },
  {
    title: 'Juste Prix',
    description: 'Création du jeu iconique du Juste Prix en python et Flask grâce à une API repertoriant les produits d\'Amazon',
    img: flask1
  },
  {
    title: 'Conception d\'un réseau',
    description: 'Protocole TCP/IP, mise en place du routage, configuration des services DHCP/DNS/HTTP',
    img: reseau
  }
]

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
  background-color: var(--blue-color); /* Couleur des flèches */
  color: var(--white-color); /* Couleur de l'icône */
  width: 40px;
  height: 40px;
  border-radius: 10px;
}

.carousel-control-prev-icon:hover,
.carousel-control-next-icon:hover {

}

#description {
  width: 50%;
  text-align: justify;
}

@media (max-width: 768px) {
  #description {
    width: 70%; /* Réduire la largeur sur les petits écrans */
  }
}

@media (max-width: 576px) {
  h1 {
    font-size: 50px;
  }
  h2 {
    font-size: 30px;
  }
  #description {
    width: 80%; /* Réduire davantage sur les très petits écrans */
  }
  img {
    width: 250px; /* Réduire la taille de l'image */
  }
  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    width: 30px;
    height: 30px;
  }
}

h1 {
  margin-top: 50px;
  text-align: center;
}

h2 {
  text-align: center;
  margin-bottom: 30px;
}

h5 {
  color: var(--white-color);
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
}

.custom-line {
  border: none;
  width: 150px; /* Longueur de la ligne */
  height: 3px; /* Épaisseur de la ligne */
  background-color: var(--light-blue-color); /* Couleur personnalisée */
  margin: 20px 0; /* Espace autour de la ligne */
}
</style>