<template>
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
</template>
<script setup lang="ts">
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
  //visibility: hidden;
  width: 200px;
  height: 40px;
  display: grid;
  grid-template-columns:0 1fr 1fr;
  //column-gap: 10px;
  user-select: none; /* 禁止选中文字 */
  background-color: rgba(89, 89, 89, 0.1);
  backdrop-filter: blur(30px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: rgba(14, 14, 14, 0.19) 0 6px 15px 0;
  border-radius: 16px;
  color: rgb(128, 128, 128);

  .outer-box {
    padding-top: 3px;
    padding-bottom: 3px;

    .normal-btn-box {
      width: 100px;
      height: 30px;
      line-height: 34px;
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
    height: 34px;
    z-index: -1;

    transition: transform 0.5s cubic-bezier(0.42, 0, 0.31, 1.39);
  }
}
</style>