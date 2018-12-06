<template>
  <div>
    <div v-if="midiInput.midiAccess">
      <div v-for="input in midiInput.getInputs()" :key="input.id">
        <pre>
        {{input.id}}
        {{input.name}}
        {{input.manufacturer}}
        {{input.state}}
        {{input.type}}
        {{input.version}}
        </pre>
      </div>
    </div>
    <div v-else>
      <p>No Web MIDI API support in your browser!</p>
      <p>See <a href="https://www.w3.org/TR/webmidi/">https://www.w3.org/TR/webmidi/</a> for more information!</p>
      <p>Browser support: <a href="https://caniuse.com/#feat=midi">https://caniuse.com/#feat=midi</a></p>
    </div>
  </div>
</template>

<script>
import MidiEventBus from '../lib/MidiEventBus'
import MidiInput from '../lib/MidiInput'

export default {
  name: 'MidiInputs',
  data () {
    return {
      midiInput: MidiInput
    }
  },
  created () {
    MidiEventBus.$on(MidiInput.MidiInputEvents.STATE_CHANGE, () => {
      this.inputs = MidiInput.getInputs()
    })
  }
}
</script>
