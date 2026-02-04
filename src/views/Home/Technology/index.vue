<template>
  <div v-if="cardType=='list'">
    list
  </div>

  <div id="waterFallRoot" v-if="cardType=='card'">
    card
    <!--隐藏card 用于测量每个卡片的高度-->
    <div id="hidden-card-list"
         class="hidden-card-list"
         ref="hiddenEle">
      <WaterFall v-for="item in mockData"
                 :key="item.id"
                 :data-id="item.id"
                 :card-item="item"

                 style="width: 200px"/>
    </div>
    <div id="card-list" ref="cardList">
      <TransitionGroup
          v-for="(preCol, colIndex) in fourPieceIdList"
          :key="colIndex"
          name="fade-up"
          tag="div"
          class="pre-colum"
      >
        <WaterFall
            v-for="(e,index) in preCol"
            :key="e"
            :card-item="mockData[e]"
            :style="{ animationDelay: `${e * 0.08}s` }"
        />
      </TransitionGroup>
    </div>
  </div>
</template>
<script setup lang="ts">
import WaterFall from "@/components/TechnologyCompo/WaterfallCard/index.vue"
import {mockCards} from "@/tools/mockedData.ts";
import {getCurrentInstance, nextTick, onMounted, ref, watch} from "vue";

const hiddenEle = ref<HTMLElement | null>(null)
const cardList = ref<HTMLElement | null>(null)
const mockData = ref(mockCards);
const fourPieceIdList = ref([[], [], [], []]);
const totalHListPreColum = ref([{id: 0, h: 0}, {id: 1, h: 0}, {id: 2, h: 0}, {id: 3, h: 0}]);
// const columnCount = ref(4)  // 动态列数


import {storeToRefs} from 'pinia'
//引入元素状态store
import {elementStatusStore} from "@/stores/elementStatusStore.ts"
//storeToRefs解构，使cardType保持响应性
const store = elementStatusStore()
const {cardType} = storeToRefs(store)

// const cardType = ref("card")
// const {emitter} = getCurrentInstance()!.appContext.config.globalProperties;
// emitter.on('handleShowToggle', (data) => {
//   cardType.value = data
//   console.log(cardType.value)
// });
onMounted(() => {
  calcHeight();
})
watch(cardType, async () => {
  if (cardType.value === 'card') {
    await calcHeight();
  }
});
const calcHeight = async () => {
  //等待页面渲染
  await nextTick();
  await nextTick();
  await nextTick();
  // initList();
  const eleList = hiddenEle.value;
  //数组为空则直接返回
  if (!eleList) return
  //拿一下元素的id-height串
  // noinspection TypeScriptUnresolvedReference
  const hList = Array.from(eleList.children).map((c, index) => {
    return {
      id: index,
      h: (c as HTMLElement).getBoundingClientRect().height
    }
  })
  //贪心算法重分配
  hList.map(c => {
    const lowId = getMin(totalHListPreColum.value);
    fourPieceIdList.value[lowId].push(c.id);
    totalHListPreColum.value[lowId].h = totalHListPreColum.value[lowId].h + c.h;
  })
  //删除计算高度的节点
  document.getElementById("waterFallRoot")?.removeChild(document.body.getElementsByClassName("hidden-card-list")[0])
  console.log(`fourPieceIdList:`)
  console.log(fourPieceIdList.value)
  console.log(`totalHListPreColum`)
  console.log(totalHListPreColum.value)
}

// const updateColum = () => {
//   const listEle = cardList.value;
//   const width = (listEle as HTMLElement).getBoundingClientRect().width;
//   const cardWidth = 230
//   columnCount.value = Math.max(1, Math.floor(width / cardWidth))
// }

//获取最矮元素列，即按照h升序排序
const getMin = (totalHListPreColum: Array<any>) => {
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
// 初始化列结构
// const initList = () => {
//   fourPieceIdList.value = Array.from({length: columnCount.value}, () => [])
//   totalHListPreColum.value = Array.from({length: columnCount.value}, (_, i) => ({
//     id: i,
//     h: 0,
//   }))
// }
// watch(cardList.value.getBoundingClientRect().width, async () => {
//   console.log("trigger")
//   updateColum();
// });
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
  /*grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));*/
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 10px;

}

.fade-up-enter-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.fade-up-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-up-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.pre-colum {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
  row-gap: 10px;
  min-width: 0;
}
</style>