<template>
  <div class="main-box">

    <div class="switch-btn-box stick">
      <div class="bgcBox" ref="bgcBox"/>
      <div class="outer-box">
        <div @click="updateSwitchType('record')"
             :class="currentSwitchType==='record'?'active':''" class="normal-btn-box">咖啡豆记录
        </div>
      </div>

      <div class="outer-box">
        <div @click="updateSwitchType( 'program')"
             :class="currentSwitchType==='program'?'active':''" class="normal-btn-box">
          冲煮方案
        </div>
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
const bgcBox = ref();
defineExpose({
  currentSwitchType,
})
const updateSwitchType = (type: string) => {
  console.log("updateSwitchType")
  currentSwitchType.value = type
  console.log("updateSwitchType:" + currentSwitchType.value)
  if (type == 'record') {
    bgcBox.value.style.transform = " scale(1) translateX(0) scale(1)";
  } else {
    bgcBox.value.style.transform = "translateX(100px)";
  }

}
</script>


<style scoped>
.switch-btn-box {
  width: 200px;
  height: 46px;
  display: grid;
  grid-template-columns:0 1fr 1fr;
  //column-gap: 10px;
  user-select: none; /* 禁止选中文字 */
  background-color: rgba(89, 89, 89, 0.1);
  backdrop-filter: blur(30px);
  border: 0.8px solid rgba(255, 255, 255, 0.1);
  box-shadow: rgba(14, 14, 14, 0.19) 0px 6px 15px 0px;
  border-radius: 16px;
  color: rgb(128, 128, 128);

  .outer-box {
    padding-top: 3px;
    padding-bottom: 3px;

    .normal-btn-box {
      width: 100px;
      height: 30px;
      line-height: 40px;
      text-align: center;
    }

    .active {
      color: white;
      //background-color: #007bff;
      //border-radius: 16px;
      //height: 40px;
    }
  }

  .bgcBox {
    color: white;
    background-color: #007bff;
    width: 100px;
    border-radius: 16px;
    margin-top: 3px;
    height: 40px;
    z-index: -1;

    transition: transform 0.5s cubic-bezier(0.42, 0, 0.31, 1.39);
  }
}

.stick {
  position: sticky;
  top: 20px;
  align-self: flex-start;
}
</style>