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
  box-shadow: var(--card-shadow-color);
  background-color: var(--card-bgc-color);
  border: var(--card-border);
  display: grid;
  grid-template-rows: 4fr 5fr;
  transition: all 0.34s cubic-bezier(0.4, 0, 0.2, 1);
  animation: fadeInUp 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55);

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

[data-theme='light'] .main-card:hover {
  transform: translateY(-4px) scale(1.02); /* 向上浮动 4px */
  box-shadow: 0px -9px 14px 1px rgba(211, 211, 211, 0.50);
}
[data-theme='dark'] .main-card:hover {
  transform: translateY(-4px) scale(1.02); /* 向上浮动 4px */

}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}


</style>