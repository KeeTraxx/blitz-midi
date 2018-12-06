export class Mixer {
  powerOn () {
    this.ctx = new AudioContext()
    this.master = this.ctx.createGain()
    this.master.connect(this.ctx.destination)
  }
}

export default new Mixer()
