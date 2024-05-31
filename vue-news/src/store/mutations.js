export default {
  SET_USER(state, data) {
    state.user = data;
  },
  SET_ITEM(state, data) {
    state.item = data;
  },
  SET_SPINNER(state, data) {
    state.spinner = data;
  },
  SET_LIST(state, data) {
    state.list = data;
  },
  START_SPINNER(state) {
    state.spinner = true;
  },
  END_SPINNER(state) {
    state.spinner = false;
  },
};
