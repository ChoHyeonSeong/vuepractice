import { defineStore } from 'pinia';

export const useLoginStore = defineStore('login', {
  state: () => ({ username: '' }),
  getters: {
    isLogin(state) {
      return state.username !== '';
    },
  },
  actions: {
    setUsername(username) {
      this.username = username;
    },
    clearUsername() {
      this.username = '';
    },
  },
});
