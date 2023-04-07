<template>
  <div class="modele">

    <!----vue si pas de validation----->

    <div class="container-fluid" v-if="this.$store.state.modelStart === false">

      <div class="row d-flex align-items-center">
        <h1 class="p-5 titre doctor">Modele</h1>
      </div>
      <div class="row d-flex align-items-center justify-content-center">
        <div class="col-10 col-md-8 shadow mb-5">
          <p>Lorsque l'on souhaite créer un site web pour son entreprise, il peut être difficile de
            savoir par où commencer et comment faire pour que le site soit à la fois efficace et
            esthétique. C'est là qu'intervient l'utilisation de plusieurs templates, qui peuvent
            donner une idée concrète de ce à quoi pourrait ressembler le futur site.</p>
          <p>Le fait de travailler ensemble permet de cerner les besoins de l'entreprise et
            de trouver le template le plus adapté à ses attentes. Cette démarche permet également
            de gagner du temps en évitant de partir de zéro.</p>
          <p>Grâce à cette méthode, il est possible de trouver des idées originales pour la
            réalisation de son projet. Le choix du template doit se faire en fonction de
            l'activité de l'entreprise et de ses objectifs, pour créer un site qui soit à la
            fois attractif et efficace.</p>
          <p>En renseignant le nom de son entreprise et son activité, on peut ainsi
            définir les critères de sélection des templates et partir sur de bonnes bases
            pour la réalisation de son site web.</p>
          <p>En somme, l'utilisation de plusieurs templates pour visualiser à quoi pourrait
            ressembler le futur site de son entreprise est une méthode efficace pour
            gagner du temps et trouver des idées originales. Toutefois pas d'inquiétude,
            si rien ne vous attire, on trouvera d'autres idées ailleurs ensemble.
            <br>Pour ce faire veuillez renseigner le nom de votre entreprise et son activité.
          </p>
        </div>
      </div>
      <div class="row d-flex justify-content-center p-1">
        <div class="col-4 col-md-2 text-end">
          <label for="newName">Nom :</label>
        </div>
        <div class="col-5 text-start">
          <input v-model="newName" class="bgcolor3">
        </div>
      </div>
      <div class="row d-flex justify-content-center p-1 mb-3">
        <div class="col-4 col-md-2 text-end">
          <label for="newActivite">Activité :</label>
        </div>
        <div class="col-5 text-start">
          <input v-model="newActivite" class="bgcolor3">
        </div>
      </div>
      <div class="row d-flex justify-content-center p-3 mb-3">
        <button @click="increment" class="button-circle color1">C'est parti</button>
      </div>
    </div>

    <!---Premier template---->

    <div class="container-fluid template1" v-if="this.$store.state.modelStart === true">

      <div>
        <div class="fond-nav-exemple-1"></div>
        <div class="row justify-content-end text-uppercase m-2">
          <div class="col-9 col-lg-6 titre-t1 display-5 text-start">{{ nameEntreprise }}</div>
          <div class="col-2 col-lg-5 p-1">
            <nav class="navbar navbar-dark navbar-expand-lg nav-t1">
              <div class="container-fluid">
                <button class="navbar-toggler nav-tog-t1" type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                  aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse nav-t1" id="navbarNavAltMarkup">
                  <div class="navbar-nav">
                    <a class="nav-link active" aria-current="page" href="#">Etoile</a>
                    <a class="nav-link" href="#">En cours</a>
                    <a class="nav-link" href="#">En cours</a>
                    <a class="nav-link" @click="resetModel" href="#">Retour</a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div class=" activite-t1 p-4">
        <h1>{{ activiteEntreprise }}</h1>
      </div>
      <div class="p-3">
        <h2>{{ exemple.exempleDescription }}</h2>
      </div>
      <div class="row justify-content-center p-3">
       </div>
      <div class="mb-5">
        <a href="#" class="box-btn-t1 btn-t1" @click="resetModel">{{ exemple.exempleBouton }}</a>

      </div>

      <article>
        <div class="container-fluid boite-t1 p-4">
          <div class="shadow-t1">
            <div>
              <h3 class="p-4">{{ exemple.exempleTitre1 }}</h3>
            </div>
            <div class="row justify-content-center">
              <div class="col-10 texte-exemple">{{ exemple.exempleTexte1 }}</div>
            </div>
          </div>

          <div class="row justify-content-center p-5">
            <div class="barre rounded-5 barre-t1"></div>
          </div>

          <div class="shadow-t1">
            <div>
              <h3 class="p-4">{{ exemple.exempleTitre2 }}</h3>
            </div>

            <div class="row justify-content-center">
              <div class="qv">
                <div id="carouselExampleControls" class="carousel slide rendu-carrousel col-md-4 col-12"
                  data-bs-ride="carousel">
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src="../template/assets/nuit1.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                      <img src="../template/assets/nuit2.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                      <img src="../template/assets/nuit3.jpg" class="d-block w-100" alt="...">
                    </div>
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
                <div class="texte-exemple col-10 col-md-12">{{ exemple.exempleTexte2 }}</div>
              </div>
            </div>
          </div>

          <div class="row justify-content-center p-5">
            <div class="barre rounded-5 barre-t1"></div>
          </div>

          <div class="shadow-t1">
          <div>
            <h3 class="p-4">{{ exemple.exempleTitre3 }}</h3>
          </div>
          <div class="row justify-content-center">
            <div class="col-8 texte-exemple">{{ exemple.exempleTexte3 }}</div>
          </div>
          </div>

       </div>
      </article>
    </div>


    <!----second template-->

    <!---fin de la page-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      modelStartInitial: this.$store.state.modelStart,
      exemple: {
        exempleDescription: "Bienvenue sur votre site demo",
        exempleBouton: "EdelWebb",
        exempleTitre1: "Imaginez votre projet",
        exempleTexte1: "Grâce au menu, vous pouvez voir plusieurs exemples de créations de sites web. Cependant, sachez que rien n'est définitif et que nous sommes à l'écoute de toutes vos demandes. Tous les éléments sont modifiables, que ce soit la police d'écriture, la couleur de fond ou d'écriture, une photo, ou même l'ajout d'éléments. Notre objectif est de réaliser le site web selon vos exigences et vos besoins. Les exemples présentés dans le menu ne sont là que pour vous donner des idées et vous inspirer. Nous sommes conscients que chaque projet est unique et nous nous engageons à travailler en étroite collaboration avec vous pour créer un site web qui vous ressemble. N'hésitez pas à nous faire part de toutes vos demandes, nous sommes là pour vous accompagner tout au long du processus de création et répondre à toutes vos questions. Chez nous, la satisfaction du client est notre priorité absolue, et nous mettons tout en œuvre pour que vous soyez entièrement satisfait du résultat final.",
        exempleTitre2: "Pourquoi travailler avec nous ?",
        exempleTexte2: "Depuis toujours, mon métier consiste à être à l'écoute de mes clients. Je m'assure de comprendre exactement ce qu'ils souhaitent, afin de leur fournir un service sur mesure qui répond à leurs besoins spécifiques. Tout au long de votre réflexion, je serai à vos côtés pour vous accompagner et vous guider dans vos choix. Je suis convaincu que la clé d'une relation client réussie réside dans la capacité d'écoute et de compréhension. C'est pourquoi j'accorde une grande importance à ces aspects dans ma pratique professionnelle. Vous pouvez être assuré que je mettrai tout en œuvre pour vous aider à atteindre vos objectifs, quel que soit le domaine concerné. N'hésitez pas à me faire part de toutes vos demandes, je suis là pour vous aider et vous conseiller en toute transparence. Faites-moi confiance pour vous accompagner dans votre projet, je serai à votre écoute à chaque étape du processus.",
        exempleTitre3: "Lorem Ipsum",
        exempleTexte3: "Cuius acerbitati uxor grave accesserat incentivum, germanitate Augusti turgida supra modum, quam Hannibaliano regi fratris filio antehac Constantinus iunxerat pater, Megaera quaedam mortalis, inflammatrix saevientis adsidua, humani cruoris avida nihil mitius quam maritus; qui paulatim eruditiores facti processu temporis ad nocendum per clandestinos versutosque rumigerulos conpertis leviter addere quaedam male suetos falsa et placentia sibi discentes, adfectati regni vel artium nefandarum calumnias insontibus adfligebant."

      }
    }
  },
  methods: {
    increment() {
      this.$store.state.nameEntreprise = this.newName;
      this.$store.state.activiteEntreprise = this.newActivite;
      this.$store.state.modelStart = true;
    },
    resetModel() {
      this.$store.state.modelStart = false;
    }
  },
  computed: {
    nameEntreprise() {
      return this.$store.state.nameEntreprise
    },
    activiteEntreprise() {
      return this.$store.state.activiteEntreprise
    },
    modelStart() {
      return this.$store.state.modelStart
    }
  }

}
</script>