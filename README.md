# NUXT-CORDOVA-TEMPLATE

## 1. install cordova
- install cordova
```sh
npm install -g cordova
```
- install JDK (1.8.x only)
- install Android Studio
- install gradle
- setup path
  - `JAVA_HOME=path/to/jdk1.8`
  - `ANDROID_SDK_ROOT=path/to/android_sdk`
- check requirements
```sh
cordova requirements
```
- add cordova platform
```sh
cordova platform add android
```

## 2. run this template
```sh
npm run build
cordova run android
```

# update package
```
npm i nuxt async-mqtt
npm i -D @babel/core @babel/plugin-transform-runtime @babel/preset-env @babel/runtime @nuxtjs/proxy @nuxtjs/vuetify babel-eslint babel-jest cordova-android cordova-plugin-whitelist cross-env eslint eslint-config-standard eslint-plugin-import eslint-plugin-jest eslint-plugin-node eslint-plugin-promise eslint-plugin-standard eslint-plugin-vue jest replace vue-jest webpack-obfuscator
```
