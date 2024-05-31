<template>
    <canvas ref="lineChart" id="lineChart" width="400" height="400"></canvas>
</template>

<script>
export default {
    props:['propsdata']
    ,
    mounted() {
        new this.$_Chart(this.$refs.lineChart, {
            type: 'line',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: this.propsdata,
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
}
</script>

<style scoped></style>