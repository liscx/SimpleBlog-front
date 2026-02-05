<template>
  <div class="tool-box stick">
    <oh-icon name="io-search-sharp" fill="black" scale="1.3" style="padding-right: 5px"/>
    <CardListToggle/>
    <VFXToggle/>
    <ThemeToggle/>
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
  height: 50.5px;
  display: flex;
  align-items: center;
  column-gap: 6px;
  padding-bottom: 10px;
  margin-bottom: 10px;
  justify-content: flex-end;
  border-bottom: var(--card-border);
  //flex-direction: row-reverse;
  //border-top: 1px solid lightgray;
  //border-bottom: 1px solid lightgray;
  z-index: 3;
  //background-color: lightgray;
  //box-sizing: border-box;
}

.stick {
  position: sticky;
  top: 15px;
  align-self: flex-start;
}
</style>