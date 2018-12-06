<template>
  <div class="row">
    <virtual-octave />
    <virtual-octave />
    <virtual-octave />
  </div>
</template>
<script>
import VirtualOctave from './VirtualOctave'
export default {
  components: {
    VirtualOctave
  }
}
</script>
<style scoped>
.row {
  display: flex;
  flex-direction: row;
}

.row > * {
  flex-grow: 1;
}
</style>
