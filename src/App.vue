<template>
  <div id="app">
    <power-panel v-if="!powered" @powerOn="powered = true; $router.push('/keyboard')" />
    <navigation />
    <router-view v-show="powered" />
  </div>
</template>

<script>
import Navigation from './components/Navigation'
import PowerPanel from './components/PowerPanel'
export default {
  data () {
    return {
      powered: false
    }
  },
  mounted () {
    console.log(this.$router)
  },
  components: {
    Navigation,
    PowerPanel
  }
}
</script>
