<script setup>

</script>

<template>
  <section>
    <div class="bloc-middle">
      <article>
        <h3>Développement</h3>
        <p>
          En parallèle du maquettage, nous avons commencé à développer l'interface en se concentrant sur la partie
          interactive. L'importation des modèles a rapidement laissé place aux controles de la caméra et à la gestion
          des événements. Il est donc possible de faire tourner l'objet sur lui-même dans toutes les directions et de
          zoomer/dé-zoomer. Nous avons également commencé à travailler sur la vue détaillée d’un élément (vue éclatée
          zoom & hover). Des animations activées au clic sur un élément de l'objet permettent de mettre en avant la
          partie ciblée par l'utilisateur et les informations qui lui sont relatives.
        </p>
      </article>
      <figure style="margin-top: 50px">
        <iframe src="/capture_model.mp4" width="530" height="300"></iframe>
        <figcaption>
          Gestion de la caméra et animations sur le modèle 3D
        </figcaption>
      </figure>
    </div>

    <figure style="width: 100%">
              <pre v-highlightjs><code class="javascript">
                const handleDoubleClick = (e) => {
                  if (!hasSplit) {
                    moveCamera({
                      position: {
                        x: 5,
                        y: 1,
                        z: 5,
                      },
                      target: {
                        x: 0,
                        y: 0,
                        z: 0,
                      },
                      state: true,
                    });

                  Object.values(actions).forEach(action => {
                    action.play();
                    action.loop = THREE.LoopOnce;
                    action.clampWhenFinished = true;
                    action.reset();
                    action.timeScale = 1;
                    setHasSplit(true);
                  });
                  } else {
                    moveCamera({
                      position: {
                        x: 0,
                        y: 0,
                        z: 5,
                      },
                      target: {
                        x: 0,
                        y: 0,
                        z: 0,
                      },
                      state: true,
                    });
                  Object.values(actions).forEach(action => {
                    action.play();
                    action.paused = false;
                    action.timeScale = -1;
                    action.setLoop(THREE.LoopOnce);
                    action.play();
                    setHasSplit(false);
                  });
                }}
                </code></pre>
      <figcaption>
        Code de gestion de l'animation vue écaltée
      </figcaption>
    </figure>
  </section>
</template>

<style scoped>
.bloc-middle {
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 50px;

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
  text-align: center;
}
</style>