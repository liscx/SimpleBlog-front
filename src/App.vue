<template>
  <v-app>
    <head>
      <!--  禁止缩放页面-->
      <meta name="viewport" content="width=device-width,initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
      <title></title>
    </head>
    <v-main style="width: 100%;height: 100%;">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">


</script>

<style>
:root {
  /* 自定义主题颜色变量 - 默认 light 模式 */
  --custom-button-color: #f4ea2a; /* 黄色 */
  --custom-button-hover-color: #f0d800; /* 稍深的黄色 */
}

[data-theme="dark"] {
  /* dark 模式下的颜色 */
  --custom-button-color: #ff69b4; /* 粉色 */
  --custom-button-hover-color: #ff1493; /* 稍深的粉色 */
}
</style>
