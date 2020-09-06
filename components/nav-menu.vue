<template>
  <v-navigation-drawer
    v-model="drawer"
    app
  >
    <v-list dense>
      <v-list-item link @click="goto('/')">
        <v-list-item-action>
          <v-icon>home</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item link @click="goto('/beacon')">
        <v-list-item-action>
          <v-icon>wifi_tethering</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Beacon Scanner</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
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

  methods: {
    goto(path) {
      this.drawer = false
      this.$router.push(path)
    },
  },
}
</script>
