<template>
  <div id="app">
    <button v-if="!initialized" @click="powerOn()">On</button>
    <div v-else>
      <navigation />
      <router-view />
    </div>
  </div>
</template>

<script>
import Mixer from './lib/Mixer'
import Navigation from './components/Navigation'
export default {
  name: 'App',
  data () {
    return {
      initialized: false
    }
  },
  components: {
    Navigation
  },
  methods: {
    powerOn () {
      Mixer.powerOn()
      this.initialized = true
    }
  }
}
</script>
