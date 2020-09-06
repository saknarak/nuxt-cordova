const JavaScriptObfuscator = require('webpack-obfuscator')

module.exports = {
  // Headers of the page
  head: {
    title: 'CTC Cordova',

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', content: 'Nuxt.js project' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'theme-color', content: '#0ff5' },
      { name: 'fragment', content: '!' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
      { name: 'msapplication-TileImage', content: 'wecan_logo.png' },
      { name: 'msapplication-TileColor', content: '#da532c' },
    ],

    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: 'apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: 'favicon-16x16.png' },
      { rel: 'mask-icon', href: 'safari-pinned-tab.svg', color: '#5bbad5' },
      { name: 'msapplication-TileColor', content: '#da532c' },
      { name: 'theme-color', content: '#ffffff' },
      { rel: 'stylesheet', type: 'text/css', href: 'iconfont/material-icons.css' },
      // { rel: 'stylesheet', type: 'text/css', href: 'iconfont/font-awesome.css' },
    ],

    script: [
      { src: 'cordova.js', type: 'text/javascript' },
    ],
  },

  mode: 'spa',

  router: {
    mode: 'hash',
  },

  render: {
    resourceHints: false,
  },

  build: {
    extractCSS: true,
    publicPath: process.env.NODE_ENV !== 'production' ? '/_nuxt/' : 'nuxt/',
    plugins: [],
  },

  generate: {
    dir: 'www',
  },

  modules: [
    '@nuxtjs/proxy',
  ],

  buildModules: [
    '@nuxtjs/vuetify',
  ],

  plugins: [
    '~/plugins/cordova',
    '~/plugins/mqtt',
    '~/plugins/axios',
  ],

  server: {
    port: 3005,
    host: '0.0.0.0',
  },

  proxy: {
    '/api': process.env.NODE_ENV !== 'production' ? 'http://127.0.0.1:7005' : 'http://api:7005',
    '/files': process.env.NODE_ENV !== 'production' ? 'http://127.0.0.1:7005' : 'http://api:7005',
    ws: true,
  },

  vuetify: {
    defaultAssets: false,
    icons: {
      iconfont: 'md',
    },
  },
}

if (process.env.NODE_ENV === 'production') {
  console.log('production build')
  module.exports.build.plugins.push(new JavaScriptObfuscator({
    rotateUnicodeArray: true,
  }))
}
