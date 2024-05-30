import { createStore } from "vuex";
import mutations from "./mutations";
import actions from "./actions";

export const store = createStore({
  state: {
    user: {},
    item: {},
    spinner: false,
    list:[],
  },
  getters: {
    fetchedAsk(state) {
      return state.ask;
    },
    fetchedItem(state){
      return state.item;
    },
    loadingStatus(state){
      return state.spinner;
    }
  },
  mutations,
  actions,
});
