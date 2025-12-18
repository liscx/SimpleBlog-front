<template>
  <div class="box">
    <div class="box-center">
      <div class="center-left-bar">
       <div class="stick">       
        <userInfoCard c/>
        <RouterBar/>
       </div>

      </div>
      <div class="center">

        <router-view/>

        <span style="color: lightgray">

          a simple blog just introduce myself.
        </span>
      </div>
      <div class="center-right-bar">
        <!--        <weatherCard></weatherCard>-->
      </div>
    </div>

  </div>
</template>


<script setup lang="ts">
import userInfoCard from "@/components/UserInfoCard/index.vue"
import weatherCard from "@/components/WeatherCard/index.vue"
import RouterBar from "@/components/RouterBar/index.vue"

</script>
<style scoped>
.box {
  width: 100%;
  height:auto;
  display: flex;
  justify-content: center;
  background-color: rgb(244, 246, 247);

  .box-center {
    width: 1400px;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    .center-left-bar {
      padding: 10px;
      border-right: 1px solid lightgray;
    }
    .center {
      padding: 20px;
    }
    .center-right-bar {
      padding: 10px;
    }
  }
.stick{
  position: sticky;
  top: 20px;        
  align-self: flex-start; 
  
}
}
</style>