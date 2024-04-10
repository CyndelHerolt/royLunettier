<script setup>
</script>

<template>
  <main>
    <section>
      <article>
        <h2>Roy Lunetier</h2>
        <p class="bold">
            Redéfinir le style, réinventer l'engagement environnemental.
        </p>

        <div style="display: flex">
          <p style="width: 66%; margin-top: 4rem">
            Dans le monde dynamique de la lunetterie, émergent des acteurs visionnaires, prêts à redéfinir les normes du secteur.  Parmi eux se distingue <span class="bold">Roy Lunétier</span>, une entreprise fondée en mai 2023 dont le concepteur est Benjamin Barbeau. Il a mis en place une initiative novatrice qui allie élégance, innovation et conscience environnementale.
          </p>
          <figure style="display: flex; justify-content: end">
            <img src="/logo-roy-lunetier.png" alt="Roy Lunetier" style="max-width: 15rem">
          </figure>
        </div>

        <div style="margin-top: 5rem; display: flex; justify-content: center">
          <div style="background-color: #282828; color: white; width: 80%; padding: 3rem">
            <p>
              Avec près de 60 opticiens clients et une tendance croissante à la fidélisation, Roy Lunétier émerge comme un choix privilégié pour ceux qui recherchent à la fois qualité et durabilité. Depuis leur entrée sur le marché en septembre 2023, leur présence a été marquée par une approche innovante, incarnée par le lancement réussi d'une première collection, suivie d'une nouvelle série en mars 2024.
            </p>
          </div>
        </div>

        <div style="margin-top: 5rem; display: flex">
          <div style="width: 40%;">
            <div class="container-icons">

              <div class="container-icon" style="background-color: #282828">
                <font-awesome-icon icon="cubes" size="3x" style="color: white;"/>
              </div>

              <div class="container-icon">
                <font-awesome-icon icon="recycle" size="3x"/>
              </div>

              <div class="container-icon">
                <font-awesome-icon icon="industry" size="3x"/>
              </div>

            </div>
          </div>

          <p style="width: 60%">
            L'une des pierres angulaires de l'identité de Roy Lunétier réside dans son engagement envers l'environnement. En optant pour l'utilisation de matériaux dits "oubliés", l'entreprise affiche un souci profond pour la durabilité et la préservation des ressources. Cette démarche dépasse le simple choix des matériaux ; elle incarne un véritable engagement en faveur de l'écosystème, une valeur fondamentale qui imprègne chaque aspect de leur travail.
          </p>
        </div>

      </article>
    </section>
  </main>

</template>

<style scoped>
.container-icons {
  display: flex;
  flex-wrap: wrap;
}

.container-icon {
  background-color: #f4efeb;
  padding: 4rem;
}

section {
  display: flex;
}

article {
  //width: 50%;
}

figure {
  width: 50%;
  padding: 0 50px;

  img {
    width: 100%;
  }
}

.bold {
  font-weight: bold;
}
</style>
