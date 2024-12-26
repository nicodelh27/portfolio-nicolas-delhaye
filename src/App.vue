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
</script>

<style>
#main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>