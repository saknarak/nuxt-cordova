export default {
  install(Vue, options) {
    if (Vue.cordova) {
      return
    }

    let deviceReady = false
    let deviceReadyPromiseResolve = null
    let ready = () => {
      if (deviceReady) {
        return Promise.resolve()
      }
      return new Promise(resolve => {
        deviceReadyPromiseResolve = resolve
      })
    }

    let obj = {
      plugins: options.plugins || {},
      ready,
    }
    Vue.cordova = obj
    Vue.prototype.$cordova = obj

    if (!window) {
      return
    }

    window.document.addEventListener('deviceready', () => {
      deviceReady = true
      Object.keys(obj.plugins).forEach(key => {
        let pluginObjectKey = obj.plugins[key]
        if (window[pluginObjectKey]) {
          if (typeof window[pluginObjectKey] === 'function') {
            obj[key] = window[pluginObjectKey].bind(window)
          } else {
            obj[key] = window[pluginObjectKey]
          }
        } else if (window.navigator[pluginObjectKey]) {
          if (typeof window.navigator[pluginObjectKey] === 'function') {
            obj[key] = window.navigator[pluginObjectKey].bind(window.navigator)
          } else {
            obj[key] = window.navigator[pluginObjectKey]
          }
        }
      })
      deviceReadyPromiseResolve && deviceReadyPromiseResolve()
    }, false)
  },
}
