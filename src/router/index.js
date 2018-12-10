import Vue from 'vue'
import Router from 'vue-router'
import MidiInputs from '@/components/MidiInputs'
import Synthesizer from '@/components/Synthesizer'
import Mixer from '@/components/Mixer'
import VirtualKeyboard from '@/components/VirtualKeyboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/mixer',
      name: 'Mixer',
      component: Mixer
    },
    {
      path: '/synth',
      name: 'Synthesizer',
      component: Synthesizer
    },
    {
      path: '/keyboard',
      name: 'Virtual Keyboard',
      component: VirtualKeyboard
    },
    {
      path: '/inputs',
      name: 'MidiInputs',
      component: MidiInputs,
      position: 'right'
    },
    { path: '*', redirect: '/mixer' }
  ]
})
