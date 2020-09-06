<template>
  <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
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
}
</script>
