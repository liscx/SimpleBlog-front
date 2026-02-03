<template>
  <div>
    <div v-if="showType=='card'">
      <!--切换到list模式-->
      <div @click="handleToggle('list')" class="demo"></div>
    </div>
    <div v-else>
      <!--切换到card模式-->
      <div @click="handleToggle('card')" class="demo"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {ref} from "vue";
import {getCurrentInstance} from 'vue';

const {emitter} = getCurrentInstance()!.appContext.config.globalProperties;
const showType = ref("")
const handleToggle = (type: String) => {
  emitter.emit('handleShowToggle', type);
  showType.value = type
}
</script>


<style scoped>
.demo {
  width: 20px;
  height: 20px;
  background-color: green;
}
</style>