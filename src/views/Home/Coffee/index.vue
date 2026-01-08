<template>
  <div class="main-box">
    <div class="switch-btn-box">
      <div @click="updateSwitchType('record')"
           :class="currentSwitchType==='record'?'active':''" class="normal-btn-box">咖啡豆记录
      </div>

      <div @click="updateSwitchType( 'program')"
           :class="currentSwitchType==='program'?'active':''" class="normal-btn-box">冲煮方案
      </div>
    </div>
    <div class="info-box">
      <div class="card-box">
        <coffeeCard/>
      </div>
      <div class="table-box">
        <CoffeeTable/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CoffeeCard from "@/components/Coffee/CoffeeCard/index.vue"
import CoffeeTable from "@/components/Coffee/CoffeeTable/index.vue"
import {ref, useTemplateRef} from "vue";

const currentSwitchType = ref("record")
defineExpose({
  currentSwitchType
})
const updateSwitchType = (type: string) => {
  console.log("updateSwitchType")
  currentSwitchType.value = type
  console.log("updateSwitchType:" + currentSwitchType.value)
}
</script>


<style scoped>
.switch-btn-box {
  width: 200px;
  height: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10px;

  .normal-btn-box {
    width: 100px;
    height: 30px;
    line-height: 35px;
    text-align: center;
  }

  .active {
    color: white;
    background-color: blue;
    border-radius: 20px
  }
}

</style>