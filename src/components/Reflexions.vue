<script setup>

</script>

<template>
  <section>
    <article>
      <h3>Réflexions</h3>
      <!--      <div class="bloc-middle">-->
      <p>
        En prenant en compte le fait que l'entreprise ne propose pas de création sur-mesure mais se limite plutôt à
        la
        vente en BtoB majoritairement auprès d'opticiens indépendants, nous avons décidé de nous
        orienter vers la création d'une interface qui sublimera l'utilisation des "produits oubliés", un concept qui
        fait la fierté de Roy Lunetier. L'idée ici est de proposer une découverte des caractéristiques et des points
        forts des matériaux utilisés afin de valoriser les valeurs de la fabrication artisanale, durable et locale
        défendues par l'entreprise.
      </p>
      <figure>
        <img src="/layers.png" alt="logo de roy lunetier" style="width: 80%;">
        <figcaption>
          Matériaux utilisés dans la fabrication des lunettes Roy Lunetier.
        </figcaption>
      </figure>
      <!--      </div>-->
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
        Node.js et Express.js dans un environnement plutôt orienté front-end. Notre introduction à React.js dans le
        cadre des cours de notre formation nous permettra également de réaliser le site qui abritera le viewer3D.
        Surtout que React.js permet une utilisation plus simple de Three.js. Grâce à R3F (React Three Fiber) le
        développement d'interface Three.js dans un environnement en React.js se voit étonnemment simplifié.

        Notre apprentissage du framework front
        ReactJs sera également un atout pour la réalisation du site qui abritera le viewer3D.
        <br>
        Pour la création des modèles 3D de lunettes, c'est sans grande hésitation que nous avons décidé d'utiliser
        Blender, un outil que nous utilisons dans le cadre de nos études.
      </p>
      <h4>Technologies selectionnées</h4>
      <ul class="list-row">
        <li>
          <img src="/reactjs.png" alt="logo reactjs">
          <br>
          <span class="bold">Front-end</span> ReactJs
        </li>
        <li>
          <div style="display: flex">
            <img src="/node.png" alt="logo nodeJs">
            <img src="/express.png" alt="logo expressJs">
          </div>
          <br>
          <span class="bold">Back-end</span> Node.js + Express.js
        </li>
        <li>
          <img src="/threejs.png" alt="logo threejs">
          <br>
          <span class="bold">Viewer3D</span> Three.js
        </li>
        <li>
          <img src="/blender.png" alt="logo blender">
          <br>
          <span class="bold">Modélisation 3D</span> Blender
        </li>
      </ul>
    </article>
  </section>
</template>

<style scoped>
article {
  margin: 50px 0;
}

figure {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
}

figcaption {
  opacity: .7;
  font-size: small;
}

.bold {
  font-weight: bold;
}

.list-row {
  display: flex;
  justify-content: space-around;
  padding: 0;
  list-style: none;
  margin: 20px 0;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    width: 25px;
    margin: 0 10px;
  }
}
</style>