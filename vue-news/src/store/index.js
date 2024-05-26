
import { createStore } from 'vuex'
import { fetchNewsList ,fetchAskList,fetchJobsList } from "../api/index.js";


export const store = createStore({
  state:{
    news:[],
    ask: [],
    jobs: [],
  },
  mutations:{
      SET_NEWS(state,data){
          state.news = data;
      },
      SET_ASK(state,data){
          state.ask = data;
      },
      SET_JOBS(state,data){
          state.jobs = data;
      }
  },
  actions:{
    FETCH_NEWS(context){
        fetchNewsList()
        .then((response)=>{
            console.log(response);
            context.commit('SET_NEWS',response.data);
        })
        .catch((error)=>{
            console.log(error);
        });
    },
    FETCH_ASK(context){
        fetchAskList()
        .then((response)=>{
            console.log(response);
            context.commit('SET_ASK',response.data);
        })
        .catch((error)=>{
            console.log(error);
        });

    },
    FETCH_JOBS(context){
        fetchJobsList()
        .then((response)=>{
            console.log(response);
            context.commit('SET_JOBS',response.data);
        })
        .catch((error)=>{
            console.log(error);
        });
    }
  }  
});