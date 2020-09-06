import Vue from 'vue'
import mqtt from 'async-mqtt'

Vue.mqtt = mqtt
Vue.prototype.$mqtt = mqtt
