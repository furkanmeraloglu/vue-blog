<template>
  <div class="d-flex justify-content-center m-5">
    <div v-for="author in authors" :key ="author.id" class="card m-3" style="width: 18rem">
      <img src="..." class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ author.name + ' ' + author.surname }}</h5>
        <p class="card-text">
          {{ author.name }} is {{ author.age }} years old. You can contact him at
        </p>
        <router-link :to="{ name: 'author', params: {slug: author.name + '_' + author.surname + '_' + author.id} }" class="btn btn-primary">View Author Profile</router-link>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const authors = ref([
  {
    id: 1,
    name: 'John',
    surname: 'Doe',
    age: 25,
    email: 'johndoe@example.net',
  },
  {
    id: 2,
    name: 'Jane',
    surname: 'Doe',
    age: 22,
    email: 'janedoe@example.net',
  },
  {
    id: 3,
    name: 'John',
    surname: 'Smith',
    age: 30,
    email: 'johnsmith@example.net',
  },
])
</script>
