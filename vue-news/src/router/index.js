import { createRouter, createWebHistory } from "vue-router";
import NewsView from "../views/NewsView.vue";
import AskView from "../views/AskView.vue";
import JobsView from "../views/JobsView.vue";
import UserView from "../views/UserView.vue";
import ItemView from "../views/ItemView.vue";
import { store } from "../store/index";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/news",
    },
    {
      // path: url 주소
      path: "/news",
      // component: url 주소로 갔을 때 표시될 컴포넌트
      name: "news",
      component: NewsView,
      beforeEnter: (to, from, next) => {
        store.commit("START_SPINNER");
        store.dispatch("FETCH_LIST", to.name)
          .then(() => {
            console.log("fetched");
            //store.commit("END_SPINNER");
            next();
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
    {
      path: "/ask",
      name: "ask",
      component: AskView,
      beforeEnter: (to, from, next) => {
        store.commit("START_SPINNER");
        store.dispatch("FETCH_LIST", to.name)
          .then(() => {
            console.log("fetched");
            //store.commit("END_SPINNER");
            next();
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
    {
      path: "/jobs",
      name: "jobs",
      component: JobsView,
      beforeEnter: (to, from, next) => {
        store.commit("START_SPINNER");
        store.dispatch("FETCH_LIST", to.name)
          .then(() => {
            console.log("fetched");
            //store.commit("END_SPINNER");
            next();
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
    {
      path: "/user/:id",
      component: UserView,
    },
    {
      path: "/item/:id",
      component: ItemView,
    },
  ],
});

export { router };
