<template>
  <svg viewBox="0 0 704 504" preserveAspectRatio="xMidYMid meet">
    <g class="full-tone">
      <rect x="2" y="2" width="100" height="500" />
      <rect x="102" y="2" width="100" height="500" />
      <rect x="202" y="2" width="100" height="500" />
      <rect x="302" y="2" width="100" height="500" />
      <rect x="402" y="2" width="100" height="500" />
      <rect x="502" y="2" width="100" height="500" />
      <rect x="602" y="2" width="100" height="500" />
    </g>
    <g class="half-tone">
    </g>
  </svg>
</template>
<script>
export default {
}
</script>
<style scoped>
svg {
  width: 100%;
  height: 240px;
}

.full-tone rect {
  fill: white;
  stroke: black;
  stroke-width: 2px;
}
</style>