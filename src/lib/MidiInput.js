import MidiEventBus from './MidiEventBus'
import MidiEvent from './MidiEvent'

export class MidiInput {
  MidiInputEvents = {
    STATE_CHANGE: 'STATE_CHANGE',
    MIDI_INPUT_EVENT: 'MIDI_INPUT_EVENT'
  }

  async init () {
    console.log('init...')
    this.midiAccess = await navigator.requestMIDIAccess({ sysex: false })
    this.midiAccess.onstatechange = (ev) => {
      this.updateInputs()
    }
    this.updateInputs()
  }

  updateInputs () {
    console.log('INPUT')
    this.midiAccess.inputs.forEach(midiInput => {
      midiInput.onmidimessage = (ev) => {
        const midiEvent = MidiEvent.parseEvent(ev)
        MidiEventBus.$emit(this.MidiInputEvents.MIDI_INPUT_EVENT, midiEvent)
        MidiEventBus.$emit(midiEvent.meta.event, midiEvent)
      }
    })
  }

  getInputs () {
    if (this.midiAccess) {
      let inputs = []
      this.midiAccess.inputs.forEach(i => inputs.push(i))
      return inputs
    }
  }
}

export default new MidiInput()
