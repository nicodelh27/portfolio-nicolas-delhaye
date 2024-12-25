<template>
  <Menu />
  <router-view></router-view>
  <Footer />
</template>

<script setup>
import Menu from './components/Menu.vue'
import Footer from './components/footer.vue'
</script>