<template>
  <nav class="navbar navbar-expand-md navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img :src="logo" alt="Logo">
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link lien" to="/competences">Compétences</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link lien" to="/experiences">Expériences</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link lien" to="/projets">Projets</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link lien" to="/contact">Contact</router-link>
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
.navbar {
  background-color: var(--white-color);
}

.navbar-nav {
  gap: 25px; /* Espace entre les liens */
}

img {
  width: 100px;
  margin-left: 30px;
}

.nav-link {
  font-size: 24px;
  color: var(--black-color);
}
</style>