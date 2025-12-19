<template>
  <div class="card-item">
    <div class="card-img-box">
      <img src="../../../public/0585f71f7d419634a37b0022865b682a.jpg" class="card-img" :style="{ height: randomHeight + 'px' }">
    </div>
    <div class="font-box">
      <div class="title">{{ props.cardItem.title }}</div>
      <div class="desc">{{ props.cardItem.desc }}</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {onMounted} from "vue";
const baseHeights = [140, 200, 240]
const randomHeight = baseHeights[Math.floor(Math.random() * baseHeights.length)]
const props = defineProps<{
  cardItem: {
    id: number,
    title: string,
    desc: string
  }
}>()
onMounted(() => {
  console.log(props.cardItem)

})
</script>


<style scoped>
.card-item {
  padding: 3px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: flex-start;
  border-radius: 5%;
  //box-shadow: 1px 1px 7px 0px gray;
  height: auto;
  //background-color: lightgray;
  animation: card-fade-in 1s cubic-bezier(0.68, -0.25, 0.53, 1.38) both;

}



.font-box {
  margin: 0 0 10px 0;
  .title {
    font-weight: 700;
  }

  .desc {
    color: GrayText;
  }
}

.card-img-box {
  border-radius: 5% 5% 0 0;
  width: 100%;

}

.card-img {
  border-radius: 5% 5% 0 0;
  width: 100%;
 

}

@keyframes card-fade-in {
  from {
    opacity: 0;
    transform: translateX(200px) scale(0.01) translateY(-200px) scale(1);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>