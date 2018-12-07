<template>
  <div ref="element" class="knob">
    <svg :width="width" :height="height" viewBox="-16 -16 32 32">
      <g ref="knob">
        <circle r="16" />
        <line y1="-8" y2="-16" />
      </g>
    </svg>
    <div class="label" v-text="label"></div>
  </div>
</template>

<script>
import * as d3 from 'd3'

export default {
  name: 'Knob',
  props: {
    width: {
      required: false,
      default: 64,
      type: Number
    },
    height: {
      required: false,
      default: 64,
      type: Number
    },
    value: {
      required: true
    },
    min: {
      required: false,
      default: 0
    },
    max: {
      required: false,
      default: 100
    },
    label: {
      required: true,
      type: String
    },
    round: {
      required: false,
      type: Boolean,
      default: false
    }
  },
  data () {
    let scale = d3.scaleLinear()
      .domain([0, 100])
      .range([this.min, this.max])
      .clamp(true)

    let rotation = d3.scaleLinear()
      .domain([this.min, this.max])
      .range([-120, 120])
      .clamp(true)

    return {
      scale,
      rotation,
      internalValue: scale.invert(this.value)
    }
  },
  computed: {
    displayValue () {
      return this.round ? Math.round(this.scale(this.internalValue)) : this.scale(this.internalValue)
    }
  },
  mounted () {
    const element = d3.select(this.$refs.element)
    const knob = d3.select(this.$refs.knob)
    knob.attr('transform', `rotate(${this.rotation(this.displayValue)})`)

    element.call(d3.drag().on('drag', this.move))

    element.on('wheel', this.move)
  },
  methods: {
    move () {
      const knob = d3.select(this.$refs.knob)
      let val = d3.event.dy || d3.event.deltaY * 3
      if (val === undefined) {
        return
      }
      this.internalValue -= val
      this.internalValue = Math.max(0, this.internalValue)
      this.internalValue = Math.min(100, this.internalValue)
      knob.attr('transform', `rotate(${this.rotation(this.displayValue)})`)
      this.$emit('input', this.displayValue)
    }
  }
}
</script>

<style scoped>
.knob {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5em;
  cursor: pointer;
}

line {
  stroke-width: 2px;
  stroke: black;
}

circle {
  fill: grey;
}

text {
  dominant-baseline: middle;
  text-anchor: middle;
}

.label {
  margin: 0.3em;
}
</style>
