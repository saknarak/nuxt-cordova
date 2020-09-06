<template>
  <v-app id="inspire">
    <nav-menu />

    <v-app-bar
      app
      color="indigo"
      dark
    >
      <nav-button />
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <h1 v-for="i in 100" :key="i">
        Beacon
      </h1>
    </v-main>
    <v-footer
      color="indigo"
      app
    >
      <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>
<script>
import NavMenu from '~/components/nav-menu.vue'
import NavButton from '~/components/nav-button.vue'

export default {
  components: {
    NavMenu,
    NavButton,
  },

  data() {
    return {
    }
  },

  computed: {
    drawer: {
      get() {
        return this.$store.state.drawer
      },
      set(v) {
        this.$store.commit('setDrawer', v)
      },
    },
  },
}
</script>
