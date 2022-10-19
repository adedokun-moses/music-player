// stores/users.js
import { defineStore } from 'pinia'

// Import axios to make HTTP requests

import axios from 'axios'





export const useUserStore = defineStore('musicstore', {
    state: () =>   ({
        users: [  ],
        
    }),

    getters: {
        getUsers(state) {
            return state.users
        } 
    },

    actions: {
       async fetchUsers() {
            try {
                const data = await axios.get('https://jsonplaceholder.typicode.com/users')
                this.users = data.data
                console.log(this.users)
            }
            catch (error) {
                alert(error)
                console.log(error)
            }
        } 
    },
})




