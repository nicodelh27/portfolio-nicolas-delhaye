<template>
  <div id="scroller"></div>
  <Menu />
  <div id="main">
    <router-view></router-view>
  </div>
  <Footer />
</template>

<script setup>
import Menu from './components/Menu.vue'
import Footer from './components/Footer.vue'
import {onMounted} from "vue";
import AOS from 'aos';

onMounted(() => {
  AOS.init({
    duration: 1500, // Durée des animations en ms (par défaut : 400)
    once: false, // Animation uniquement à la première fois qu'un élément apparaît (par défaut : false)
  });
})

// Gestion de la barre de progression de défilement
window.addEventListener('scroll', function() {
  // Récupère l'élément de la barre de progression
  const scroller = document.getElementById('scroller');

  // Calcule la hauteur totale du document
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;

  // Calcule le pourcentage du défilement par rapport à la hauteur totale du document
  const scrollPercentage = (window.scrollY / docHeight) * 100;

  // Met à jour la taille de l'arrière-plan de la barre de progression
  scroller.style.backgroundSize = `${scrollPercentage}% 5px`;
});
</script>

<style>

nav{
  width: 100%;
}

#main {
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

footer {
  width: 100%;
  text-align: center;
  margin-top: auto;
}

@keyframes scroll {
  from {
    background-size: 0% 5px;
  }
  to {
    background-size: 100% 5px;
  }
}

#scroller {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;  /* Hauteur de la barre */
  background: linear-gradient(to right, var(--light-blue-color) 100%, rgba(0, 0, 0, 0) 100%) no-repeat;
  background-size: 0 5px; /* Initialement à 0% */
  z-index: 9999;  /* Assurez-vous que la barre reste au-dessus du contenu */
  transition: background-size 0.1s ease-out;
}
</style>