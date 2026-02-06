<template>
  <div>
    <div v-if="showType=='card'">
      <!--切换到list模式-->
      <div @click="handleToggle()" class="demo">
        <oh-icon name="md-toc" :fill="iconColor" scale="1.5" style="padding-bottom: 5px"/>
      </div>
    
    </div>
    <div v-else>
      <!--切换到card模式-->
      <div @click="handleToggle()" class="demo">
        <oh-icon name="md-spacedashboard-outlined" :fill="iconColor"  scale="1.3" style="padding-left: 4px"/>
      </div>
    </div>
  </div>
</template> 
<script setup lang="ts">
import {computed} from "vue";


import {useTheme} from 'vuetify'
const theme = useTheme()

//引入元素状态store
import {elementStatusStore} from "@/stores/elementStatusStore.ts"

const store = elementStatusStore()
const showType = computed(() => store.cardType)
const iconColor = computed(() => theme.global.current.value.dark ? 'white' : 'black')
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
  width: 30px;
  height: 25px;
  font-weight: 700;
  line-height: 25px;
  //background-color: green;
}
</style>