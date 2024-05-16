<template>
  <div>
    <form action="" @submit.prevent="submitForm">
      <div>
        <label for="userId">ID:</label>
        <input type="text" v-model="userId">
      </div>
      <div>
        <label for="userPw">PW:</label>
        <input type="password" v-model="userPw">
      </div>
      <button type="submit">로그인</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue';

export default {
  setup() {
    var userId = ref('');
    var userPw = ref('');

    var submitForm = () => {
      const data = {
        userId: userId.value,
        userPw: userPw.value,
      };
      axios.post('https://jsonplaceholder.typicode.com/users/', data)
        .then(response => {
          console.log(response)
        });
    }

    return { userId, userPw, submitForm }
  },
  /*
  data() {
    return {
      userId: '',
      userPw: '',
    }
  },
  methods: {
    submitForm() {

      const data = {
        userId: this.userId,
        userPw: this.userPw,
      };
      axios.post('https://jsonplaceholder.typicode.com/users/', data)
        .then(response => {
          console.log(response)
        });
      console.log('제출됨');
    }
  }
*/
}
</script>

<style scoped></style>