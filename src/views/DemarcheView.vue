<script setup>
</script>

<template>
  <main>
    <section>
      <article class="middle">
        <h2>Démarche</h2>
        <p>
          <em>
            Nous allons proposer à l'entreprise Roy Lunetier un outil qui permettra de mettre en exergue leurs valeurs
            fortes.
          </em>
        </p>
        <p>
          En prenant en compte le fait que l'entreprise ne propose pas de création sur-mesure mais se limite plutôt à la
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
    </section>
    <section>
      <article>
        <p class="bold">
            Une visualisation 3D interactive qui permet de découvrir les spécificités des produits de Roy Lunetier.
        </p>
        <p>
          Concrètement, l'application permettra de visualiser différents modèles en fonction des matériaux de fabrication. Pour chacun de ces modèles, il sera possible d'obtenir des informations sur la conception et la fabrication mais aussi sur l'origine et les spécificités des matériaux utilisés en survolant les parties du modèle (branches, manchons, cercles, plaquettes ...). Ce survol déclenchera l'affichage d'une animation pour une vue éclatée de l'objet qui mettra en avant la partie ciblée par l'utilisateur et les informations qui lui sont relatives.
          <br>
          Dans un second temps si cela est envisageable nous aimerions également proposer un configurateur avec un back-office utilisable par l'entreprise pour potentiellement visualiser et éditer de nouveaux modèles. Il serait alors possible d'importer des modèles 3D puis d'en modifier les matériaux et les couleurs.
        </p>
      </article>
    </section>
    <section>
      <article>
        <h3>Choix des technologies</h3>
        <p>
          Nous avons la chance de compter parmis les membres de notre équipe Shams, qui utilise Three.js dans le cadre de son alternance. Three.js c'est une librairie javascript qui permet de créer des scènes 3D dans un navigateur web. Cette bibliothèque semblait alors tout à fait adaptée à notre projet, nous avons donc évidemment décider de l'utiliser.
          <br>
          Pour autant, il ne s'agit pas seulement de se reposer sur les compétences de Shams car nous devons tous les trois apporter une contribution équivalente au projet. Sam et Cyndel sont spécialisés dans le développement back et prendront le temps de découvrir et d'apprendre à maîtriser le développement d'un back-office via Node.js et Express.js dans un environnement plutôt orienté front-end. Notre apprentissage du framework front VueJs sera également un atout pour la réalisation du site qui abritera le viewer3D. Une indécision subsiste quand même entre VueJs et ReactJs car d'un côté il semblerait que React soit plus adapté à l'intégration de composant Three mais de l'autre nous sommes beaucoup plus à l'aise en Vue qu'en React.
          <br>
          Pour la création des modèles 3D de lunettes, c'est sans grande hésitation que nous avons décidé d'utiliser Blender, un outil que nous utilisons dans le cadre de nos études.
        </p>
        <h4>Technologies selectionnées</h4>
        <ul>
          <li>
            <img src="/vuejs.png" alt="logo vuejs">
            <img src="/reactjs.png" alt="logo reactjs">
            <br>
            <span>Front-end :</span> VueJs ou ReactJs
          </li>
          <li>
            <img src="/node.png" alt="logo nodeJs">
            <img src="/express.png" alt="logo expressJs">
            <br>
            <span>Back-end :</span> Node.js + Express.js, MySql
          </li>
          <li>
            <img src="/threejs.png" alt="logo threejs">
            <br>
            <span>Viewer3D :</span> Three.js
          </li>
          <li>
            <img src="/blender.png" alt="logo blender">
            <br>
            <span>Modélisation 3D :</span> Blender
          </li>
        </ul>
      </article>
    </section>
    <section>
      <article class="middle">
        <h3>Lancement du projet</h3>
        <p>
          La première étape a été de définir précisemment les fonctionnalités à développer. Dans un document Notion partagé, nous avons consigné celles qui nous paraissaient évidentes. Nous avons également pris le temps de réfléchir au contenu qui allait nous être nécessaire pour enrichir et habiller le viewer 3D.
        </p>

      </article>
      <figure>
        <img src="/notion1.png" alt="aperçu du document de travail partagé">
        <figcaption>
          Aperçu du document de travail partagé.
        </figcaption>
      </figure>
    </section>
  </main>
  <!--        <p>Afin d'épauler Shams dans </p>-->
  <!--        https://github.com/CyndelHerolt/Lego3DCanvas-->
</template>

<style scoped>
section {
  display: flex;
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

ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
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

    span {
      font-weight: bold;
    }
  }
}

.bold {
  font-weight: bold;
  margin: 0;
}
</style>
