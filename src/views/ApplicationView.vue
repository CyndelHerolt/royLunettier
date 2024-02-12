<script setup>
</script>

<template>
  <main>
    <section>
      <article>
        <h2>Application</h2>
        <p>
          <em>
            Une visualisation 3D interactive qui permet de découvrir les spécificités des produits de Roy Lunetier.
          </em>
        </p>
        <p>
          Concrètement, l'application permettra de visualiser différents modèles en fonction des matériaux de fabrication. Pour chacun de ces modèles, il sera possible d'obtenir des informations sur la conception et la fabrication mais aussi sur l'origine et les spécificités des matériaux utilisés en survolant les parties du modèle (branches, manchons, cercles, plaquettes ...). Ce survol déclenchera l'affichage d'une animation pour une vue éclatée de l'objet qui mettra en avant la partie ciblée par l'utilisateur et les informations qui lui sont relatives.
          <br>
          Dans un second temps si cela est envisageable nous aimerions également proposer un configurateur avec un back-office utilisable par l'entreprise pour potentiellement visualiser et éditer de nouveaux modèles. Il serait alors possible d'importer des modèles 3D puis d'en modifier les matériaux et les couleurs.
        </p>
      </article>
<!--      <figure>-->
<!--        <img src="/configurateur.png" alt="aperçu des premiers essais">-->
<!--        <figcaption>-->
<!--          Un premier prototype-->
<!--        </figcaption>-->
<!--      </figure>-->
    </section>
    <section>
      <article>
        <h3>Choix des technologies</h3>
        <p>
          Nous avons la chance de compter parmis les membres de notre équipe Shams, qui utilise Three.js dans le cadre de son alternance. Three.js c'est une librairie javascript qui permet de créer des scènes 3D dans un navigateur web. Cette bibliothèque semblait alors tout à fait adaptée à notre projet, nous avons donc évidemment décider de l'utiliser.
          <br>
          Pour autant, il ne s'agit pas seulement de se reposer sur les compétences de Shams car nous devons tous les trois apporter une contribution équivalente au projet. Sam et Cyndel sont spécialisés dans le framework Symfony ; des compétences qui s'avèreront utiles pour le développement du back-office et notre apprentissage du framework front VueJs sera également un atout pour la réalisation du site qui abritera le viewer3D (une indécision subsiste quand même entre VueJs et ReactJs).
          <br>
          Pour la création des modèles 3D de lunettes, c'est sans grande hésitation que nous avons décidé d'utiliser Blender, un outil que nous utilisons dans le cadre de nos études.
        </p>
        <h4>Technologies selectionnées</h4>
        <ul>
          <li><span>Front-end :</span> VueJs ou ReactJs (à déterminer)</li>
          <li><span>Back-end :</span> Symfony</li>
          <li><span>Viewer3D :</span> Three.js</li>
          <li><span>Modélisation 3D :</span> Blender</li>
        </ul>
      </article>
    </section>
  </main>


  <!--        <p>Afin d'épauler Shams dans </p>-->
  <!--        https://github.com/CyndelHerolt/Lego3DCanvas-->
</template>

<style scoped>
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

ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;

  li {
    margin: 15px;

    span {
      font-weight: bold;
    }
  }
}
</style>
