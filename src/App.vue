<script setup>
import {RouterLink, RouterView} from 'vue-router'
import HomeView from "@/views/HomeView.vue";
</script>

<template>
  <header>
    <img class="logo" src="/logo_roy_lunetier_black.svg" alt="">
    <nav>
      <RouterLink to="/">
        Accueil
      </RouterLink>
      <RouterLink to="/royLunetier">
        Roy Lunetier
      </RouterLink>
      <RouterLink to="/demarche">
        Démarche
      </RouterLink>
      <RouterLink to="/application">
        Application
      </RouterLink>
    </nav>
  </header>
  <RouterView/>

  <footer>
    <small>©️ Cyndel Herolt - 2024</small>
  </footer>
</template>

<style scoped>
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: var(--color-background);
  width: 100%;
  padding: 5px 10px;
}
</style>
