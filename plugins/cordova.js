import Vue from 'vue'
import VueCordova from '~/lib/vue-cordova'

Vue.use(VueCordova, {
  plugins: {
    ble: 'ble', // alias: navigator.NAME
    camera: 'camera',
    vibrate: 'vibrate',
  },
})
