<template>
  <h1>Compétences</h1>
  <div class="container">
    <!-- Section Langages -->
    <div class="row">
      <div class="col-12 bord" data-aos="fade-right">
        <h2>Langages</h2>
        <div class="grid langages">
          <div class="skill"></div>
          <div class="skill"></div>
          <div class="skill"></div>
          <div class="skill"></div>
          <div class="skill"></div>
          <div class="skill"></div>
          <div class="skill"></div>
          <div class="skill"></div>
          <div class="skill"></div>
          <div class="skill"></div>
          <div class="skill"></div>
          <div class="skill"></div>
        </div>
      </div>
    </div>

    <!-- Section Frameworks et Outils -->
    <div class="row">
      <div class="col-12 col-md-6 bord" data-aos="fade-left">
        <h2>Frameworks</h2>
        <div class="grid frameworks">
          <div class="skill"></div>
          <div class="skill"></div>
          <div class="skill"></div>
          <div class="skill"></div>
          <div class="skill"></div>
          <div class="skill"></div>
        </div>
      </div>
      <div class="col-12 col-md-4 offset-md-2 bord" data-aos="fade-right">
        <h2>Outils</h2>
        <div class="grid outils">
          <div class="skill"></div>
          <div class="skill"></div>
          <div class="skill"></div>
          <div class="skill"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Conteneur des compétences */
.bord {
  border: 2px solid black;
  margin-bottom: 20px;
  padding: 10px;
}

/* Grille pour chaque section */
.grid {
  display: grid;
  gap: 20px; /* Espace entre les blocs */
  width: 100%; /* Utiliser tout l'espace disponible */
}

/* Section Langages : 6 colonnes dynamiques */
.langages {
  grid-template-columns: repeat(6, 1fr); /* 6 colonnes qui se partagent l'espace disponible */
}

/* Section Frameworks : 3 colonnes dynamiques */
.frameworks {
  grid-template-columns: repeat(3, 1fr); /* 3 colonnes dynamiques */
}

/* Section Outils : 2 colonnes dynamiques */
.outils {
  grid-template-columns: repeat(2, 1fr); /* 2 colonnes dynamiques */
}

/* Style des cases */
.skill {
  background-color: #606166;
  aspect-ratio: 1; /* Carré parfait (rapport largeur/hauteur de 1:1) */
  border-radius: 5px;
}

/* Responsiveness : Réduction du nombre de colonnes si l'écran est petit */
@media (max-width: 768px) {
  .langages {
    grid-template-columns: repeat(3, 1fr); /* Passer à 2 colonnes sur petits écrans */
  }

  .frameworks {
    grid-template-columns: repeat(3, 1fr); /* Passer à 2 colonnes sur petits écrans */
  }

  .outils {
    grid-template-columns: repeat(3, 1fr); /* Passer à 1 colonne sur petits écrans */
  }
}

img {
  width: 100%;
  height: auto;
}
</style>

<script setup lang="ts">
</script>