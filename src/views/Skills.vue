<template>
  <h1>Compétences</h1>
  <div class="container">
    <div class="row">

      <!-- Section Langages -->
      <div class="col-12">
        <h2>Langages</h2>
        <div class="grid langages">
          <SkillCard
              v-for="(skill, index) in langages"
              :key="index"
              :imageSrc="skill.imageSrc"
              :imageAlt="skill.imageAlt"
              :label="skill.label"
          />
        </div>
      </div>
    </div>

    <div class="row">
      <!-- Section Frameworks -->
      <div class="col-12 col-md-4">
        <h2>Frameworks</h2>
        <div class="grid frameworks">
          <SkillCard
              v-for="(skill, index) in frameworks"
              :key="index"
              :imageSrc="skill.imageSrc"
              :imageAlt="skill.imageAlt"
              :label="skill.label"
          />
        </div>
      </div>

      <!-- Section Outils -->
      <div class="col-12 col-md-6 offset-md-2">
        <h2>Outils</h2>
        <div class="grid outils">
          <SkillCard
              v-for="(skill, index) in outils"
              :key="index"
              :imageSrc="skill.imageSrc"
              :imageAlt="skill.imageAlt"
              :label="skill.label"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SkillCard from "@/components/SkillCard.vue";

const langages = [
  { imageSrc: "/src/assets/images/skills/java.png", imageAlt: "Java", label: "Java" },
  { imageSrc: "/src/assets/images/skills/javascript.png", imageAlt: "JavaScript", label: "JavaScript" },
  { imageSrc: "/src/assets/images/skills/php.png", imageAlt: "PHP", label: "PHP" },
  { imageSrc: "/src/assets/images/skills/python.png", imageAlt: "Python", label: "Python" },
  { imageSrc: "/src/assets/images/skills/html.png", imageAlt: "HTML", label: "HTML" },
  { imageSrc: "/src/assets/images/skills/css.png", imageAlt: "CSS", label: "CSS" },
  { imageSrc: "/src/assets/images/skills/postgresql.png", imageAlt: "PostgreSQL", label: "PostgreSQL" },
  { imageSrc: "/src/assets/images/skills/bash.png", imageAlt: "Bash", label: "Bash" },
];

const frameworks = [
  { imageSrc: "/src/assets/images/skills/laravel.png", imageAlt: "Laravel", label: "Laravel" },
  { imageSrc: "/src/assets/images/skills/vue_js.png", imageAlt: "Vue.js", label: "Vue.js" },
  { imageSrc: "/src/assets/images/skills/flask.png", imageAlt: "Flask", label: "Flask" },
];

const outils = [
  { imageSrc: "/src/assets/images/skills/git.png", imageAlt: "Git", label: "Git" },
  { imageSrc: "/src/assets/images/skills/gitlab.png", imageAlt: "Gitlab", label: "Gitlab" },
  { imageSrc: "/src/assets/images/skills/idea.png", imageAlt: "JetBrains IntelliJ Idea", label: "Idea" },
  { imageSrc: "/src/assets/images/skills/phpstorm.png", imageAlt: "JetBrains PHPStorm", label: "PHPStorm" },
  { imageSrc: "/src/assets/images/skills/webstorm.png", imageAlt: "JetBrains WebStorm", label: "WebStorm" },
];
</script>

<style scoped>
h1 {
  text-align: center;
  margin-top: 50px;
}


h2 {
  padding-left: 10px;
  border-left: 2px solid var(--light-blue-color);
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