import Vue from "vue";
import App from './App.vue'
import Router from "vue-router";

import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Components from "./views/Components.vue";

import Home from "./views/Home.vue";
import Schedule from "./views/Schedule.vue";
import Travel from "./views/Travel.vue";
import Housing from "./views/Housing.vue";
import GuessThatPhoto from "./views/GuessThatPhoto.vue";
import RSVP from "./views/RSVP.vue";

import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";

Vue.use(Router);

const router = new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "home",
      components: {
        header: AppHeader,
        default: Home,
        footer: AppFooter
      },
      meta: {
        requiresFullAuth: true
      }
    },
    {
      path: "/schedule",
      name: "schedule",
      components: {
        header: AppHeader,
        default: Schedule,
        footer: AppFooter
      }
    },
    {
      path: "/travel",
      name: "travel",
      components: {
        header: AppHeader,
        default: Travel,
        footer: AppFooter
      }
    },
    {
      path: "/housing",
      name: "housing",
      components: {
        header: AppHeader,
        default: Housing,
        footer: AppFooter
      }
    },
    {
      path: "/guess-that-photo",
      name: "guess-that-photo",
      components: {
        header: AppHeader,
        default: GuessThatPhoto,
        footer: AppFooter
      }
    },
    {
      path: "/rsvp",
      name: "rsvp",
      components: {
        header: AppHeader,
        default: RSVP,
        footer: AppFooter
      }
    },
    {
      path: "/login",
      name: "login",
      components: {
        default: Login,
      }
    },
    {
      path: "/logout",
      name: "logout",
      components: {
        header: AppHeader,
        default: Logout,
        footer: AppFooter
      }
    },
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});

router.beforeEach((to, from, next) => {
  // if (to.meta.requiresAuth) {
  if (to.name !== 'login') {
    if (localStorage.password !== 'wedding') next('/login')
    else next()
  } else next()
})
export default router
