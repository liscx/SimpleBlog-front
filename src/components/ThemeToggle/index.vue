<template>
  <div id="theme-ball" @click="toggleDarkMode">
    <svg
        v-if="theme.global.current.value.dark"
        t="1765612145464" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
        p-id="1830" width="25" height="25">
      <path
          d="M499.2 279.552c-133.632 0-242.688 108.544-242.688 242.688 0 133.632 108.544 242.688 242.688 242.688s242.688-108.544 242.688-242.688c0-133.632-108.544-242.688-242.688-242.688z m-253.952 56.32l-79.36-79.36 68.608-68.608 79.36 79.36c-26.112 18.944-49.152 41.984-68.608 68.608z m-57.344 235.008h-111.616v-96.768h111.616c-2.56 15.872-3.584 32.256-3.584 48.64 0 15.872 1.024 32.256 3.584 48.128z m264.192-360.448v-112.64h96.768v113.152c-16.384-2.56-32.768-4.096-49.664-4.096-15.872 0-31.744 1.536-47.104 3.584z m233.984 57.856l80.384-80.384 68.608 68.608-80.384 80.384c-19.456-26.112-42.496-49.152-68.608-68.608z m-371.712 508.928l-79.36 79.36-68.608-68.608 79.36-79.36c18.944 26.624 41.984 49.664 68.608 68.608z m234.496 56.32v113.152h-96.768v-112.64c15.36 2.56 31.232 3.584 47.104 3.584 16.896 0 33.792-1.536 49.664-4.096z m376.32-359.936v96.768h-114.176c2.56-15.872 3.584-32.256 3.584-48.64s-1.024-32.768-3.584-48.64l114.176 0.512z m-171.008 233.984l80.384 80.384-68.608 68.608-79.872-80.384c26.112-19.456 49.152-42.496 68.096-68.608z"
          fill="#f4ea2a" p-id="1831"></path>
    </svg>

    <svg
        v-else
        t="1765611582809" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
        p-id="1602" width="25" height="25">
      <path
          d="M757.5 721.2c-192.3 0-348.2-155.9-348.2-348.2 0-77 25-148.1 67.3-205.7-159.2 32-279.1 172.7-279.1 341.3 0 192.3 155.9 348.2 348.2 348.2 115.3 0 217.6-56.1 280.9-142.5-22.4 4.5-45.4 6.9-69.1 6.9z"
          fill="#9d03f4" p-id="1603"></path>
      <path
          d="M598 376.5c4.3 4.2 6.2 10.2 5.2 16.1l-6 34.8c-2.5 14.8 13 26.1 26.3 19.1l31.3-16.4c5.3-2.8 11.6-2.8 16.9 0l31.3 16.4c13.3 7 28.9-4.3 26.3-19.1l-6-34.8c-1-5.9 0.9-11.9 5.2-16.1l25.3-24.7c10.8-10.5 4.8-28.8-10-30.9l-35-5.1c-5.9-0.9-11-4.6-13.7-9.9l-15.6-31.7c-6.7-13.5-25.9-13.5-32.5 0L631.4 306c-2.6 5.4-7.7 9.1-13.7 9.9l-35 5.1c-14.9 2.2-20.8 20.4-10 30.9l25.3 24.6z m142.3 114.6l-7.5 15.1c-1.3 2.6-3.7 4.3-6.5 4.7l-16.7 2.4c-7.1 1-10 9.8-4.8 14.8l12.1 11.8c2 2 3 4.9 2.5 7.7l-2.9 16.6c-1.2 7.1 6.2 12.5 12.6 9.1l15-7.9c2.5-1.3 5.5-1.3 8.1 0l15 7.9c6.4 3.3 13.8-2.1 12.6-9.1l-2.9-16.6c-0.5-2.8 0.5-5.7 2.5-7.7l12.1-11.8c5.1-5 2.3-13.8-4.8-14.8l-16.7-2.4c-2.8-0.4-5.3-2.2-6.5-4.7l-7.5-15.1c-3.3-6.4-12.5-6.4-15.7 0z"
          fill="#9d03f4" p-id="1604"></path>
    </svg>
  </div>
</template>

<script setup lang="ts">

import {useTheme} from 'vuetify'
import {onMounted, watch} from 'vue'

const theme = useTheme()

// 更新自定义元素主题的函数
const updateCustomTheme = (isDark: boolean) => {
  const root = document.documentElement
  if (isDark) {
    root.setAttribute('data-theme', 'dark')
  } else {
    root.removeAttribute('data-theme')
  }
}

// 初始化主题状态
onMounted(() => {
  updateCustomTheme(theme.global.current.value.dark)
})

// 监听主题变化（以防其他地方也切换了主题）
watch(() => theme.global.current.value.dark, (isDark) => {
  updateCustomTheme(isDark)
})

const toggleDarkMode = () => {
  // 根据当前主题状态切换
  const isDark = theme.global.current.value.dark
  const newTheme = isDark ? 'light' : 'dark'
  theme.global.name.value = newTheme
  // updateCustomTheme 会通过 watch 自动调用
}
</script>

<style scoped>
#theme-ball {
//background-color: rgba(255, 195, 0, 0.99); height: 25px; width: 25px; z-index: 1000; border-radius: 50%; justify-content: center; align-items: center;
}

.icon:hover {
  animation: ease-in;
}
</style>