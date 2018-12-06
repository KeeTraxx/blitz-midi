<template>
  <div>
    <div v-if="synthesizer">
      <select v-model="synthesizer.type">
        <option>sawtooth</option>
        <option>sine</option>
        <option>square</option>
      </select>
    </div>
  </div>
</template>

<script>
// import MidiEventBus from '../lib/MidiEventBus'
// import MidiInput from '../lib/MidiInput'
import Synthesizer from '../lib/Synthesizer'

export default {
  name: 'Synthesizer',
  data () {
    return {
      synthesizer: Synthesizer
    }
  }
}
</script>
