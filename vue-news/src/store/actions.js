import {
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchUserInfo,
} from "../api/index.js";

export default {
  FETCH_NEWS({ commit }) {
    fetchNewsList()
      .then(({ data }) => {
        console.log();
        commit("SET_NEWS", data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  FETCH_ASK({ commit }) {
    fetchAskList()
      .then(({ data }) => {
        console.log(data);
        commit("SET_ASK", data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  FETCH_JOBS({ commit }) {
    fetchJobsList()
      .then(({ data }) => {
        console.log(data);
        commit("SET_JOBS", data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
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
};
