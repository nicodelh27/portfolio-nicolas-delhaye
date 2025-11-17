<template>
  <div class="card" style="width: 18rem;">
    <img :src="img" class="card-img-top" :alt="title">
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['title', 'description', 'img'])
</script>

<style scoped>
.card {
  transform: rotate(0deg) scale(1);
  transition: transform 0.2s linear;
}

.card:hover {
  transform: rotate(0deg) scale(1.1);
}

.card-title {
  color: var(--black-color);
}

.card-text {
  color: var(--black-color);
}
</style>