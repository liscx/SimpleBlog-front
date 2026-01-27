<template>
  <div class="main-card">
    <div class="card-img">

    </div>
    <div class="card-info">
  
      <span class="first-title">
      这里十个字这里十个字abcdef==*.//  
      </span>
      <br>
      <span class="second-title">
      占位符占位符占位
        </span>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.main-card {
  width: 100%;
  height: 280px;
  border-radius: 10px;
  box-shadow: var(--card-shadow-color) 5px 5px 6px 1px;

  display: grid;
  grid-template-rows: 4fr 5fr;


  .card-img {
    //background-color: #ffccd6;
    width: 100%;
    height: 100%;
    border-radius: 10px 10px 0 0;
    //background-color: gray;
  }

  .card-info {
    width: 100%;
    padding: 0 10px;
    text-align: center;

    .first-title {
      width: 100%;
      font-size: 16px;
      font-weight: 700;
    }

    .second-title {
      font-size: 14px;
      color: lightgray;
    }
  }
}

</style>