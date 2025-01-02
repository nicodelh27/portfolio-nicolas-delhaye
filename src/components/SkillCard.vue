<template>
  <div class="skill" :data-aos="animation">
    <div class="image-wrapper">
      <img :src="imageSrc" :alt="imageAlt">
    </div>
    <p>{{ label }}</p>
  </div>
</template>

<script setup>
defineProps({
  imageSrc: {
    type: Image,
    required: true
  },
  imageAlt: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  animation: {
    type: String,
    default: "flip-left"
  }
});
</script>


<style scoped>
/* Style des cases */
.skill {
  display: flex;
  flex-direction: column; /* Positionne l'image et le texte verticalement */
  align-items: center; /* Centre horizontalement le contenu */
  text-align: center;
  min-width: 0;
}

/* Conteneur de l'image : maintient le carré */
.image-wrapper {
  aspect-ratio: 1; /* Maintient un carré parfait */
  width: 100%; /* Prend toute la largeur disponible */
  border-radius: 10px; /* Coins arrondis */
  overflow: hidden; /* Coupe les parties débordantes */

  margin-bottom: 10px;
}

/* Les images dans les cases */
.skill img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Remplit le carré en rognant si nécessaire */
}

.skill p {
  font-size: 20px;
  font-weight: 600;
  color: var(--dark-blue-color); /* Couleur du texte */
}

@media (max-width: 576px) {
  .skill p {
    font-size: 15px;
  }
}
</style>