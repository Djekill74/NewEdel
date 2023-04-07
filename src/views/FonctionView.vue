<template>
  <div class="row d-flex align-items-center">
      <h1 class="p-5 titre doctor">Comment créer un site de qualité</h1>
  </div>

  <div v-if="largeurFenetre < 768">
      <div class="row justify-content-around pt-3" v-for="(fonction, index) in fonctions" :key="index">
          <div class="col-10 p-3">
              <h2>{{ fonction.fonctionTitre }}</h2>
          </div>
          <div class="col-10">
              <img v-bind:src="fonction.fonctionImage" v-bind:alt="fonction.fonctionAlt"
                  class="w-100 border border-3 rounded-3">
          </div>
          <div class="col-10 col-md-8 p-3">
              <p>{{ fonction.fonctionText }}</p>
          </div>
          <div class="row justify-content-center p-3">
              <div class="barre rounded-5"></div>
          </div>
      </div>
  </div>

  <div v-if="largeurFenetre >= 768">
      <div v-for="(fonction, index) in fonctions" :key="index">
          <div v-bind:class="indexClass(index)">
              <div class="col-5 shadow">
                  <div class="row p-3 justify-content-center">
                      <div class="col-10">
                          <h2 class="pb-3">{{ fonction.fonctionTitre }}</h2>
                      </div>
                      <div class="col-10">
                          <p>{{ fonction.fonctionText }}</p>
                      </div>
                  </div>
              </div>
              <div class="col-5 p-3">
                  <img v-bind:src="fonction.fonctionImage" v-bind:alt="fonction.fonctionAlt"
                      class="w-100 border border-3 rounded-3">
              </div>
              <div v-if="index < 6" class="row justify-content-center p-3">
                  <div class="barre rounded-5"></div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
      return {
          largeurFenetre: window.innerWidth,
          fonctions: [
              { fonctionTitre: "Relationelle", fonctionImage: "../img/discussion.4b4a7c7c.jpg", fonctionAlt: "discussion entre deux personnes autour d'un ordinateur", fonctionText: " La création d'un site web implique généralement une collaboration étroite entre le client et le créateur de site. Le processus commence souvent par une discussion initiale entre les deux parties pour comprendre les besoins et les objectifs du client, ainsi que pour déterminer le budget et les délais." },
              { fonctionTitre: "Ebauche du projet", fonctionImage: "/img/design.edebaf9a.jpg", fonctionAlt: "ebauche d'un plan sur papier", fonctionText: "Une fois que les exigences ont été définies, le créateur de site commence à travailler sur un design initial pour le site web. Le client peut alors passer en revue le design proposé et fournir des commentaires et des suggestions pour l'améliorer. HTML, CSS et JavaScript pour créer la structure, le contenu et les fonctionnalités du site." },
              { fonctionTitre: "Premier jet", fonctionImage: "/img/langague.0c0c184c.jpg", fonctionAlt: "ecran d'ordinateur avec du code", fonctionText: "Une fois que le design est finalisé, le créateur de site commencera à développer le site web, en utilisant des langages de programmation tels que HTML, CSS et JavaScript pour créer la structure, le contenu et les fonctionnalités du site." },
              { fonctionTitre: "Validation", fonctionImage: "/img/test.362bc871.jpg", fonctionAlt: "ebauche d'un plan sur papier", fonctionText: "Une fois que les exigences ont été définies, le créateur de site commence à travailler sur un design initial pour le site web. Le client peut alors passer en revue le design proposé et fournir des commentaires et des suggestions pour l'améliorer. HTML, CSS et JavaScript pour créer la structure, le contenu et les fonctionnalités du site." },
              { fonctionTitre: "Déploiement", fonctionImage: "/img/serveur.4c0454a2.jpg", fonctionAlt: "quelqu'un travail dans un serveur", fonctionText: " Une fois que le client a approuvé le site web final, le créateur de site procédera à son déploiement sur un serveur web, ce qui permettra au site d'être accessible en ligne." },
              { fonctionTitre: "Mises à jour", fonctionImage: "/img/maintenance.adccd15d.jpg", fonctionAlt: "bureau avec deux écrans d'ordinateur", fonctionText: "Après le lancement du site web, le créateur de site peut fournir des services de maintenance et de mise à jour, ainsi que des services de référencement pour aider le site à se classer plus haut dans les résultats de recherche." },
              { fonctionTitre: "Communication", fonctionImage: "/img/poignee.a02d1f42.jpg", fonctionAlt: "poignée de main", fonctionText: "Dans l'ensemble, la création d'un site web est un processus collaboratif entre le client et le créateur de site, impliquant la communication régulière, la collaboration étroite et une compréhension claire des exigences et des objectifs du client." },
          ],
      };
  },
  mounted() {
      window.addEventListener("resize", this.onResize);
  },
  beforeUnmount() {
      window.removeEventListener("resize", this.onResize);
  },
  methods: {
      onResize() {
          this.largeurFenetre = window.innerWidth;
      },
      indexClass(index) {
          if (index % 2 == 0) {
              return "row justify-content-around";
          } else {
              return "row justify-content-around flex-row-reverse";
          }
      }
  },
};
</script>