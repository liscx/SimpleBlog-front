<template>
  <div id="hidden-card-list"
       ref="hiddenEle">
    <WaterFall v-for="item in mockData"
               :key="item.id"
               :data-id="item.id"
               :card-item="item"
               style="width: 200px"/>
  </div>
  <div id="card-list">
    <div class="pre-colum" v-for="preCol in fourPieceIdList">
      <WaterFall v-for="e in preCol" :key="e" :card-item="mockData[e]"/>
    </div>
  </div>


</template>
<script setup lang="ts">
import WaterFall from "@/components/WaterfallCard/index.vue"
import {mockCards} from "@/tools/mockedData.ts";
import {nextTick, onMounted, ref} from "vue";

const hiddenEle = ref<HTMLElement | null>(null)
const mockData = ref(mockCards);
const fourPieceIdList = [[], [], [], []];
const totalHListPreColum = [{id: 0, h: 0}, {id: 1, h: 0}, {id: 2, h: 0}, {id: 3, h: 0}];

onMounted(() => {
  calcHeight();

})

const calcHeight = async () => {
  //等待页面渲染
  await nextTick();
  const eleList = hiddenEle.value;
  //数组为空则直接返回
  if (!eleList) return
  //拿一下元素的id-height串
  const hList = Array.from(eleList.children).map(c => {
    return {
      id: (c as HTMLElement).dataset.id,
      h: (c as HTMLElement).getBoundingClientRect().height
    }
  })
//hList 均分四列
  hList.map(c => {
    const lowId = getMin(totalHListPreColum);
    fourPieceIdList[lowId].push(c.id);
    totalHListPreColum[lowId].h = totalHListPreColum[lowId].h + c.h;
  })

  console.log(`fourPieceIdList:`)
  console.log(fourPieceIdList)
  console.log(`totalHListPreColum`)
  console.log(totalHListPreColum)
}

//获取最矮元素列，即按照h升序排序
const getMin = (totalHListPreColum: Array) => {
  //copy一份数组，后续调用索引时总是调用更新后的数组的索引
  const copyTotalHListPreColum = [...totalHListPreColum];
  copyTotalHListPreColum.sort((a, b) => {
    //自定义sort规则
    if (a.h > b.h) {
      return 1;
    } else if (a.h < b.h) {
      return -1;
    } else
      return 0;
  })
  return copyTotalHListPreColum[0].id
}

</script>


<style scoped>
#hidden-card-list {
  width: 100%;
  height: 100%;

  visibility: hidden;
  position: absolute;
  left: -9999px;
  top: -9999px;
}

#card-list {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 10px;
}

.pre-colum {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
  row-gap: 5px;
  min-width: 0;
}
</style>