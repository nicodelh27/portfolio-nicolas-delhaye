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
</script>

<style>
#main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  height: 10px;
  z-index: 1000;
  background: linear-gradient(to right, rgb(29, 198, 213) 100%, rgba(255, 148, 166, 0) 100%) no-repeat;
  background-size: 0;
  transform-origin: left;
  animation: scroll linear;
  animation-timeline: scroll();
  animation-range-start: cover 100px;
  animation-range-end: cover 100%;
}
</style>