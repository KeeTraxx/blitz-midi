// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import MidiInput from './lib/MidiInput'

import './assets/reset.css'
import './assets/blitz-midi.scss'

Vue.use(Vuex)

Vue.config.productionTip = false
async function bootstrap () {
  try {
    await MidiInput.init()
  } catch (e) {
    console.log('MIDI ININT FAILED')
  }

  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
  })
}

bootstrap()
