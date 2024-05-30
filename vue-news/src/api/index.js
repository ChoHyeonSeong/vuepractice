import axios from "axios";

// api 주소
// https://github.com/tastejs/hacker-news-pwas/blob/master/docs/api.md

// 1. HTTP Request & Response 와 관련된 기본 설정
const config = {
  baseUrl: "https://api.hnpwa.com/v0/",
};

// 2. API 함수들을 정리

function fetchList(pagename){
  return axios.get(`${config.baseUrl}${pagename}/1.json`);
}

function fetchUserInfo(userId) {
  return axios.get(`${config.baseUrl}user/${userId}.json`);
}
function fetchItemInfo(itemId) {
  return axios.get(`${config.baseUrl}item/${itemId}.json`);
}

export {
  fetchUserInfo,
  fetchItemInfo,
  fetchList,
};
