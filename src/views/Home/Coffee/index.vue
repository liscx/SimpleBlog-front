<template>
  <div id="hidden-card-list"
       ref="hiddenEle"
  >

    <WaterFall v-for="item in mockData"
               :key="item.id"
               :data-id="item.id"
               :card-item="item"
               style="width: 200px"/>
  </div>

</template>
<script setup lang="ts">
import WaterFall from "@/components/WaterfallCard/index.vue"
import {mockCards} from "@/tools/mockedData.ts";
import {nextTick, onMounted, ref} from "vue";

const hiddenEle = ref<HTMLElement | null>(null)
const mockData = ref(mockCards);
// const fourPieceIdList = [4];
onMounted(() => {
  calcHeight();

})

const calcHeight = async () => {
  //等待页面渲染
  await nextTick();
  const eleList = hiddenEle.value;
  //数组为空则直接返回
  if (!eleList) return
  //拿一下id-height串
  const hList = Array.from(eleList.children).map(c => {
    return {
      id: (c as HTMLElement).dataset.id,
      h: (c as HTMLElement).getBoundingClientRect().height
    }
  })
  console.log(hList)
}

</script>


<style scoped >
#hidden-card-list {
  width: 100%;
  height: 100%;

  visibility: hidden;
  position: absolute;
  left: -9999px;
  top: -9999px;
}
</style>