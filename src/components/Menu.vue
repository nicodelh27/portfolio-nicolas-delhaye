<template>
  <nav class="navbar navbar-expand-md navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img :src="logo" alt="Logo" width="150">
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/competences">Compétences</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/experiences">Expériences</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/projets">Projets</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">Contact</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>


<script setup>
import logo from '@/assets/images/logo.png'
</script>

<style scoped>

</style>