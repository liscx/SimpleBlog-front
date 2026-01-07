<template>
  <!--  页面左上方用户信息组件-->
  <v-card
      width="100%"
      class="mx-auto"
      max-width="344"
  >
    <v-img
        height="200px"
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        cover
    ></v-img>
    <v-card-title>
      lix
    </v-card-title>
    <v-card-subtitle>
      code farmer.
    </v-card-subtitle>

    <v-card-actions>

      DEEP DIVE
      <v-spacer></v-spacer>

      <v-btn
          :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          @click="show = !show"
      ></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          <span style="font-weight: 700">email:</span>
          lx626159@163.com
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
  <br>

</template>
<script setup lang="ts">
import {ref} from "vue";

const show = ref(false)
</script>


<style scoped>

</style>