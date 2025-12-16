<template>
  <div id="card-body">
    <span style="font-size: 10px">{{ props.cardItem.id }}</span>
    <br>
    <span  style="font-size: 15px">{{ props.cardItem.title }}</span>
    <br>
    <span style="font-size: 22px">{{ props.cardItem.desc }}</span>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  cardItem: {
    id: number,
    title: string,
    desc: string
  }

}>()
</script>


<style scoped>
#card-body {
  min-height: 40px;


}
</style>