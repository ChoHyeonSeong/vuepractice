<template>
  <div class="app">
    <til-header></til-header>
    <div class="app-contents">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TilHeader from '@/components/common/TilHeader.vue';
export default {
  components: {
    TilHeader,
  },
};
</script>

<style scoped>
@import './css/reset.css';
@import './css/common.css';
</style>
