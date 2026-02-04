<template>
  <div>
    <div v-if="showType=='card'">
      <!--切换到list模式-->
      <div @click="handleToggle()" class="demo">list</div>
    </div>
    <div v-else>
      <!--切换到card模式-->
      <div @click="handleToggle()" class="demo">card</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {computed, ref} from "vue";
import {getCurrentInstance} from 'vue';


import {storeToRefs} from 'pinia'
//引入元素状态store
import {elementStatusStore} from "@/stores/elementStatusStore.ts"
//storeToRefs解构，使cardType保持响应性
const store = elementStatusStore()
const showType = computed(() => store.cardType)
const handleToggle = () => {
  store.toggle()
}
//
// const {emitter} = getCurrentInstance()!.appContext.config.globalProperties;
// const showType = ref("card")
// const handleToggle = (type: String) => {
//   emitter.emit('handleShowToggle', type);
//   showType.value = type
// }
</script>


<style scoped>
.demo {
  width: 20px;
  height: 20px;
  //background-color: green;
}
</style>