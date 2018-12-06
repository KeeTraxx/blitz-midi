<template>
  <svg class="row" :viewBox="`0 0 ${octaves * 800} 600`" preserveAspectRatio="xMidYMid meet">
    <virtual-octave :octave="baseOctave + i" :transform="`translate(${i * 700})`" v-for="(o, i) in virtualOctaves" :key="o" />
  </svg>
</template>
<script>
import VirtualOctave from './VirtualOctave'
export default {
  props: {
    octaves: {
      required: false,
      default: 3,
      type: Number
    }
  },
  data () {
    return {
      baseOctave: 3
    }
  },
  computed: {
    virtualOctaves () {
      let p = []
      for (let i = 0; i < this.octaves; i++) {
        p.push(i)
      }
      return p
    }
  },
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
