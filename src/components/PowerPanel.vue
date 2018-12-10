<template>
<div class="fullscreen">
  <button @click="powerOn()">On</button>
</div>
</template>
<script>
import SoundSystem from '../lib/SoundSystem'
export default {
  methods: {
    powerOn () {
      SoundSystem.powerOn()
      this.$emit('powerOn')
    }
  }
}
</script>
<style scoped>
.fullscreen {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: white;
}
</style>
