const status = {
  NOTE_OFF: 'NOTE_OFF',
  NOTE_ON: 'NOTE_ON',
  POLYPHONIC_AFTERTOUCH: 'POLYPHONIC_AFTERTOUCH',
  CONTROL_MODE_CHANGE: 'CONTROL_MODE_CHANGE',
  PROGRAM_CHANGE: 'PROGRAM_CHANGE',
  CHANNEL_AFTERTOUCH: 'CHANNEL_AFTERTOUCH',
  PITCH_WHEEL: 'PITCH_WHEEL'
}

const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']

export function parseEvent (ev) {
  let statusByte = ev.data[0]
  let dataByte1 = ev.data[1]
  let dataByte2 = ev.data[2]

  let channel
  if (statusByte >= 0x80 && statusByte <= 0xDF) {
    channel = ev.data[0] % 16
  }

  let event
  let note
  let velocity
  let octave
  let frequency
  if (statusByte >= 0x80 && statusByte <= 0x8F) {
    event = status.NOTE_OFF
    octave = Math.floor(dataByte1 / 12 - 1)
    note = notes[(dataByte1) % 12]
    frequency = Math.pow(2, (dataByte1 - 69) / 12) * 440
  } else if (statusByte >= 0x90 && statusByte <= 0x9F) {
    event = status.NOTE_ON
    octave = Math.floor(dataByte1 / 12 - 1)
    velocity = dataByte2 / 127
    frequency = Math.pow(2, (dataByte1 - 69) / 12) * 440
  } else if (statusByte >= 0xA0 && statusByte <= 0xAF) {
    event = status.POLYPHONIC_AFTERTOUCH
  } else if (statusByte >= 0xB0 && statusByte <= 0xBF) {
    event = status.CONTROL_MODE_CHANGE
  } else if (statusByte >= 0xC0 && statusByte <= 0xCF) {
    event = status.PROGRAM_CHANGE
  } else if (statusByte >= 0xD0 && statusByte <= 0xDF) {
    event = status.CHANNEL_AFTERTOUCH
  } else if (statusByte >= 0xE0 && statusByte <= 0xEF) {
    event = status.PITCH_WHEEL
  }

  ev.meta = {
    channel,
    event,
    note,
    velocity,
    octave,
    frequency
  }
  return ev
}

export default {
  parseEvent,
  ...status
}
