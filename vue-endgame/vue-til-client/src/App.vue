<template>
  <div>
    <til-header></til-header>
    <router-view></router-view>
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

<style scoped></style>
