<template>
  <div class="main-box">
    <div class="head-box stick">

      <switchBtn/>

    </div>
    <div class="info-box">
      <div class="card-box">
        <coffeeCard v-for="item in 4"/>
      </div>
      <!--      <div class="table-box">-->
      <!--        <CoffeeTable/>-->
      <!--      </div>-->
    </div>
  </div>
</template>

<script setup lang="ts">
import CoffeeCard from "@/components/CoffeeCompo/CoffeeCard/index.vue"
import switchBtn from "@/components/CoffeeCompo/RepoetOrProgramSwitch/index.vue"

</script>


<style scoped>


.stick {
  position: sticky;
  top: 20px;
  align-self: flex-start;
}


.main-box {
  width: 100%;
  height: 100%;


  .info-box {
    padding-top: 10px;

    .card-box {
      width: 100%;
      display: grid;
      justify-items: center;
      grid-template-columns: 1fr 1fr 1fr;
      column-gap: 20px;
      row-gap: 20px;
    }
  }
}
</style>