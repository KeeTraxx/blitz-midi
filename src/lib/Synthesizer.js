import MidiEvent from './MidiEvent'
import MidiEventBus from './MidiEventBus'
import Mixer from './Mixer'

export class Synthesizer {
  type = 'sawtooth'

  notes = {}

  constructor () {
    MidiEventBus.$on(MidiEvent.NOTE_ON, ev => this.noteOn(ev))
    MidiEventBus.$on(MidiEvent.NOTE_OFF, ev => this.noteOff(ev))
  }

  noteOn (ev) {
    const gainNode = Mixer.ctx.createGain()
    gainNode.gain.value = ev.meta.velocity * 0.5
    gainNode.connect(Mixer.master)
    const oscillatorNode = Mixer.ctx.createOscillator()
    oscillatorNode.type = this.type
    oscillatorNode.frequency.value = ev.meta.frequency
    oscillatorNode.connect(gainNode)

    oscillatorNode.start()

    this.notes[ev.data[1]] = {
      oscillatorNode,
      gainNode
    }
  }

  noteOff (ev) {
    this.notes[ev.data[1]] && this.notes[ev.data[1]].gainNode.gain.linearRampToValueAtTime(0, Mixer.ctx.currentTime + 0.2)
  }
}

export default new Synthesizer()
