import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    userInfo: {
      name: '',
      role: ''
    }
  }),
  
  actions: {
    setUserInfo(info) {
      this.userInfo = info
    },
    clearUserInfo() {
      this.userInfo = {
        name: '',
        role: ''
      }
    }
  }
})