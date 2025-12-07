<template>
  <v-tabs
      direction="vertical"
      slider-color="primary"
      spaced="start"
  >
    <v-tab
        v-for="tab in leftBar"
        :prepend-icon="tab.icon"
        :text="tab.key"
        spaced="start"
        width="100%"
        @click="handleVtabClick(tab.key)"
    ></v-tab>
    <v-tab
        class="SecTab"
        v-show="secStatus"
        text="Sec"
        spaced="start"
        width="100%"
        @click="handleVtabClick('Security')"
    ></v-tab>

  </v-tabs>
</template>

<script setup lang="ts">
import {useRouter, useRoute} from 'vue-router'
import {ref, onMounted, onUnmounted} from 'vue'

const router = useRouter()
const route = useRoute()

const secStatus = ref(false)
const show = ref(false)
const leftBar = ref([
  {
    key: "Technology",
    icon: "",
  },
  {
    key: "Coffee",
    icon: ""
  },
  {
    key: "Life",
    icon: ""
  },
  {
    key: "Sport",
    icon: ""
  },
  {
    key: "Favorites",
    icon: ""
  },
  {
    key: "Develop",
    icon: ""
  },
])

// 监听用户输入序列
const secretSequence = ref('')
const targetSequence = '**'

const handleKeyPress = (event: KeyboardEvent) => {

  if (event.key.length === 1 && !event.ctrlKey && !event.metaKey && !event.altKey) {
    secretSequence.value += event.key.toLowerCase()


    if (secretSequence.value.length > targetSequence.length) {
      secretSequence.value = secretSequence.value.slice(-targetSequence.length)
    }

    if (secretSequence.value === targetSequence) {
      secStatus.value = true;

      // 切换 security 标签显示状态
      setTimeout(()=>{
        secStatus.value = false;
        console.log(secStatus.value)
      },5000);



      // 重置序列
      secretSequence.value = ''
    }
  }
}
const handleShowAndIgnore = (key: String) => {

  if (key == "Security") {
    return "security-tabs";
  }


}

onMounted(() => {
  window.addEventListener('keypress', handleKeyPress)
})

onUnmounted(() => {
  window.removeEventListener('keypress', handleKeyPress)
})

const handleVtabClick = (key: string) => {
  router.push({
    path: "/home/" + key
  })
}


</script>

<style scoped>
::v-deep(.v-tab.v-tab.v-btn) {
  height: 30px;

}

.SecTab {
 color: rgba(255, 255, 255, 0);
}

.SecTab:hover {
  color:black;
  }


</style>