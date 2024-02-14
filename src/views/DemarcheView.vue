<script setup>
</script>

<template>
  <main>
    <section>
      <div class="bloc">
        <article class="middle">
          <h2>Démarche</h2>
          <p>
            <em>
              Nous allons proposer à l'entreprise Roy Lunetier un outil qui permettra de mettre en exergue leurs valeurs
              fortes.
            </em>
          </p>
          <p>
            En prenant en compte le fait que l'entreprise ne propose pas de création sur-mesure mais se limite plutôt à
            la
            vente en BtoB majoritairement auprès d'opticiens indépendants, nous avons décidé de nous
            orienter vers la création d'une interface qui sublimera l'utilisation des "produits oubliés", un concept qui
            fait la fierté de Roy Lunetier. L'idée ici est de proposer une découverte des caractéristiques et des points
            forts des matériaux utilisés afin de valoriser les valeurs de la fabrication artisanale, durable et locale
            défendues par l'entreprise.
          </p>
        </article>
        <figure>
          <img src="/logo_roy_lunetier_black.svg" alt="logo de roy lunetier" style="width: 40%;">
          <figcaption>
            Matériaux utilisés dans la fabrication des lunettes Roy Lunetier.
          </figcaption>
        </figure>
      </div>
    </section>
    <section>
      <article>
        <p class="bold">
          Une visualisation 3D interactive qui permet de découvrir les spécificités des produits de Roy Lunetier.
        </p>
        <p>
          Concrètement, l'application permettra de visualiser différents modèles en fonction des matériaux de
          fabrication. Pour chacun de ces modèles, il sera possible d'obtenir des informations sur la conception et la
          fabrication mais aussi sur l'origine et les spécificités des matériaux utilisés en survolant les parties du
          modèle (branches, manchons, cercles, plaquettes ...). Ce survol déclenchera l'affichage d'une animation pour
          une vue éclatée de l'objet qui mettra en avant la partie ciblée par l'utilisateur et les informations qui lui
          sont relatives.
          <br>
          Dans un second temps si cela est envisageable nous aimerions également proposer un configurateur avec un
          back-office utilisable par l'entreprise pour potentiellement visualiser et éditer de nouveaux modèles. Il
          serait alors possible d'importer des modèles 3D puis d'en modifier les matériaux et les couleurs.
        </p>
      </article>
    </section>
    <section>
      <article>
        <h3>Choix des technologies</h3>
        <p>
          Nous avons la chance de compter parmis les membres de notre équipe Shams, qui utilise Three.js dans le cadre
          de son alternance. Three.js c'est une librairie javascript qui permet de créer des scènes 3D dans un
          navigateur web. Cette bibliothèque semblait alors tout à fait adaptée à notre projet, nous avons donc
          évidemment décider de l'utiliser.
          <br>
          Pour autant, il ne s'agit pas seulement de se reposer sur les compétences de Shams car nous devons tous les
          trois apporter une contribution équivalente au projet. Sam et Cyndel sont spécialisés dans le développement
          back et prendront le temps de découvrir et d'apprendre à maîtriser le développement d'un back-office via
          Node.js et Express.js dans un environnement plutôt orienté front-end. Notre introduction à React.js dans le cadre des cours de notre formation nous permettra également de réaliser le site qui abritera le viewer3D. Surtout que React.js permet une utilisation plus simple de Three.js. Grâce à R3F (React Three Fiber) le développement d'interface Three.js dans un environnement en React.js se voit étonnemment simplifié.

          Notre apprentissage du framework front
          ReactJs sera également un atout pour la réalisation du site qui abritera le viewer3D.
          <br>
          Pour la création des modèles 3D de lunettes, c'est sans grande hésitation que nous avons décidé d'utiliser
          Blender, un outil que nous utilisons dans le cadre de nos études.
        </p>
        <h4>Technologies selectionnées</h4>
        <ul class="list-row">
          <li>
            <img src="/vuejs.png" alt="logo vuejs">
            <img src="/reactjs.png" alt="logo reactjs">
            <br>
            <span class="bold">Front-end :</span> ReactJs
          </li>
          <li>
            <img src="/node.png" alt="logo nodeJs">
            <img src="/express.png" alt="logo expressJs">
            <br>
            <span class="bold">Back-end :</span> Node.js + Express.js
          </li>
          <li>
            <img src="/threejs.png" alt="logo threejs">
            <br>
            <span class="bold">Viewer3D :</span> Three.js
          </li>
          <li>
            <img src="/blender.png" alt="logo blender">
            <br>
            <span class="bold">Modélisation 3D :</span> Blender
          </li>
        </ul>
      </article>
    </section>
    <section>
      <h3>Lancement du projet</h3>
      <div class="bloc">
        <article>
          <p>
            La première étape a été de définir précisemment les fonctionnalités à développer. Dans un document Notion
            partagé, nous avons consigné celles qui nous paraissaient évidentes. Nous avons également pris le temps de
            réfléchir au contenu qui allait nous être nécessaire pour enrichir et habiller le viewer 3D.
          </p>
          <h4>Fonctionnalités</h4>
          <ul>
            <li>changer de modèle (un modèle par matériau)</li>
            <li>faire tourner l'objet sur lui-même dans toutes les directions + léger zoom/dé-zoom</li>
            <li>vue détaillée d’un élément (vue éclatée zoom & hover)</li>
            <li>back-office - CR<span class="barre">U</span>D modèles 3D</li>
          </ul>
          <h4>Contenus</h4>
          <ul>
            <li>quelques modèles 3D</li>
            <li>matériaux utilisés</li>
            <li>données sur les processus de fabrication</li>
            <li>données sur l'origine des matériaux</li>
            <li>images pour illustrer les descriptions</li>
          </ul>
        </article>
      </div>
      <div class="bloc">
        <article class="middle">
          <h3>Découverte et tests</h3>
          <p>
            Afin d'épauler Shams qui a déjà de bonnes bases en Three.js dans la réalisation du viewer3D, Sam et Cyndel ont commencé par se documenter sur Three.js et des ébauches de projets ont été réalisées pour comprendre les bases de la librairie. Nous avons également commencé à nous former sur la gestion d'un back-office avec Node.js et Express.js.
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
  </main>
</template>

<style scoped>
.bloc {
  display: flex;
  align-items: center;
}

.middle {
  width: 50%;
}

figure {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 90%;
    //background-color: #ffaeae;
  }

  figcaption {
    font-size: small;
    opacity: .8;
  }
}

.list-row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0;
  list-style: none;

  li {
    margin: 15px;
    text-align: center;

    img {
      width: 25px;
      margin: 0 5px;
    }
  }
}

.barre {
  text-decoration: line-through;
}

.bold {
  font-weight: bold;
  margin: 0;
}
</style>
