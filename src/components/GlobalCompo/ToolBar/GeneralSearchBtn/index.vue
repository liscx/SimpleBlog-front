<template>
  <div class="main-box">
    <div class="search-box">
      <span class="keybBoard">Ctrl</span>+<span class="keybBoard">K</span>
    </div>
    <div>
      <oh-icon name="io-search-sharp" :fill="iconColor" scale="1.4" class="search-icon"/>
    </div>
  </div>
</template>
<script setup lang="ts">
import {computed} from "vue";
import {useTheme} from 'vuetify'

const theme = useTheme()
const iconColor = computed(() => theme.global.current.value.dark ? 'white' : 'black')
</script>


<style scoped lang="scss">
.main-box {
  display: grid;
  grid-template-columns: 6fr 1fr;
  height: 40px;
  width: 130px;
  align-items: center;
  column-gap: 3px;
  text-align: center;
  padding-top: 2px;
  font-size: 12px;
  color: darkgray;
  padding-bottom: 4px;
}

.search-box {
  border: var(--search-box-border);
  border-radius: 5px;
  //padding-bottom: 4px;
  //margin-top: 3px;
}

.search-icon {
  padding: 3px 5px 2px 3px;
}

.keybBoard {
  font-family: "Microsoft JhengHei UI",serif;
  font-size: 15px;
  //border: var(--card-border);
}
</style>