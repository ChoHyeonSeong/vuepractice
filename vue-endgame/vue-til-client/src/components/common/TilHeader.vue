<template>
  <div>
    <header>
      <div>
        <router-link :to="logoLink" class="logo">
          TIL
          <span v-if="isUserLogin">by {{ loginStore.username }}</span>
        </router-link>
      </div>
      <div class="navigations">
        <template v-if="isUserLogin">
          <span class="username">{{ loginStore.username }}</span>
          <a href="javascript:;" @click="logoutUser" class="logout-button"
            >로그아웃</a
          >
        </template>
        <template v-else>
          <router-link to="/login">로그인</router-link>
          <router-link to="/signup">회원가입</router-link>
        </template>
      </div>
    </header>
  </div>
</template>

<script>
import { useLoginStore } from '@/store/useLoginStore';
import { mapStores } from 'pinia';
import { deleteCookie } from '@/utils/cookies';

export default {
  computed: {
    ...mapStores(useLoginStore),
    isUserLogin() {
      return this.loginStore.isLogin;
    },
    logoLink() {
      return this.loginStore.isLogin ? '/main' : '/login';
    },
  },
  methods: {
    logoutUser() {
      this.loginStore.clearUsername();
      this.loginStore.clearToken();
      deleteCookie('til_auth');
      deleteCookie('til_user');
      this.$router.push('/login');
    },
  },
};
</script>

<style scoped>
.username {
  color: white;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #927dfc;
  z-index: 2;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.05);
}
a {
  color: #dedede;
  font-size: 18px;
}
a.logo {
  font-size: 30px;
  font-weight: 900;
  color: white;
}
.logo > span {
  font-size: 14px;
  font-weight: normal;
}
.navigations a {
  margin-left: 10px;
}
.fixed {
  position: fixed;
  top: 0;
  width: 100%;
}
.logout-button {
  font-size: 14px;
}
a.router-link-exact-active {
  color: white;
  font-weight: bold;
}
</style>
