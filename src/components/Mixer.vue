<template>
  <div class="mixer">
    <knob min="0" max="1" label="Master volume" v-model="masterVolume" />
  </div>
</template>

<script>
import Mixer from '../lib/Mixer'
import Knob from './Knob'

export default {
  name: 'Mixer',
  data () {
    return {
      masterVolume: 1
    }
  },
  watch: {
    masterVolume () {
      Mixer.master.gain.value = this.masterVolume
    }
  },
  components: {
    Knob
  }
}
</script>

<style scoped>
.mixer {
  display: flex;
}
</style>
