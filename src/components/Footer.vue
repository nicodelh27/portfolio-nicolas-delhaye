<template>
  <footer class="bg-dark text-white py-4">
    <div class="container">
      <div class="row">
        <!-- Colonne 1 - Liens de navigation -->
        <div class="col-12 col-sm-6 col-md-4">
          <h5>Navigation</h5>
          <ul class="list-unstyled">
            <li><router-link class="text-white" to="/">Accueil</router-link></li>
            <li><router-link class="text-white" to="/competences">Compétences</router-link></li>
            <li><router-link class="text-white" to="/experiences">Expériences</router-link></li>
            <li><router-link class="text-white" to="/projets">Projets</router-link></li>
            <li><router-link class="text-white" to="/contact">Contact</router-link></li>
          </ul>
        </div>

        <!-- Colonne 2 - À propos -->
        <div class="col-12 col-sm-6 col-md-4">
          <h5>À propos</h5>
          <p>Je suis un développeur passionné par les technologies web. Découvrez mes compétences et projets ici !</p>
        </div>

        <!-- Colonne 3 - Contact -->
        <div class="col-12 col-sm-12 col-md-4">
          <h5>Contact</h5>
          <ul class="list-unstyled">
            <li><a class="text-white" href="mailto:contact@monsite.com">nicolas.delhaye62220@gmail.com</a></li>
            <li><a class="text-white" href="tel:+123456789">06 51 32 47 83</a></li>
          </ul>
        </div>
      </div>

      <!-- Copyright -->
      <div class="text-center mt-4">
        <p>&copy; 2024 Nicolas Delhaye. Tous droits réservés.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>

</style>