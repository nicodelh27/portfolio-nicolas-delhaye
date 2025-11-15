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

import java from "@/assets/images/skills/java.png";
import javascript from "@/assets/images/skills/javascript.png";
import php from "@/assets/images/skills/php.png";
import python from "@/assets/images/skills/python.png";
import html from "@/assets/images/skills/html.png";
import css from "@/assets/images/skills/css.png";
import postgresql from "@/assets/images/skills/postgresql.png";
import bash from "@/assets/images/skills/bash.png";

import symfony from "@/assets/images/skills/symfony.png";
import langchain from "@/assets/images/skills/langchain.png";
import laravel from "@/assets/images/skills/laravel.png";
import vue_js from "@/assets/images/skills/vue_js.png";

import docker from "@/assets/images/skills/docker.png";
import git from "@/assets/images/skills/git.png";
import gitlab from "@/assets/images/skills/gitlab.png";
import idea from "@/assets/images/skills/idea.png";
import phpstorm from "@/assets/images/skills/phpstorm.png";
import webstorm from "@/assets/images/skills/webstorm.png";

const langages = [
  { imageSrc: php, imageAlt: "PHP", label: "PHP" },
  { imageSrc: python, imageAlt: "Python", label: "Python" },
  { imageSrc: java, imageAlt: "Java", label: "Java" },
  { imageSrc: javascript, imageAlt: "JavaScript", label: "JavaScript" },
  { imageSrc: postgresql, imageAlt: "PostgreSQL", label: "PostgreSQL" },
  { imageSrc: html, imageAlt: "HTML", label: "HTML" },
  { imageSrc: css, imageAlt: "CSS", label: "CSS" },
  { imageSrc: bash, imageAlt: "Bash", label: "Bash" },
];

const frameworks = [
  { imageSrc: symfony, imageAlt: "Symfony", label: "Symfony" },
  { imageSrc: langchain, imageAlt: "LangChain", label: "LangChain" },
  { imageSrc: laravel, imageAlt: "Laravel", label: "Laravel" },
  { imageSrc: vue_js, imageAlt: "Vue.js", label: "Vue.js" },
];

const outils = [
  { imageSrc: docker, imageAlt: "Docker", label: "Docker" },
  { imageSrc: git, imageAlt: "Git", label: "Git" },
  { imageSrc: gitlab, imageAlt: "Gitlab", label: "Gitlab" },
  { imageSrc: idea, imageAlt: "JetBrains IntelliJ Idea", label: "Idea" },
  { imageSrc: phpstorm, imageAlt: "JetBrains PHPStorm", label: "PHPStorm" },
  { imageSrc: webstorm, imageAlt: "JetBrains WebStorm", label: "WebStorm" },
];
</script>

<style scoped>
h1 {
  text-align: center;
  margin-top: 50px;
}


h2 {
  padding-left: 15px;
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
    grid-template-columns: repeat(3, 1fr); /* Passer à 3 colonnes sur petits écrans */
  }

  .frameworks {
    grid-template-columns: repeat(3, 1fr); /* Passer à 3 colonnes sur petits écrans */
  }

  .outils {
    grid-template-columns: repeat(3, 1fr); /* Passer à 3 colonne sur petits écrans */
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
}

.row {
  margin: 30px 0;
}
</style>