<template>
  <h1>Certifications</h1>
  <hr class="custom-line">

  <div class="container">
    <p class="intro">
      Retrouvez ici mes principales certifications obtenues au cours de mon parcours académique et professionnel.
      Ces certifications peuvent être en lien avec l'informatique mais également dans d'autres domaines plus généralistes.
    </p>

    <div class="row mb-5">
      <div
        v-for="(cert, index) in certifications"
        :key="index"
        class="col-12 col-sm-6 col-lg-4 mb-4" data-aos="fade-up"
      >
        <div class="card cert-card h-100">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title d-flex align-items-center">
              <img :src="cert.icon" :alt="cert.title" class="cert-icon me-2" />
              <span>{{ cert.title }}</span>
            </h5>
            <p class="mb-1"><strong>Émetteur :</strong> {{ cert.issuer }}</p>
            <p class="mb-2"><strong>Date :</strong> {{ cert.date }}</p>
            <p class="card-text flex-grow-1">{{ cert.description }}</p>
            <div class="mt-3">
              <a v-if="cert.link && cert.link !== '#'" :href="cert.link" target="_blank" rel="noopener" class="btn btn-outline-primary">Voir la certification</a>
              <button v-else class="btn btn-outline-secondary" disabled>Aucun lien</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import cambridgeIcon from '@/assets/images/certifications/cambridge.png'
import pixIcon from '@/assets/images/certifications/pix.png'
import voltaireIcon from '@/assets/images/certifications/voltaire.png'

const certifications = ref([
  {
    title: "Certification Voltaire",
    issuer: "Éducation Nationale",
    date: "mars 2024",
    description: "Résultat obtenu : 762.\nCode de vérification : 6V9F3YX.\nOrthographe niveau affaires.",
    link: "https://mon.certificat-voltaire.fr/verification-certificat?code=6V9F3YX",
    icon: voltaireIcon
  },
  {
    title: "Certication Cambridge",
    issuer: "Cambridge English",
    date: "mars 2023",
    description: "Validation du niveau B2 en anglais.",
    link: "#",
    icon: cambridgeIcon
  },
  {
    title: "Certication Pix",
    issuer: "Éducation Nationale",
    date: "janvier 2023",
    description: "Résultat obtenu : 590/768.\nCode de vérification : P-3KRJGHYF.",
    link: "https://app.pix.fr/verification-certificat",
    icon: pixIcon
  }
])
</script>

<style scoped>
.container {
  max-width: 1200px;
}

.intro {
  text-align: center;
  margin-bottom: 25px;
}

.cert-card {
  border: 2px solid var(--light-blue-color);
  border-radius: 12px;
  padding: 10px;
}

.card-title {
  font-weight: 700;
}

.cert-icon {
  height: 36px;
  object-fit: cover;
}

@media (max-width: 768px) {
  .container {
    max-width: 90%;
    padding: 0 10px;
  }
  .cert-icon { width: 28px; height: 28px; }
}
</style>