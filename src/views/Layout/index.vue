<template>
  <div class="box z-0">
    <div class="box-center media z-2">
      <div class="center-left-bar">
        <div class="stick">
          <userInfoCard/>
          <RouterBar/>
        </div>
      </div>
      <div class="center">
<!--        <toolBar></toolBar>-->
        <router-view/>
      </div>
      <div class="center-right-bar">
        <toolBar></toolBar>
        <!--        <ThemeToggle class="stick"/>
                <VFXToggle/>-->
      </div>
    </div>
<!--    <floatedDownCanvas v-if="seasonType==1" :svg-path="sakuraSvgPath" svg-type="sakura" svg-height="25" svg-width="25"-->
<!--                       svg-num="30"/>-->
<!--    <floatedDownCanvas v-if="seasonType===2" :svg-path="sunflowerSvgPath" svg-type="sunflower" svg-height="35"-->
<!--                       svg-width="35" svg-num="15"/>-->
<!--    <floatedDownCanvas v-if="seasonType===3" :svg-path="leafSvgPath" svg-type="leaf" svg-height="80" svg-width="80"-->
<!--                       svg-num="15" svg-alpha="0.5"/>-->
<!--    <floatedDownCanvas v-if="seasonType===4" :svg-path="snowSvgPath" svg-type="snow" svg-num="55" :svg-speed="2"/>-->
  </div>
</template>

<script setup lang="ts">
import floatedDownCanvas from "@/components/GlobalCompo/FloatedDownCanvas/index.vue"

import ThemeToggle from "@/components/GlobalCompo/ToolBar/ThemeToggle/index.vue"
import VFXToggle from "@/components/GlobalCompo/ToolBar/VFXToggle/index.vue"
import toolBar from "@/components/GlobalCompo/ToolBar/index.vue"

import userInfoCard from "@/components/UserInfoCard/index.vue"
import weatherCard from "@/components/WeatherCard/index.vue"
import RouterBar from "@/components/RouterBar/index.vue"
// 在 Vite 中，使用 ?url 后缀明确获取资源的 URL 路径
import sakuraSvgPath from "@/assets/floatedDown/sakura.svg?url"
import sunflowerSvgPath from "@/assets/floatedDown/sunflower.svg?url"
import leafSvgPath from "@/assets/floatedDown/leaf.svg?url"
import snowSvgPath from "@/assets/floatedDown/snow.svg?url"
import {onMounted, ref} from "vue";
import {useTheme} from "vuetify";

const theme = useTheme()
const seasonType = ref(1);

onMounted(() => {
  // 初始化主题状态
  const now = new Date();
  console.log(now)
  console.log(now.getHours())
  if (now.getHours() > 18 || now.getHours() < 4) {
    theme.global.name.value = "dark"
  } else {
    theme.global.name.value = "light"
  }
  //初始化季节
  switch (now.getMonth()) {
    case 3:
    case 4:
    case 5:
      seasonType.value = 1;//spring
      break;
    case 6:
    case 7:
    case 8:
      seasonType.value = 2;//summer
      break;
    case 9:
    case 10:
    case 11:
      seasonType.value = 3;//autumn
      break;
    case 12:
    case 1:
    case 2:
      seasonType.value = 4;//winter
      break;
  }
  seasonType.value = 4;
})

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

    .center-left-bar {
      margin-right: 30px;
    }

    .center-right-bar {
      margin-left: 30px;
    }
  }

  .stick {
    position: sticky;
    top: 20px;
    align-self: flex-start;
  }
}

.z-0 {
  z-index: 0;
}

.z-2 {
  z-index: 2;
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