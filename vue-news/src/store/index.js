import { createStore } from "vuex";
import mutations from "./mutations";
import actions from "./actions";

export const store = createStore({
  state: {
    news: [],
    ask: [],
    jobs: [],
    user: {},
    item: {},
  },
  getters: {
    fetchedAsk(state) {
      return state.ask;
    },
    fetchedItem(state){
      return state.item;
    }
  },
  mutations,
  actions,
});
