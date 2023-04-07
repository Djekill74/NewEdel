<template>
  <div class="container-lg">

    <nav class="navbar sticky-top" v-if="this.$store.state.modelStart === false">
      <div class="container-fluid justify-content-center">
        <div>
          <img src="./assets/logo.png" width="400" id="logo-menu" alt="logo">
        </div>
        <div>

          <router-link to="/" id="clear">Accueil</router-link> |
          <router-link to="/fonction">Fonction</router-link> |
          <router-link to="/modele">Modéle</router-link> |
          <router-link to="/galerie">Galerie</router-link> |
          <router-link to="/propos">A_propos</router-link> |
          <router-link to="/contact">Contact</router-link> |
        </div>
      </div>
    </nav>
    <router-view />
    <BottomPage  v-if="this.$store.state.modelStart === false"/>

  </div>
</template>

<script>
import BottomPage from './components/BottomPage.vue'

export default {
  name: 'HomeView',
  components: {
    BottomPage
  }


};
</script>


<style lang="scss"></style>
