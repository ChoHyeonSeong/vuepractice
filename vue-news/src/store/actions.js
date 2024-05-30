import {
  fetchList,
  fetchUserInfo,
  fetchItemInfo,
} from "../api/index.js";

export default {
  FETCH_USER({ commit }, userId) {
    fetchUserInfo(userId)
      .then(({ data }) => {
        console.log(data);
        commit("SET_USER", data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  FETCH_ITEM({ commit }, itemId) {
    fetchItemInfo(itemId)
      .then(({ data }) => {
        console.log(data);
        commit("SET_ITEM", data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  START_SPINNER({ commit }) {
    commit('SET_SPINNER',true);
  },
  END_SPINNER({ commit }) {
    commit('SET_SPINNER',false);
  },
  FETCH_LIST({ commit }, pageName) {
    fetchList(pageName)
      .then(({ data }) => {
        commit("SET_LIST", data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
