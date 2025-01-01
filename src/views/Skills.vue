<template>
  <h1>Compétences</h1>
  <div class="container">
    <!-- Section Langages -->
    <div class="row">
      <div class="col-12">
        <h2>Langages</h2>
        <div class="grid langages">
          <div class="skill">
            <div class="image-wrapper">
              <img src="@/assets/images/skills/java.png" alt="Java">
            </div>
            <p>Java</p>
          </div>
          <div class="skill">
            <div class="image-wrapper">
              <img src="@/assets/images/skills/javascript.png" alt="JavaScript">
            </div>
            <p>JavaScript</p>
          </div>
          <div class="skill">
            <div class="image-wrapper">
              <img src="@/assets/images/skills/php.png" alt="PHP">
            </div>
            <p>PHP</p>
          </div>
          <div class="skill">
            <div class="image-wrapper">
              <img src="@/assets/images/skills/python.png" alt="Python">
            </div>
            <p>Python</p>
          </div>
          <div class="skill">
            <div class="image-wrapper">
              <img src="@/assets/images/skills/html.png" alt="HTML">
            </div>
            <p>HTML</p>
          </div>
          <div class="skill">
            <div class="image-wrapper">
              <img src="@/assets/images/skills/css.png" alt="CSS">
            </div>
            <p>CSS</p>
          </div>
          <div class="skill">
            <div class="image-wrapper">
              <img src="@/assets/images/skills/postgresql.png" alt="PostgreSQL">
            </div>
            <p>PostgreSQL</p>
          </div>
          <div class="skill">
            <div class="image-wrapper">
              <img src="@/assets/images/skills/bash.png" alt="Bash">
            </div>
            <p>Bash</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Section Frameworks et Outils -->
    <div class="row">
      <div class="col-12 col-md-4">
        <h2>Frameworks</h2>
        <div class="grid frameworks">
          <div class="skill">
            <div class="image-wrapper">
              <img src="@/assets/images/skills/laravel.png" alt="Laravel">
            </div>
            <p>Laravel</p>
          </div>
          <div class="skill">
            <div class="image-wrapper">
              <img src="@/assets/images/skills/vue_js.png" alt="Vue.js">
            </div>
            <p>Vue.js</p>
          </div>
          <div class="skill">
            <div class="image-wrapper">
              <img src="@/assets/images/skills/flask.png" alt="Flask">
            </div>
            <p>Flask</p>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-6 offset-md-2">
        <h2>Outils</h2>
        <div class="grid outils">
          <div class="skill">
            <div class="image-wrapper">
              <img src="@/assets/images/skills/git.png" alt="Git">
            </div>
            <p>Git</p>
          </div>
          <div class="skill">
            <div class="image-wrapper">
              <img src="@/assets/images/skills/gitlab.png" alt="Gitlab">
            </div>
            <p>Gitlab</p>
          </div>
          <div class="skill">
            <div class="image-wrapper">
              <img src="@/assets/images/skills/idea.png" alt="JetBrains IntelliJ Idea">
            </div>
            <p>Idea</p>
          </div>
          <div class="skill">
            <div class="image-wrapper">
              <img src="@/assets/images/skills/phpstorm.png" alt="JetBrains PHPStorm">
            </div>
            <p>PHPStorm</p>
          </div>
          <div class="skill">
            <div class="image-wrapper">
              <img src="@/assets/images/skills/webstorm.png" alt="JetBrains WebStorm">
            </div>
            <p>WebStorm</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
  margin-top: 50px;
}

.container{
  max-width: 900px;
}

/* Grille pour chaque section */
.grid {
  display: grid;
  gap: 25px; /* Espace entre les blocs */
  width: 100%; /* Utiliser tout l'espace disponible */
  border: 5px solid var(--light-blue-color); /* Bordure */
  border-radius: 15px;
  padding: 20px;
}

/* Section Langages : 6 colonnes dynamiques */
.langages {
  grid-template-columns: repeat(6, 1fr); /* 6 colonnes qui se partagent l'espace disponible */
}

/* Section Frameworks : 3 colonnes dynamiques */
.frameworks {
  grid-template-columns: repeat(2, 1fr); /* 3 colonnes dynamiques */
}

/* Section Outils : 2 colonnes dynamiques */
.outils {
  grid-template-columns: repeat(3, 1fr); /* 2 colonnes dynamiques */
}

/* Style des cases */
.skill {
  display: flex;
  flex-direction: column; /* Positionne l'image et le texte verticalement */
  align-items: center; /* Centre horizontalement le contenu */
  text-align: center;
  min-width: 0;
}

/* Conteneur de l'image : maintient le carré */
.image-wrapper {
  aspect-ratio: 1; /* Maintient un carré parfait */
  width: 100%; /* Prend toute la largeur disponible */
  border-radius: 10px; /* Coins arrondis */
  overflow: hidden; /* Coupe les parties débordantes */

  margin-bottom: 10px;
}

/* Les images dans les cases */
.skill img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Remplit le carré en rognant si nécessaire */
}

.skill p {
  font-size: 20px;
  font-weight: 600;
  color: var(--dark-blue-color); /* Couleur du texte */
}

/* Responsiveness : Réduction du nombre de colonnes si l'écran est petit */
@media (max-width: 768px) {
  .container {
    max-width: 90%; /* Réduit la largeur de la zone principale */
    margin: 0 auto; /* Centre la zone */
  }
  .langages {
    grid-template-columns: repeat(3, 1fr); /* Passer à 2 colonnes sur petits écrans */
  }

  .frameworks {
    grid-template-columns: repeat(3, 1fr); /* Passer à 2 colonnes sur petits écrans */
  }

  .outils {
    grid-template-columns: repeat(3, 1fr); /* Passer à 1 colonne sur petits écrans */
  }

  h1 {
    font-size: 50px;
  }

  h2 {
    font-size: 30px;
  }

  .row {
    gap: 30px;
  }
}

@media (max-width: 576px) {
  h1 {
    font-size: 40px;
  }

  h2 {
    font-size: 25px;
  }

  .skill p {
    font-size: 15px;
  }
}

.row {
  margin: 30px 0;
}
</style>

<script setup lang="ts">
</script>