import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

const config = process.env.config
const request = axios.create({
  baseURL: config.apiUrl,
})

Vue.use(VueAxios, request)

export default ({ app, store }, inject) => {
  request.interceptors.response.use((response) => {
    if (response && response.data && response.data.session === false) {
      console.log('SESSION TIMEOUT')
      store.commit('setSession', {})
    }
    return response
  }, error => Promise.reject(error))
}
