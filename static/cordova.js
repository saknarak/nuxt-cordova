// /////////////////////////////////////////////////////////
// DEVICE MOCKUP
// /////////////////////////////////////////////////////////

const deviceMock = {
  available: true,
  cordova: '9.0.0', // version of Cordova
  model: 'Redmi 5A', // name of the device's model or product
  platform: 'Android', // device's operating system name
  uuid: '5febb8348439abcd', // device's Universally Unique Identifier
  version: '8.1.0', // operating system version
  manufacturer: 'Xiaomi', // device's manufacturer
  isVirtual: false, // device is running on a simulator
  serial: 'da8f074c7c99', // device hardware serial number
}

// /////////////////////////////////////////////////////////
// BLE MOCKUP
// /////////////////////////////////////////////////////////
const bleDefaultList = [
  { id: '05:E7:EC:F1:F9:91', advertising: {}, rssi: -37 },
  { name: 'SySits_00024', id: 'D4:22:02:00:00:18', advertising: {}, rssi: -71 },
  { name: 'SySits_00025', id: 'D4:22:02:00:00:19', advertising: {}, rssi: -67 },
  { name: 'SySits_00026', id: 'D4:22:02:00:00:1A', advertising: {}, rssi: -80 },
  { name: 'Minibeacon_02207', id: 'D4:22:02:00:08:9F', advertising: {}, rssi: -80 },
  { name: 'Sysits_19292', id: 'EB:07:8C:3F:0F:88', advertising: {}, rssi: -91 },
  { name: 'SySits_00023', id: 'D4:22:02:00:00:17', advertising: {}, rssi: -85 },
  { id: '60:15:43:2E:CE:C7', advertising: {}, rssi: -96 },
]
var scanTimer = null
var bleIdx = 0

const bleMock = {
  enable(ok, error) {
    if (typeof ok === 'function') {
      ok()
    }
  },

  scan(service, duration, success, error, mockOptions) {
    let list = (mockOptions && mockOptions.list) || bleDefaultList
    bleIdx = 0
    let t = (mockOptions && mockOptions.every) || (duration * 400) / list.length
    clearInterval(scanTimer)
    scanTimer = setInterval(() => {
      success(list[bleIdx])
      bleIdx++
      if (bleIdx >= list.length) {
        clearInterval(scanTimer)
      }
    }, t)
  },

  startScan(service, success, error, mockOptions) {
    let list = (mockOptions && mockOptions.list) || bleDefaultList
    bleIdx = 0
    let t = (mockOptions && mockOptions.every) || 300
    clearInterval(scanTimer)
    scanTimer = setInterval(() => {
      if (mockOptions) {
        list[bleIdx].rssi = Math.floor(-80 + Math.random(20))
      }
      success(list[bleIdx])
      bleIdx++
      if (bleIdx >= list.length) {
        bleIdx = 0
      }
    }, t)
  },

  startScanWithOptions(service, options, success, error, mockOptions) {
    let list = (mockOptions && mockOptions.list) || bleDefaultList
    bleIdx = 0
    let t = (mockOptions && mockOptions.every) || 300
    clearInterval(scanTimer)
    scanTimer = setInterval(() => {
      if (mockOptions) {
        list[bleIdx].rssi = Math.floor(-80 + Math.random() * 20)
      }
      success(list[bleIdx])
      bleIdx++
      if (bleIdx >= list.length) {
        bleIdx = 0
      }
    }, t)
  },

  stopScan(success, error) {
    clearInterval(scanTimer)
    if (typeof success === 'function') {
      success()
    }
  },
}

// /////////////////////////////////////////////////////////
// CAMERA MOCKUP
// /////////////////////////////////////////////////////////

const cameraMock = {
  getPicture(success, failed, options, mockOptions) {
    success(`images/photos/${Math.floor((Math.random() * 1000)) % 8}.png`)
  },
}

// /////////////////////////////////////////////////////////
// DIALOGS MOCKUP
// /////////////////////////////////////////////////////////

const dialogsMock = {
  alert(message, callback, title, buttonName) {
    window.alert(message)
    callback()
  },
  confirm(message, confirmCallback, title, buttonLabels) {
    let ok = window.confirm(message)
    confirmCallback(ok ? 1 : 2)
  },
  prompt(message, promptCallback, title, buttonLabels, defaultText) {
    let text = window.prompt(message, defaultText)
    promptCallback({ buttonIndex: 1, input1: text })
  },
  beep(times) {
    console.log('beep', times)
  },
}

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const event = new Event('deviceready')
    window.device = deviceMock
    window.ble = bleMock
    window.navigator.camera = cameraMock
    window.navigator.notification = dialogsMock
    window.document.dispatchEvent(event)
  }, 500)
}, false)
