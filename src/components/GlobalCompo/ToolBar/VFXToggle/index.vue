<template>
  <div id="VFXSwitchBtn">
    <div v-if="isShow">
      <!--关闭特效-->
      <div @click="handleClick(false)" class="demo"></div>
    </div>
    <div v-else>
      <!--打开特效-->
      <div @click="handleClick(true)" class="demo"></div>
    </div>

  </div>
</template>
<script setup lang="ts">
import {ref} from "vue";
import {getCurrentInstance} from 'vue';

const {emitter} = getCurrentInstance()!.appContext.config.globalProperties;
const isShow = ref(true)


const handleClick = (status: boolean) => {
  emitter.emit('isShow', status);
  isShow.value = status
}

</script>


<style scoped>
.demo {
  width: 20px;
  height: 20px;
  //background-color: pink;
}
</style>