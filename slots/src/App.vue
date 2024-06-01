<template>
  <div>
    <div>
      <ul>
        <app-item v-for="(item, index) in appItems" :key="index">
          {{ item }}
        </app-item>
      </ul>
    </div>
  </div>
</template>

<script>
import AppItem from "./components/AppItem.vue";

export default {
  components: {
    AppItem,
  },
  data() {
    return {
      appItems: ["1", "2", "3", "4", "5"],
    };
  },
};
</script>

<style scoped></style>
