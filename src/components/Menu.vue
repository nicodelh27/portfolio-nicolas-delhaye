<template>
  <nav class="navbar navbar-expand-md navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img :src="logo" alt="Logo">
      </router-link>
      <button @click="toggleMenu" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
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
import {inject} from "vue";

const toggleMenu = inject('toggleMenu')
</script>

<style scoped>
.navbar {
  background-color: var(--white-color);
}

.navbar-nav {
  gap: 25px; /* Espace entre les liens */
}

.navbar .nav-link.router-link-active {
  color: var(--dark-blue-color);
  font-weight: 700;
  border-bottom: var(--dark-blue-color) 2px solid;
}

.nav-link {
  font-size: 22px;
  color: var(--black-color);
}

.nav-link:hover {
  color: var(--dark-blue-color);
}

@media (max-width: 992px) {
  .navbar-nav {
    gap: 0;
  }
  .navbar .nav-link.router-link-active{
    border: 0;
  }
  .nav-link {
    font-size: 18px;
  }
}

img {
  width: 80px;
  margin-left: 30px;
}

</style>