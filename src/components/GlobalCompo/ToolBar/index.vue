<template>
  <div class="tool-box stick">
    <ThemeToggle/>
    <VFXToggle/>
    <CardListToggle/>
  </div>
</template>
<script setup lang="ts">

import ThemeToggle from "@/components/GlobalCompo/ToolBar/ThemeToggle/index.vue";
import VFXToggle from "@/components/GlobalCompo/ToolBar/VFXToggle/index.vue";
import CardListToggle from "@/components/GlobalCompo/ToolBar/CardListToggle/index.vue";
</script>


<style scoped>
.tool-box {
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  column-gap: 10px;
  //border-top: 1px solid lightgray;
  //border-bottom: 1px solid lightgray;
  z-index: 3;
  //background-color: lightgray;
}

.stick {
  position: sticky;
  top: 20px;
  align-self: flex-start;
}
</style>