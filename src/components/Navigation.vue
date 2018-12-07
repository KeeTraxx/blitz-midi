<template>
  <div>
    <div class="navigation">
      <div ref="marker" style="height: 5px; top: 59px" class="marker"></div>
      <router-link :ref="route.name" class="nav-item" v-for="route in $router.options.routes.filter(r => !r.position)" v-if="route.name" :key="route.name" tag="div" :to="route.path">
        <img height="32" :src="`/static/icons/${route.name}.svg`"> {{route.name}}
      </router-link>
      <div class="filler"></div>
      <router-link :ref="route.name" class="nav-item" v-for="route in $router.options.routes.filter(r => r.position === 'right')" v-if="route.name" :key="route.name" tag="div" :to="route.path">
        <img height="32" :src="`/static/icons/${route.name}.svg`"> {{route.name}}
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  mounted () {
    this.$router.afterEach(() => this.onRouteChange())
    this.onRouteChange()
  },
  methods: {
    onRouteChange () {
      setTimeout(() => {
        let el = this.$refs[this.$router.currentRoute.name][0].$el
        let rect = el.getBoundingClientRect()
        this.$refs.marker.style.left = rect.left + 'px'
        this.$refs.marker.style.width = rect.width + 'px'
        // this.$refs.marker.style.height = rect.height + 'px'
      }, 10)
    }
  }
}
</script>
<style scoped>
.navigation {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  overflow: auto;
}

.navigation > * {
  padding: 1em;
  display: flex;
  align-items: center;
}

.nav-item {
  cursor: pointer;
}

.navigation img {
  margin-right: 0.3em;
}

.filler {
  flex-grow: 1;
}

.marker {
  position: absolute;
  transition: all 600ms;
  background-color: pink;
  z-index: -200;
  padding: 0;
  margin: 0;
}
</style>
