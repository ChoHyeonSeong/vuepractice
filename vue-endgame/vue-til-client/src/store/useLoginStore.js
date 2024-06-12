import { loginUser } from '@/api/auth';
import {
  getAuthFromCookie,
  getUserFromCookie,
  saveAuthToCookie,
  saveUserToCookie,
} from '@/utils/cookies';
import { defineStore } from 'pinia';

export const useLoginStore = defineStore('login', {
  state: () => ({
    username: getUserFromCookie() || '',
    token: getAuthFromCookie() || '',
  }),
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
    setToken(token) {
      this.token = token;
    },
    clearToken() {
      this.token = '';
    },
    async login(userData) {
      const { data } = await loginUser(userData);
      console.log(data.user.username);
      this.setToken(data.token);
      this.setUsername(data.user.username);
      saveAuthToCookie(data.token);
      saveUserToCookie(data.user.username);
      return data;
    },
  },
});
