<template>
  <div id="VFXSwitchBtn">
    <div v-if="isShow">
      <!--关闭特效-->
      <div @click="handleClick(false)" class="demo" style="padding-bottom: 26px">
        <oh-icon name="wi-cloudy" :fill="iconColor" scale="1.7" />
      </div>
    </div>
    <div v-else>
      <!--打开特效-->
      <div @click="handleClick(true)" class="demo" style="padding-bottom: 32px">
        <oh-icon name="wi-rain" :fill="iconColor" scale="1.7"/>
      </div>
    </div>

  </div>
</template>
<script setup lang="ts">
import {computed, ref} from "vue";
import {getCurrentInstance} from 'vue';
import {useTheme} from 'vuetify'
const theme = useTheme()

const {emitter} = getCurrentInstance()!.appContext.config.globalProperties;
const isShow = ref(true)
const iconColor = computed(() => theme.global.current.value.dark ? 'white' : 'black')


const handleClick = (status: boolean) => {
  emitter.emit('isShow', status);
  isShow.value = status
}

</script>


<style scoped>
.demo {
  width: 30px;
  height: 20px;
  margin-bottom: 5px;
  //background-color: pink;
}
#VFXSwitchBtn{
  padding-right: 5px;
}
</style>