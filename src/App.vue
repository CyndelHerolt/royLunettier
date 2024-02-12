<script setup>
import {RouterLink, RouterView} from 'vue-router'
import HomeView from "@/views/HomeView.vue";
</script>

<template>
  <header>
    <img class="logo" src="/logo_roy_lunetier_black.svg" alt="">
  </header>
  <nav>
    <RouterLink to="/">
      Accueil
    </RouterLink>
    <RouterLink to="/demarche">
      Démarche
    </RouterLink>
    <RouterLink to="/application">
      Application
    </RouterLink>
  </nav>
  <RouterView/>
</template>

<style scoped>
</style>
