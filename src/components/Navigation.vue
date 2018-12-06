<template>
  <div>
    <div class="navigation">
      <router-link class="nav-item" v-for="route in $router.options.routes.filter(r => !r.position)" v-if="route.name" :key="route.name" tag="div" :to="route.path">
        <img height="32" :src="`/static/icons/${route.name}.svg`"> {{route.name}}
      </router-link>
      <div class="filler"></div>
      <router-link class="nav-item" v-for="route in $router.options.routes.filter(r => r.position === 'right')" v-if="route.name" :key="route.name" tag="div" :to="route.path">
        <img height="32" :src="`/static/icons/${route.name}.svg`"> {{route.name}}
      </router-link>
    </div>
  </div>
</template>

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

.nav-item.router-link-active {
  font-weight: bold;
  background-position: 0 0;
}

.nav-item {
  transition: all 0.3s;
  background-size: 200% 100%;
  background-image: linear-gradient(to right, #ddd 50%, rgba(0,0,0,0) 50%);
  background-position: -100% 0;
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
</style>
