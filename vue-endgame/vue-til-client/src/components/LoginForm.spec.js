import { mount } from '@vue/test-utils';
import LoginForm from './LoginForm.vue';

describe('LoginForm.vue', () => {
  test('ID는 이메일 형식이어야 한다', () => {
    const wrapper = mount(LoginForm, {
      data() {
        return {
          username: 'test',
        };
      },
    });
    // expect(wrapper.vm.username).toBe('');
    // const idInput = wrapper.find('#username');
    // console.log(idInput.element.value);
    // console.log(wrapper.vm.isUsernameValid);
    const warningText = wrapper.find('.warning');
    console.log(warningText.html());
    expect(warningText.exists()).toBeTruthy();
  });

  test('ID와 PW가 입력되지 않으면 로그인 버튼이 비활성화 된다', () => {
    const wrapper = mount(LoginForm, {
      data() {
        return {
          username: '',
          password: '',
        };
      },
    });
    const button = wrapper.find('button');
    expect(button.element.disabled).toBeTruthy();
  });
});
