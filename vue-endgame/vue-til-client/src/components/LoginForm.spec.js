import { mount } from '@vue/test-utils';
import LoginForm from './LoginForm.vue';

describe('LoginForm.vue', () => {
  test('컴포넌트가 마운팅되면 화면에 그려져야 한다', () => {
    const instance = mount(LoginForm);
    expect(instance).toBeTruthy();
  });
});
