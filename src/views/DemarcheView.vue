<script setup>
import {RouterLink} from "vue-router";
</script>

<template>
  <main>
    <h2>Démarche</h2>
    <p>
      <em>
        Nous allons proposer à l'entreprise Roy Lunetier un outil qui permettra de mettre en exergue leurs valeurs
        fortes.
      </em>
    </p>
    <nav>
      <RouterLink to="/demarche/reflexions" active-class="active-link">
        Réflexions
      </RouterLink>
      <RouterLink to="/demarche/travail-preparatoire" active-class="active-link">
        Travail préparatoire
      </RouterLink>
      <RouterLink to="/demarche/maquettage" active-class="active-link">
        Maquettage
      </RouterLink>
      <RouterLink to="/demarche/developpement" active-class="active-link">
        Développement
      </RouterLink>
    </nav>
    <hr>
    <router-view/>

  </main>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: flex-start;
  margin: 20px 0;
}

a {
  padding: 0 15px;
}

.active-link {
  background-color: rgba(224, 212, 202, 0.25);
}
</style>
