importScripts('/nuxt/workbox.3ffff7b2.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/nuxt/app.bc35257661150fa55f19fa5726fe83ae.css",
    "revision": "bc35257661150fa55f19fa5726fe83ae"
  },
  {
    "url": "/nuxt/app.cdc1923489b0c0bea7da.js",
    "revision": "899878d7787ba2c82a20789bc9acc0eb"
  },
  {
    "url": "/nuxt/layouts_default.bdca5ad3c0ecc64bc4d3.js",
    "revision": "53ecf8082cda2a2ca162d4f99bb77e84"
  },
  {
    "url": "/nuxt/manifest.27af96d7b5ab6e0cf44d.js",
    "revision": "aac12e511779fba1ea4a179704249fe7"
  },
  {
    "url": "/nuxt/pages_about_me.ccfcd7fcffe17227dd6a.js",
    "revision": "d8c040b48cad547c848f9cb485bc34af"
  },
  {
    "url": "/nuxt/pages_home.84937dd29e71173abf0b.js",
    "revision": "db8c33a0288b6f4ff156b71f12c63abc"
  },
  {
    "url": "/nuxt/pages_index.a7f5fc70f54fd8a4bd77.js",
    "revision": "e62b07422e45c55f7b3a24e611d0d37a"
  },
  {
    "url": "/nuxt/pages_smart-plug.85b0779e7af6bf2f7770.js",
    "revision": "dad293342195ff1d5a2a28b623eff5e1"
  },
  {
    "url": "/nuxt/vendor.4a366c4ed7481d58a03c.js",
    "revision": "1894192a3da3225375177df59b6b3eaa"
  }
], {
  "cacheId": "wecan-app",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')





