import axios from 'axios';
import { setInterceptors } from './common/interceptors';

function createInstance() {
  return axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
}
function createInstanceWithAuth(url) {
  const instance = axios.create({
    baseURL: `${process.env.VUE_APP_API_URL}${url}`,
  });
  return setInterceptors(instance);
}

export const instance = createInstance();
const posts = createInstanceWithAuth('posts');

function fetchPosts() {
  return instance.get('posts');
}

function createPost(postData) {
  return instance.post('posts', postData);
}

export { fetchPosts, createPost };
