import Vue from "vue";
import App from "./App.vue";
import Router from "vue-router";

import Travel from "./views/Travel.vue";
import GuessThatPhoto from "./views/GuessThatPhoto.vue";
import Gifts from "./views/Gifts.vue";
import RSVP from "./views/RSVP.vue";
import FAQ from "./views/FAQ.vue";
import Schedule from "./views/Schedule.vue";
import Home from "./views/Home.vue";
import AppFooter from "./layout/AppFooter";

// Weekend
import AppHeader_W from "./weekend/layout/AppHeader";
import Housing_W from "./weekend/views/Housing.vue";

// Day-Of
import AppHeader_C from "./dayof/layout/AppHeader";
import Housing_C from "./dayof/views/Housing.vue";

import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";

Vue.use(Router);

const router = new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/home-w",
      name: "home-w",
      components: {
        header: AppHeader_W,
        default: Home,
        footer: AppFooter,
      },
      meta: {
        wholeWeekend: true,
      },
    },
    {
      path: "/schedule-w",
      name: "schedule-w",
      components: {
        header: AppHeader_W,
        default: Schedule,
        footer: AppFooter,
      },
      meta: {
        wholeWeekend: true,
      },
    },
    {
      path: "/travel-w",
      name: "travel-w",
      components: {
        header: AppHeader_W,
        default: Travel,
        footer: AppFooter,
      },
      meta: {
        wholeWeekend: true,
      },
    },
    {
      path: "/housing-w",
      name: "housing-w",
      components: {
        header: AppHeader_W,
        default: Housing_W,
        footer: AppFooter,
      },
      meta: {
        wholeWeekend: true,
      },
    },
    {
      path: "/rsvp-w",
      name: "rsvp-w",
      components: {
        header: AppHeader_W,
        default: RSVP,
        footer: AppFooter,
      },
      meta: {
        wholeWeekend: true,
      },
    },
    {
      path: "/faq-w",
      name: "faq-w",
      components: {
        header: AppHeader_W,
        default: FAQ,
        footer: AppFooter,
      },
      meta: {
        wholeWeekend: true,
      },
    },
    {
      path: "/faq-c",
      name: "faq-c",
      components: {
        header: AppHeader_C,
        default: FAQ,
        footer: AppFooter,
      },
    },
    {
      path: "/guess-that-photo-w",
      name: "guess-that-photo-w",
      components: {
        header: AppHeader_W,
        default: GuessThatPhoto,
        footer: AppFooter,
      },
      meta: {
        wholeWeekend: true,
      },
    },
    {
      path: "/gifts-w",
      name: "gifts-w",
      components: {
        header: AppHeader_W,
        default: Gifts,
        footer: AppFooter,
      },
      meta: {
        wholeWeekend: true,
      },
    },
    {
      path: "/gifts-c",
      name: "gifts-c",
      components: {
        header: AppHeader_C,
        default: Gifts,
        footer: AppFooter,
      },
    },
    {
      path: "/home-c",
      name: "home",
      components: {
        header: AppHeader_C,
        default: Home,
        footer: AppFooter,
      },
      meta: {
        wholeWeekend: false,
      },
    },
    {
      path: "/schedule-c",
      name: "schedule",
      components: {
        header: AppHeader_C,
        default: Schedule,
        footer: AppFooter,
      },
      meta: {
        wholeWeekend: false,
      },
    },
    {
      path: "/travel-c",
      name: "travel",
      components: {
        header: AppHeader_C,
        default: Travel,
        footer: AppFooter,
      },
      meta: {
        wholeWeekend: false,
      },
    },
    {
      path: "/housing-c",
      name: "housing",
      components: {
        header: AppHeader_C,
        default: Housing_C,
        footer: AppFooter,
      },
      meta: {
        wholeWeekend: false,
      },
    },
    {
      path: "/rsvp-c",
      name: "rsvp",
      components: {
        header: AppHeader_C,
        default: RSVP,
        footer: AppFooter,
      },
      meta: {
        wholeWeekend: false,
      },
    },
    {
      path: "/guess-that-photo-c",
      name: "guess-that-photo",
      components: {
        header: AppHeader_C,
        default: GuessThatPhoto,
        footer: AppFooter,
      },
      meta: {
        wholeWeekend: false,
      },
    },
    {
      path: "/login",
      name: "login",
      components: {
        default: Login,
      },
    },
    {
      path: "/logout",
      name: "logout",
      components: {
        default: Logout,
      },
    },
  ],
  scrollBehavior: (to) => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
});

router.beforeEach((to, from, next) => {
  if (to.name !== "login") {
    if (
      localStorage.loggedIn !== "true" ||
      to.name === null ||
      (to.meta.wholeWeekend === true && localStorage.wholeWeekend === "false")
    ) {
      next("/login");
    } else next();
  } else next();
});
export default router;
