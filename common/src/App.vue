<template>
  <div>
    <app-header :title="appTitle"></app-header>
    <app-content :items="items" @renew="renewItems"></app-content>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppContent from "./components/AppContent.vue";
export default {
  name: "App",
  components: {
    AppHeader,
    AppContent,
  },
  data() {
    return {
      appTitle: "Common Approach",
      items: [10, 20, 30],
    };
  },
  methods: {
    renewItems() {
      this.items = [40, 50, 60];
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
