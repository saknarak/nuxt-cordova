<template>
  <nuxt />
</template>
<script>
export default {
  async mounted() {
    await this.$cordova.ready()
    console.log('device=', this.$cordova.device)
  }, // mounted
}
</script>
