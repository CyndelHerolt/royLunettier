<script setup>

</script>

<template>
  <section>
    <article>
      <h3>
        Travail Préparatoire
      </h3>
      <p>
        La première étape a été de définir précisemment les fonctionnalités à développer. Dans un document Notion
        partagé, nous avons consigné celles qui nous paraissaient évidentes. Nous avons également pris le temps de
        réfléchir au contenu qui allait nous être nécessaire pour enrichir et habiller le viewer 3D.
      </p>
      <div class="list-group">
        <div>
          <h4>Fonctionnalités</h4>
          <h5>Front</h5>
          <ul>
            <li>changer de modèle 3D en fonction du matériau sélectionné</li>
            <li>afficher des informations propres au matériau sélectionné</li>
            <li>faire tourner l'objet sur lui-même dans toutes les directions + léger zoom/dé-zoom</li>
            <li>déclencher une animation type vue éclatée au clique sur un point d'intérêt</li>
            <li>afficher des informations propres au point d'intérêt cliqué dans une bulle</li>
          </ul>
          <h5>Back</h5>
          <ul>
            <li>proposer un CRUD pour les modèles 3D</li>
            <li>proposer un CRUD pour les données dans les bulles d'informations</li>
            <li>proposer un CRUD pour les données dans l'interface principale</li>
          </ul>
        </div>
        <div>
          <h4>Contenus</h4>
          <ul>
            <li>un modèle 3D pour chaque matériau (3)</li>
            <li>données sur les processus de fabrication, l'origine des matériaux etc</li>
            <li>images d'illustration</li>
          </ul>
        </div>
      </div>
    </article>

    <div class="bloc-middle">
      <article>
        <h3>Découverte et tests</h3>
        <p>
          Afin d'épauler Shams qui a déjà de bonnes bases en Three.js dans la réalisation du viewer3D, Sam et Cyndel
          ont commencé par se documenter sur Three.js et des ébauches de projets ont été réalisées pour comprendre les
          bases de la librairie. Nous avons également commencé à nous former sur la gestion d'un back-office avec
          Node.js et Express.js.
        </p>
        <a href="https://github.com/SamChrp/three-js-test" target="_blank">
          <button>Sam - Projet en Three.js</button>
        </a>
        <a href="https://github.com/SamChrp/express-js-tests" target="_blank">
          <button>Sam - Projet test Express.js</button>
        </a>
        <a href="https://github.com/CyndelHerolt/Lego3DCanvas" target="_blank">
          <button>Cyndel - Projet en Three.js</button>
        </a>
        <a href="https://github.com/CyndelHerolt/ObscureWave" target="_blank">
          <button>Cyndel - Projet test Express.js</button>
        </a>
        <a href="https://github.com/Taiyousan/roy-lunetier-3d-viewer-r3f" target="_blank">
          <button>Shams - Projet test Three.js</button>
        </a>
        <a href="https://github.com/Taiyousan/casse-briques" target="_blank">
          <button>Shams - Projet test Three.js</button>
        </a>
        <a href="https://github.com/Taiyousan/shooter" target="_blank">
          <button>Shams - Projet test Three.js</button>
        </a>
        <a href="https://github.com/Taiyousan/haunted-house" target="_blank">
          <button>Shams - Projet test Three.js</button>
        </a>
        <a href="https://github.com/Taiyousan/switch-viewer" target="_blank">
          <button>Shams - Projet test Three.js</button>
        </a>
        <br>
      </article>
      <figure>
        <iframe src="/test1.mp4" width="530" height="300"></iframe>
        <figcaption>
          Premiers tests de rendu 3D avec Three.js
        </figcaption>
      </figure>
    </div>
  </section>
</template>

<style scoped>
.bloc-middle {
  display: flex;
  justify-content: space-between;
  align-items: center;

  article {
    padding-right: 50px;
  }

  figure {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

article {
  margin: 50px 0;
}

figcaption {
  opacity: .7;
  font-size: small;
}

.bold {
  font-weight: bold;
}

.list-group {
  margin: 25px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

</style>