<template>
  <div class="card-item">
    <span style="font-size: 10px">{{ props.cardItem.id }}</span>
    <br>
    <span style="font-size: 15px">{{ props.cardItem.title }}</span>
    <br>
    <span style="font-size: 22px">{{ props.cardItem.desc }}</span>
  </div>
</template>
<script setup lang="ts">
import {onMounted} from "vue";

const props = defineProps<{
  cardItem: {
    id: number,
    title: string,
    desc: string
  }
}>()
onMounted(()=>{
  console.log(props.cardItem)
  
})
</script>


<style scoped >
.card-item {
  height: auto;
  background-color: lightgray;
  animation: card-fade-in 1s cubic-bezier(0.68, -0.25, 0.53, 1.38) both;
}

/* 瀑布式延迟：同一列中的第 N 个卡片稍晚一点出现 */


@keyframes card-fade-in {
  from {
    opacity: 0;
    transform: translateY(16px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>