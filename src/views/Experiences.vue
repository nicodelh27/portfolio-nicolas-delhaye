<template>
  <h1>Expériences</h1>
  <div class="container">
    <div class="row">
      <!-- Colonne des expériences professionnelles -->
      <div class="col-12 col-lg-6 mb-4">
        <h2 class="text-center">Professionnelles</h2>
        <div class="row">
          <div class="col-12 mb-4" v-for="(experience, index) in professionalExperiences" :key="index">
            <ExperienceCard
                :id="index"
                :title="experience.title"
                :company="experience.company"
                :location="experience.location"
                :period="experience.period"
                :responsibilities="experience.responsibilities"
                :skills="experience.skills"
            />
          </div>
        </div>
      </div>

      <!-- Colonne des expériences scolaires -->
      <div class="col-12 col-lg-6 mb-4">
        <h2 class="text-center">Scolaires</h2>
        <div class="row">
          <div class="col-12 mb-4" v-for="(experience, index) in academicExperiences" :key="index">
            <ExperienceCard
                :id="index + professionalExperiences.length"
                :title="experience.title"
                :company="experience.school"
                :location="experience.location"
                :period="experience.period"
                :responsibilities="experience.responsibilities"
                :skills="experience.skills"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ExperienceCard from '@/components/ExperienceCard.vue';

// Liste des expériences professionnelles
const professionalExperiences = ref([
  {
    title: "Serveur lors d'événements",
    company: "Dupont Restauration",
    location: "Stade Bollaert, Lens",
    period: "Octobre 2023 - Présent",
    responsibilities: [
      "Service des clients lors des buffets VIP au stade Bollaert de Lens.",
      "Mise en place et débarrassage du matériel.",
      "Tenue de stand.",
      "Aide en cuisine."
    ],
    skills: ["Service client", "Travail d'équipe", "Communication"]
  },
  {
    title: "Vendeur",
    company: "Zara",
    location: "Noyelles-Godault",
    period: "Juillet 2024 - Août 2024",
    responsibilities: [
      "Accueil des clients et conseils personnalisés.",
      "Gestion des stocks et des réassorts.",
      "Respect du zoning et de la propreté du magasin."
    ],
    skills: ["Travail d'équipe", "Relation client", "Organisation"]
  },
  {
    title: "Manutentionnaire entrepôt",
    company: "FANDI emballages",
    location: "Carvin",
    period: "Février 2024",
    responsibilities: [
      "Chargement et déchargement de marchandises.",
      "Organisation des stocks en entrepôt."
    ],
    skills: ["Rigueur", "Travail rapide"]
  }
]);

// Liste des expériences scolaires
const academicExperiences = ref([
  {
    title: "BUT Informatique",
    school: "IUT de Lens",
    location: "Hauts-de-France",
    period: "Septembre 2023 - Juin 2026",
    responsibilities: [
      "Études approfondies en algorithmique, programmation et réseaux.",
      "Projets de développement web.",
      "Conception et gestion de bases de données."
    ],
    skills: ["POO", "Web", "SQL", "Réseaux/Systèmes", "Gestion de projet"]
  },
  {
    title: "Baccalauréat Scientifique",
    school: "Lycée Diderot",
    location: "Carvin",
    period: "Septembre 2020 - Juin 2023",
    responsibilities: [
      "Spécialités mathématiques et sciences physiques.",
      "Mention très bien, section européenne anglais."
    ],
    skills: ["Mathématiques", "Physiques", "Anglais"]
  }
]);
</script>


<style scoped>
/* Marges pour les colonnes */
.row {
  margin-top: 20px;
}

h1 {
  margin-top: 50px;
}

h2 {
  margin-bottom: 20px;
}

.card {
  max-width: 90%;
}

@media (max-width: 768px) {
  h1 {
    font-size: 50px;
  }

  h2 {
    font-size: 30px;
  }
}
</style>
