<template>
  <div class="mixer">
    <knob min="0" max="1" label="Master volume" v-model="masterVolume" />
  </div>
</template>

<script>
import Knob from './Knob'
import SoundSystem from '../lib/SoundSystem'

export default {
  name: 'Mixer',
  data () {
    return {
      masterVolume: 1
    }
  },
  watch: {
    masterVolume () {
      SoundSystem.master.gain.value = this.masterVolume
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
