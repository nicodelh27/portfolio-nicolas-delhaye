<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{{ company }} - {{ location }}</h6>
      <p class="card-text"><strong>Période :</strong> {{ period }}</p>
      <p class="skill" v-for="skill in skills" :key="skill">{{ skill }}</p>
      <br>
      <button class="btn btn-primary" type="button" data-bs-toggle="collapse" :data-bs-target="'#details' + id" aria-expanded="false" :aria-controls="'details' + id">
        Voir plus
      </button>
      <div class="collapse mt-3" :id="'details' + id">
        <p class="card-text">
          <strong>Description :</strong>
        </p>
        <ul>
          <li v-for="task in responsibilities" :key="task">{{ task }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  period: {
    type: String,
    required: true,
  },
  responsibilities: {
    type: Array,
    required: true,
  },
  skills: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
.card {
  margin: auto;
  max-width: 600px;
  border: 3px solid var(--light-blue-color);
  border-radius: 15px;
}

.card-title {
  font-size: 24px;
  font-weight: bold;
}

@media (max-width: 576px) {
  .card-title {
    font-size: 19px;
  }
}

.card-subtitle {
  font-size: 18px;
  color: gray;
}

.card-text ul {
  list-style-type: disc;
  margin-left: 20px;
}

button {
  margin-top: 10px;
}

.skill {
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 7px 10px;
  border-radius: 5px;
  background-color: var(--light-blue-color);
  color: white;
}
</style>
