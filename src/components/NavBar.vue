<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-0 py-3">
    <div class="container-xl">
      <a class="navbar-brand" href="#">Vue Blog</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
          <li class="nav-item active">
            <router-link :to="{ name: 'home'}" class="nav-link" aria-current="page">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'featured' }" class="nav-link" aria-current="page">Featured</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'categories' }" class="nav-link" aria-current="page">Categories</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'authors' }" class="nav-link" aria-current="page">Authors</router-link>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <div v-if="authenticatedUser" class="d-flex align-items-lg-center mt-3 mt-lg-0">
            <button @click.prevent="authenticatedUser = !authenticatedUser" class="btn btn-sm btn-outline-primary w-full w-lg-auto m-2" type="submit">Sign In</button>
            <button @click.prevent="authenticatedUser = !authenticatedUser" class="btn btn-sm btn-primary w-full w-lg-auto m-2" type="submit">Register</button>
          </div>
          <div v-else class="d-flex align-items-lg-center mt-3 mt-lg-0">
            <button @click.prevent="authenticatedUser = !authenticatedUser" class="btn btn-sm btn-outline-primary w-full w-lg-auto m-2" type="submit">Log Out</button>
          </div>
        </form>
      </div>
    </div>
  </nav>
  <router-view/>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const authenticatedUser = ref(false)
</script>
