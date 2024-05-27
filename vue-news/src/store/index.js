import { createStore } from "vuex";
import mutations from "./mutations";
import actions from "./actions";

export const store = createStore({
  state: {
    news: [],
    ask: [],
    jobs: [],
    user: {},
  },
  getters: {
    fetchedAsk(state) {
      return state.ask;
    },
  },
  mutations,
  actions,
});
