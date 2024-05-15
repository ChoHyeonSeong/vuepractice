<template>
  <AppHeader v-bind:appTitle="message"></AppHeader>
</template>

<script>
import AppHeader from './components/AppHeader.vue'

  export default {
    components:{
      AppHeader
    },
    data() {
      return {
        message:'앱 헤더 컴포넌트'
      }
    },
    methods:{
      showAlert(){
        alert('hello')
      }
    }
  }
</script>

<style scoped>

</style>