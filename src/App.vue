<template>
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
</style>