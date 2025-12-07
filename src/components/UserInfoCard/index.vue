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
      whats
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

</template>
<script setup lang="ts">

</script>


<style scoped>

</style>