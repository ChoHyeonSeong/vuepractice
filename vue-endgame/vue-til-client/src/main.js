import { createApp } from 'vue';
import App from './App.vue';
import router from '@/routes/index';
import { createPinia } from 'pinia';
import { formatDate } from '@/utils/filters';

const pinia = createPinia();
const app = createApp(App);

app.config.globalProperties.$filters = {
  formatDate,
};
app.use(router);
app.use(pinia);
app.mount('#app');
