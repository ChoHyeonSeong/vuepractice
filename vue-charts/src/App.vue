<template>
  <div>
    <h1>Chart.js</h1>
    <bar-chart></bar-chart>
    <line-chart :propsdata="charDataSet"></line-chart>
  </div>
</template>

<script>
import BarChart from './components/BarChart.vue';
import LineChart from './components/LineChart.vue';
export default {
  data() {
    return {
      charDataSet: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }],
    }
  },
  components: {
    BarChart,
    LineChart,
  }
}
</script>

<style scoped></style>