<template>
  <div class="switch-btn-box stick" ref="switchBox">
    <!--背景滑块-->
    <div class="bgcBox" ref="bgcBox"/>
    <!--循环出表单项-->
    <div class="outer-box" v-for="item in menuList" :key="item.index">
      <div @click="updateSwitchType(item)"
           :class="currentSwitchType===item.key?'active':''" class="normal-btn-box">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {ref, useTemplateRef} from "vue";
import {onMounted} from "vue";


const menuList = [
  {name: "豆子", key: "bean", index: 0},
  {name: "胶囊", key: "Capsule", index: 1},
  {name: "冲煮方案", key: "program", index: 2},
  {name: "咖啡饮品", key: "drink", index: 3},

];
const currentSwitchType = ref(menuList[0]!.key)
const bgcBox = ref();
const switchBox = ref();
defineExpose({
  currentSwitchType,
})


onMounted(() => {
  console.log(menuList.length)
  switchBox.value.style.width = `${menuList.length * 100}px`
  switchBox.value.style.gridTemplateColumns = `0 repeat(${menuList.length},1fr)`
//挂载完成后默认滑块位置
  bgcBox.value.style.transform = "translateX(3px)";
})
const updateSwitchType = async (item: { name: string; key: string; index: number }) => {
  console.log(item.key)
  //首个元素重置到初始位置
  if (item.index === 0) {
    bgcBox.value.style.transform = "translateX(3px)";
  }
  //尾部元素-3px到box内
  else if (item.index == menuList.length - 1) {
    {
      bgcBox.value.style.transform = `translateX(${item.index * 100 - 3}px)`;

    }
  } else {
    bgcBox.value.style.transform = `translateX(${item.index * 100}px)`;
  }
  setTimeout(() => {
    // 等待滑块移开当前元素后将元素设置为常规状态
    currentSwitchType.value = "Transit"
  }, 50);
  setTimeout(() => {
    // 等待滑块移动到对应元素后再添加active效果
    currentSwitchType.value = item.key
  }, 250);
}

</script>


<style scoped lang="scss">
.switch-btn-box {
  //visibility: hidden;
  //width: 400px;
  height: 40px;
  display: grid;
  //grid-template-columns:0 1fr 1fr 1fr 1fr;
  //column-gap: 10px;
  user-select: none;
  /* 禁止选中文字 */

  //box-shadow: rgba(14, 14, 14, 0.19) 0 6px 15px 0;
  border-radius: 16px;
  color: rgb(128, 128, 128);

  .outer-box {
    padding-top: 3px;
    padding-bottom: 3px;

    .normal-btn-box {
      width: 100px;
      height: 34px;
      line-height: 34px;
      text-align: center;

    }

    .active {
      color: white;
      text-decoration: -moz-default-background-color;
      //background-color: #007bff;
      //border-radius: 16px;
      //height: 40px;
    }

  }

  .bgcBox {
    color: white;
    background-color: #007bff;
    width: 100px;
    border-radius: 12px;
    margin-top: 3px;
    margin-bottom: 3px;
    height: 34px;
    z-index: -1;
    transition: transform 0.5s cubic-bezier(0.42, 0, 0.31, 1.39);

  }

}

[data-theme='dark'] .switch-btn-box {
  background-color: rgba(89, 89, 89, 0.1);
  backdrop-filter: blur(30px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  //border计入盒子内
  box-sizing: border-box;
}

[data-theme='light'] .switch-btn-box {
  border-radius: 12px;

}

//menuList第一个元素和最尾元素父类抵消bgcBox的偏移
.switch-btn-box .outer-box:nth-child(2) .normal-btn-box {
  padding-left: 5px;
}

.switch-btn-box .outer-box:last-child .normal-btn-box {
  padding-right: 5px;
}


</style>