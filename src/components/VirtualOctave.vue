<template>
  <g>
    <g class="full-tone">
      <rect :ref="`note_${octave * 12}`" @mousedown="noteOn(0)" @mouseup="noteOff(0)" @mouseleave="noteOff(0)" width="100" height="500" />
      <rect :ref="`note_${octave * 12 + 2}`" @mousedown="noteOn(2)" @mouseup="noteOff(2)" @mouseleave="noteOff(2)" x="100" width="100" height="500" />
      <rect :ref="`note_${octave * 12 + 4}`" @mousedown="noteOn(4)" @mouseup="noteOff(4)" @mouseleave="noteOff(4)" x="200" width="100" height="500" />
      <rect :ref="`note_${octave * 12 + 5}`" @mousedown="noteOn(5)" @mouseup="noteOff(5)" @mouseleave="noteOff(5)" x="300" width="100" height="500" />
      <rect :ref="`note_${octave * 12 + 7}`" @mousedown="noteOn(7)" @mouseup="noteOff(7)" @mouseleave="noteOff(7)" x="400" width="100" height="500" />
      <rect :ref="`note_${octave * 12 + 9}`" @mousedown="noteOn(9)" @mouseup="noteOff(9)" @mouseleave="noteOff(9)" x="500" width="100" height="500" />
      <rect :ref="`note_${octave * 12 + 11}`" @mousedown="noteOn(11)" @mouseup="noteOff(11)" @mouseleave="noteOff(11)" x="600" width="100" height="500" />
    </g>
    <g class="half-tone">
      <rect :ref="`note_${octave * 12 + 1}`" @mousedown="noteOn(1)" @mouseup="noteOff(1)" @mouseleave="noteOff(1)" x="75" width="50" height="300" />
      <rect :ref="`note_${octave * 12 + 3}`" @mousedown="noteOn(3)" @mouseup="noteOff(3)" @mouseleave="noteOff(3)" x="175" width="50" height="300" />
      <rect :ref="`note_${octave * 12 + 6}`" @mousedown="noteOn(6)" @mouseup="noteOff(6)" @mouseleave="noteOff(6)" x="375" width="50" height="300" />
      <rect :ref="`note_${octave * 12 + 8}`" @mousedown="noteOn(8)" @mouseup="noteOff(8)" @mouseleave="noteOff(8)" x="475" width="50" height="300" />
      <rect :ref="`note_${octave * 12 + 10}`" @mousedown="noteOn(10)" @mouseup="noteOff(10)" @mouseleave="noteOff(10)" x="575" width="50" height="300" />
    </g>
  </g>
</template>
<script>
import { MidiEventBus } from '../lib/MidiEventBus'
import MidiEvent from '../lib/MidiEvent'
export default {
  props: {
    octave: {
      type: Number,
      required: true
    }
  },
  created () {
    MidiEventBus.$on(MidiEvent.NOTE_ON, ev => {
      let el = this.$refs[`note_${ev.data[1]}`]
      if (el) {
        console.log(el)
        el.classList.add('active')
      }
    })

    MidiEventBus.$on(MidiEvent.NOTE_OFF, ev => {
      let el = this.$refs[`note_${ev.data[1]}`]
      if (el) {
        console.log(el)
        el.classList.remove('active')
      }
    })
  },
  methods: {
    noteOn (note) {
      let ev = MidiEvent.getNoteOn(this.octave * 12 + note, 100)
      console.log(ev)
      MidiEventBus.$emit(ev.meta.event, ev)
    },
    noteOff (note) {
      let ev = MidiEvent.getNoteOff(this.octave * 12 + note, 100)
      console.log(ev)
      MidiEventBus.$emit(ev.meta.event, ev)
    }
  }
}
</script>
<style scoped>
svg {
  width: 100%;
  height: 240px;
}

.full-tone rect {
  fill: white;
  stroke: black;
  stroke-width: 2px;
}

.half-tone rect {
  fill: black;
  stroke: white;
  stroke-width: 2px;
}

rect {
  transition: all 300ms;
}

rect.active {
  fill: yellow;
  transition: all 0ms;
}
</style>
