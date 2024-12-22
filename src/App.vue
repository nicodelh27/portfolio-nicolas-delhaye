<template>
  <h1>Bienvenue sur la première version du site de {{ name }}</h1>
  <button v-on:click="addName">Ajouter</button>
  <button v-on:click="delName">Retirer</button>
  <ul>
    <li v-for="item in list" v-bind:key="item">{{ item }}</li>
  </ul>
</template>

<script setup>
import { ref } from 'vue'

let name = ref('Nicolas Delhaye')
let list = ref([
    "Nicolas Delhaye"
])

const addName = () => {
    list.value.push('Nicolas Delhaye')
}

const delName = () => {
    list.value.pop()
}
</script>