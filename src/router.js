import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Components from "./views/Components.vue";
import Home from "./views/Home.vue";
import Schedule from "./views/Schedule.vue";
import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";
import Register from "./views/Register.vue";
import Profile from "./views/Profile.vue";
import App from './App.vue'

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
      path: "/login",
      name: "login",
      components: {
        header: AppHeader,
        default: Login,
        footer: AppFooter
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
    {
      path: "/register",
      name: "register",
      components: {
        header: AppHeader,
        default: Register,
        footer: AppFooter
      }
    },
    {
      path: "/profile",
      name: "profile",
      components: {
        header: AppHeader,
        default: Profile,
        footer: AppFooter
      }
    }
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
