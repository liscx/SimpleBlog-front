<template>
  <div class="box">
    <div class="box-center media">
      <div class="center-left-bar">
        <div class="stick">
          <userInfoCard/>
          <RouterBar/>
        </div>

      </div>
      <div class="center">
 
        <router-view/>
      </div>
      <div class="center-right-bar">

        <ThemeToggle class="stick"/>

        <!--        <weatherCard></weatherCard>-->
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
// import toolBar from "@/components/ToolBar/index.vue"
import ThemeToggle from "@/components/ToolBar/ThemeToggle/index.vue"
import userInfoCard from "@/components/UserInfoCard/index.vue"
import weatherCard from "@/components/WeatherCard/index.vue"
import RouterBar from "@/components/RouterBar/index.vue"

</script>

<style scoped>
.box {
  width: 100%;
  height: 1000px;
  display: flex;
  justify-content: center;
  //background-color: rgb(244, 246, 247);

  .box-center {
    width: 1400px;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    padding: 20px;
    .center-left-bar{
      margin-right: 30px;
    }
    .center-right-bar{
      margin-left: 30px;
    }
  }

  .stick {
    position: sticky;
    top: 20px;
    align-self: flex-start;
  }
}

.center-toolBar {
  display: flex;
  justify-content: flex-end;
  height: 20px;

}

@media screen and (max-width: 600px) {
  .media {
    visibility: hidden;
  }
}

</style>