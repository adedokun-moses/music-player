// stores/users.js
import { defineStore } from 'pinia'
// Import axios to make HTTP requests
//import axios from "axios"

export const useUserStore = defineStore({
    state: () => ({
        count: 19
    }),
    /* getters: {},
    actions: {
        increase(){
            count.value++
        },
       sencrease () {
            count.value--
        }

    }, */
})