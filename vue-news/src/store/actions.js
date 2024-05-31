import {
  fetchList,
  fetchUserInfo,
  fetchItemInfo,
} from "../api/index.js";

export default {
  async FETCH_USER({ commit }, userId) {
    const response = await fetchUserInfo(userId);
    commit("SET_USER", response.data);
  },
  async FETCH_ITEM({ commit }, itemId) {
    const response = await fetchItemInfo(itemId);
    commit("SET_ITEM", response.data);
  },
  async FETCH_LIST({ commit }, pageName) {
    const response =  await fetchList(pageName);
    commit("SET_LIST", response.data);
    return response;
  },
};
