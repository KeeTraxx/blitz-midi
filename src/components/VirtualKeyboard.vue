<template>
<div>
  <div>
    {{baseOctave}}
    <knob label="Base Octave" min="3" max="8" :round="true" v-model="baseOctave" />
  </div>
  <svg class="row" :viewBox="`0 0 ${octaves * 700} 600`" preserveAspectRatio="xMidYMid meet">
    <virtual-octave :octave="baseOctave + i - 1" :transform="`translate(${i * 700})`" v-for="(o, i) in virtualOctaves" :key="o" />
  </svg>
</div>
</template>
<script>
import VirtualOctave from './VirtualOctave'
import MidiEvent from '../lib/MidiEvent'
import MidiEventBus from '../lib/MidiEventBus'
import Knob from './Knob'
export default {
  props: {
    octaves: {
      required: false,
      default: 3,
      type: Number
    }
  },
  created () {
    window.addEventListener('keydown', this.onKey)
    window.addEventListener('keyup', this.onKey)
  },
  destroyed () {
    window.removeEventListener('keydown', this.onKey)
    window.removeEventListener('keyup', this.onKey)
  },
  methods: {
    onKey (ev) {
      let event = ev.type === 'keydown' ? MidiEvent.NOTE_ON : MidiEvent.NOTE_OFF
      let generator = ev.type === 'keydown' ? MidiEvent.getNoteOn : MidiEvent.getNoteOff
      switch (ev.code) {
        case 'KeyZ':
          MidiEventBus.$emit(event, generator(this.baseOctave * 12, 100))
          break
        case 'KeyS':
          MidiEventBus.$emit(event, generator(this.baseOctave * 12 + 1, 100))
          break
        case 'KeyX':
          MidiEventBus.$emit(event, generator(this.baseOctave * 12 + 2, 100))
          break
        case 'KeyD':
          MidiEventBus.$emit(event, generator(this.baseOctave * 12 + 3, 100))
          break
        case 'KeyC':
          MidiEventBus.$emit(event, generator(this.baseOctave * 12 + 4, 100))
          break
        case 'KeyV':
          MidiEventBus.$emit(event, generator(this.baseOctave * 12 + 5, 100))
          break
        case 'KeyG':
          MidiEventBus.$emit(event, generator(this.baseOctave * 12 + 6, 100))
          break
        case 'KeyB':
          MidiEventBus.$emit(event, generator(this.baseOctave * 12 + 7, 100))
          break
        case 'KeyH':
          MidiEventBus.$emit(event, generator(this.baseOctave * 12 + 8, 100))
          break
        case 'KeyN':
          MidiEventBus.$emit(event, generator(this.baseOctave * 12 + 9, 100))
          break
        case 'KeyJ':
          MidiEventBus.$emit(event, generator(this.baseOctave * 12 + 10, 100))
          break
        case 'KeyM':
          MidiEventBus.$emit(event, generator(this.baseOctave * 12 + 11, 100))
          break
        case 'Comma':
          MidiEventBus.$emit(event, generator(this.baseOctave * 12 + 12, 100))
          break
        case 'KeyL':
          MidiEventBus.$emit(event, generator(this.baseOctave * 12 + 13, 100))
          break
        case 'Period':
          MidiEventBus.$emit(event, generator(this.baseOctave * 12 + 14, 100))
          break
        case 'Semicolon':
          MidiEventBus.$emit(event, generator(this.baseOctave * 12 + 15, 100))
          break
        case 'Slash':
          MidiEventBus.$emit(event, generator(this.baseOctave * 12 + 16, 100))
          break
      }
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
    VirtualOctave,
    Knob
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
