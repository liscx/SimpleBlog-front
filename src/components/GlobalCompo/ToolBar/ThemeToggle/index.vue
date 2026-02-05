<template>
  <!--主题切换switch-->
  <div id="theme-ball" @click="toggleDarkMode">
    <div v-if="theme.global.current.value.dark" class="inner-themeBtn">
<!--      <span class="toggle-span">Light</span>-->
      <oh-icon name="wi-day-sunny" :fill="iconColor" scale="1.7"/>

   

    </div>
    <div v-else class="inner-themeBtn"> 
      <oh-icon name="wi-moonrise" :fill="iconColor" scale="1.7"/>
<!--      <span class="toggle-span">Dark</span>-->
   
    </div>
  </div>
</template>

<script setup lang="ts">

import {useTheme} from 'vuetify'
import {computed} from "vue";

const iconColor = computed(() => theme.global.current.value.dark ? 'white' : 'black')
const theme = useTheme()
const toggleDarkMode = () => {
  const html = document.documentElement
  // 根据当前主题状态切换
  const isDark = theme.global.current.value.dark
  theme.global.name.value = isDark ? 'light' : 'dark'
  //切换全局自定义主题
  html.setAttribute('data-theme', isDark ? 'light' : 'dark')
  //切换浏览器预设主题
  html.style.colorScheme = isDark ? 'light' : 'dark'

}
</script>

<style scoped>
#theme-ball {
  //background-color: #0057ff;
  display: flex;
  flex-direction: row-reverse;

  width:30px;
  border-radius: 2%;
}

.icon:hover {
  animation: ease-in;
}

.toggle-span {
  line-height: 25px;
  font-weight: 700;
  //color: white;

}

.inner-themeBtn {
  display: flex;
  justify-content: space-around;
  align-items: center;

}
</style>