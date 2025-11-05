<template>
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
      userName
    </v-card-title>

    <v-card-subtitle>
      personal introduction
    </v-card-subtitle>

    <v-card-actions>
      whats me?

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
          if you want to introduce yourself.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
  <br>
  <v-tabs
      direction="vertical"
      slider-color="primary"
      spaced="start"
  >
    <v-tab
        v-for="tab in example2"
        :key="tab.key"
        :prepend-icon="tab.icon"
        :text="tab.key"
        spaced="start"
        width="100%"
    ></v-tab>
  </v-tabs>
</template>
<script setup lang="ts">

import {ref} from 'vue'

const show = ref(false)
const example2 = [
  {
    key: "Profile",
    icon: "",
  },
  {
    key: "Settings",
    icon: ""
  },
  {
    key: "Security",
    icon: ""
  },
  {
    key: "Compliance",
    icon: ""
  },
  {
    key: "Statistics",
    icon: ""
  },]
</script>


<style scoped>
::v-deep(.v-tab.v-tab.v-btn){
  height: 30px;
  
}
</style>