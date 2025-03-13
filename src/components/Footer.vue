<template>
  <footer class="text-white py-4">
    <div class="container">
      <div class="row">
        <!-- Colonne 1 - Liens de navigation -->
        <div class="col-12 col-sm-4 navigation">
          <h3>Navigation</h3>
          <ul class="list-unstyled">
            <li><router-link class="text-white" to="/">Accueil</router-link></li>
            <li><router-link class="text-white" to="/competences">Compétences</router-link></li>
            <li><router-link class="text-white" to="/experiences">Expériences</router-link></li>
            <li><router-link class="text-white" to="/projets">Projets</router-link></li>
            <li><router-link class="text-white" to="/contact">Contact</router-link></li>
          </ul>
        </div>

        <!-- Colonne 2 - À propos -->
        <div class="col-12 col-sm-4 about">
          <h3>À propos</h3>
          <p class="text-white">
            Bienvenue sur mon portfolio ! N'hésitez pas à aller découvrir les différentes sections du site
            pour en apprendre plus sur moi.
          </p>
        </div>

        <!-- Colonne 3 - Contact -->
        <div class="col-12 col-sm-4">
          <h3>Contact</h3>
          <ul class="list-unstyled">
            <li><a class="text-white email" href="mailto:nicolas.delhaye62220@gmail.com">nicolas.delhaye62220@gmail.com</a></li>
            <li><a class="text-white" href="tel:+33651324783">06 51 32 47 83</a></li>
          </ul>
        </div>
      </div>

      <!-- Copyright -->
      <div class="text-center mt-4">
        <p class="text-white" id="copyright">&copy; 2025 Nicolas Delhaye. Tous droits réservés.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background-color: var(--darker-blue-color);
}

.text-white {
  color: var(--white-color);
}

h3 {
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 25px;
}

.text-white {
  font-size: 18px;
}

@media (max-width: 768px) {
  h3 {
    margin-bottom: 10px;
    font-size: 13px;
  }

  .text-white {
    font-size: 13px; /* Réduction de la taille du texte */
  }
}

@media (max-width: 576px) {
  .row {
    text-align: center; /* Centre tous les textes */
    gap: 20px;
  }

  .navigation ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px; /* Ajoute de l'espace entre les éléments */
    padding: 0;
    margin-bottom: 0;
  }

  .navigation ul li {
    list-style: none; /* Supprime les puces */
  }
}

.about p {
  max-width: 80%;
  margin: auto;
}

.email {
  word-break: break-word;
}

#copyright {
  font-weight: 600;
}
</style>