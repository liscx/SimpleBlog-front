<template>
  <div id="left-tool-bar">
    <div class="bar-divide"></div>
    <div class="bar-divide"></div>
    <div class="bar-divide"></div>
    <div class="bar-divide"></div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
#left-tool-bar {
  margin: 10px 0 10px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 5px;

  width: 100%;
  height: 20px;

  .bar-divide {
    width: 95%;
    height: 95%;
    background-color: var(--custom-button-color);
    transition: background-color 0.3s ease;
  }
  
  .bar-divide:hover {
    background-color: var(--custom-button-hover-color);
  }
}

</style>