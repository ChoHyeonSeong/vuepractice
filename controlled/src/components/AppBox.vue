<template>
  <div>
    <input type="checkbox" :value="appValue" @click="toggleCheck" />
  </div>
</template>

<script>
export default {
  props: ["appValue"],
  methods: {
    toggleCheck() {
      this.$emit("input",!this.value);
    },
  },
};
</script>

<style scoped></style>
