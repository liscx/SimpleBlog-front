import {computed, inject, ref} from 'vue'
import {useRoute} from 'vue-router'
import {defineStore} from 'pinia'


export const elementStatusStore = defineStore('elementStatusStore', () => {
    const cardType = ref<string>("card")
    

    function toggle() {
        if (cardType.value === "card") {
            cardType.value = "list"
        } else {
            cardType.value = "card"

        }
    }

    return {cardType, toggle}
})