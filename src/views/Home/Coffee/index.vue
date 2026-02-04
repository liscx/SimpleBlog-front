<template>
  <div class="main-box">
    <div class="head-box stick">
      <switchBtn/>
    </div>
    <div class="info-box" v-if="cardType==='card'">
      <div class="card-box">
        <coffeeCard v-for="item in 4"/>
      </div>
    </div>
    <div v-if="cardType=='list'">
      list Model
    </div>
  </div>
</template>

<script setup lang="ts">

import CoffeeCard from "@/components/CoffeeCompo/CoffeeCard/index.vue"
import switchBtn from "@/components/CoffeeCompo/RepoetOrProgramSwitch/index.vue"
import {getCurrentInstance, ref} from "vue";
import {storeToRefs} from 'pinia'
//引入元素状态store
import {elementStatusStore} from "@/stores/elementStatusStore.ts"
//storeToRefs解构，使cardType保持响应性
const store = elementStatusStore()
const {cardType} = storeToRefs(store)
//弃用emitt总线
// const {emitter} = getCurrentInstance()!.appContext.config.globalProperties;
// emitter.on('handleShowToggle', (data: any) => {
//   cardType.value = data
//   console.log(cardType.value)
// });

</script>


<style scoped lang="scss">


.stick {
  position: sticky;
  top: 15px;
  align-self: flex-start;

}

.main-box {
  width: 100%;
  height: 100%;

  .info-box {
    padding-top: 10px;
    //padding-right: 10px;

    .card-box {
      width: 100%;
      display: grid;
      justify-items: center;
      grid-template-columns: 1fr 1fr 1fr;
      column-gap: 20px;
      row-gap: 20px;
    }
  }
}

.head-box {
  //background-color: var(--v-theme-background);
  //box-shadow: 10px 10px 10px 10px white;
  //padding-top: 20px;
  padding-bottom: 10px;
  margin-bottom: 10px;
  z-index: 100;

}

[data-theme='light'] .head-box {
  background-color: white;
  border-bottom: 1px solid #e7e7e7;
  box-shadow: 0px -20px 0px 20px white;
}


[data-theme='dark'] .head-box {
  background-color: #010409FF;
  border-bottom: 1px solid #3D444DFF;
  box-shadow: 0px -20px 0px 20px #010409FF;
}
</style>