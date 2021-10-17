import Vue from "vue";
import App from "./App.vue";
import Router from "vue-router";

import Travel from "./views/Travel.vue";
import GuessThatPhoto from "./views/GuessThatPhoto.vue";
import Gifts from "./views/Gifts.vue";

// Weekend
import AppHeader_W from "./weekend/layout/AppHeader";
import AppFooter_W from "./weekend/layout/AppFooter";
import Home_W from "./weekend/views/Home.vue";
import Schedule_W from "./weekend/views/Schedule.vue";
import Housing_W from "./weekend/views/Housing.vue";
import RSVP_W from "./weekend/views/RSVP.vue";
import FAQ_W from "./weekend/views/FAQ.vue";

// Day-Of
import AppHeader_C from "./dayof/layout/AppHeader";
import AppFooter_C from "./dayof/layout/AppFooter";
import Home_C from "./dayof/views/Home.vue";
import Schedule_C from "./dayof/views/Schedule.vue";
import Housing_C from "./dayof/views/Housing.vue";
import RSVP_C from "./dayof/views/RSVP.vue";

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
        default: Home_W,
        footer: AppFooter_W
      },
      meta: {
        wholeWeekend: true
      }
    },
    {
      path: "/schedule-w",
      name: "schedule-w",
      components: {
        header: AppHeader_W,
        default: Schedule_W,
        footer: AppFooter_W
      },
      meta: {
        wholeWeekend: true
      }
    },
    {
      path: "/travel-w",
      name: "travel-w",
      components: {
        header: AppHeader_W,
        default: Travel,
        footer: AppFooter_W
      },
      meta: {
        wholeWeekend: true
      }
    },
    {
      path: "/housing-w",
      name: "housing-w",
      components: {
        header: AppHeader_W,
        default: Housing_W,
        footer: AppFooter_W
      },
      meta: {
        wholeWeekend: true
      }
    },
    {
      path: "/rsvp-w",
      name: "rsvp-w",
      components: {
        header: AppHeader_W,
        default: RSVP_W,
        footer: AppFooter_W
      },
      meta: {
        wholeWeekend: true
      }
    },
    {
      path: "/faq-w",
      name: "faq-w",
      components: {
        header: AppHeader_W,
        default: FAQ_W,
        footer: AppFooter_W
      },
      meta: {
        wholeWeekend: true
      }
    },
    {
      path: "/faq-c",
      name: "faq-c",
      components: {
        header: AppHeader_C,
        default: FAQ_W,
        footer: AppFooter_C
      },
    },
    {
      path: "/guess-that-photo-w",
      name: "guess-that-photo-w",
      components: {
        header: AppHeader_W,
        default: GuessThatPhoto,
        footer: AppFooter_W
      },
      meta: {
        wholeWeekend: true
      }
    },
    {
      path: "/gifts-w",
      name: "gifts-w",
      components: {
        header: AppHeader_W,
        default: Gifts,
        footer: AppFooter_W
      },
      meta: {
        wholeWeekend: true
      }
    },
    {
      path: "/gifts-c",
      name: "gifts-c",
      components: {
        header: AppHeader_C,
        default: Gifts,
        footer: AppFooter_C
      },
    },
    {
      path: "/home-c",
      name: "home",
      components: {
        header: AppHeader_C,
        default: Home_C,
        footer: AppFooter_C
      },
      meta: {
        wholeWeekend: false
      }
    },
    {
      path: "/schedule-c",
      name: "schedule",
      components: {
        header: AppHeader_C,
        default: Schedule_C,
        footer: AppFooter_C
      },
      meta: {
        wholeWeekend: false
      }
    },
    {
      path: "/travel-c",
      name: "travel",
      components: {
        header: AppHeader_C,
        default: Travel,
        footer: AppFooter_C
      },
      meta: {
        wholeWeekend: false
      }
    },
    {
      path: "/housing-c",
      name: "housing",
      components: {
        header: AppHeader_C,
        default: Housing_C,
        footer: AppFooter_C
      },
      meta: {
        wholeWeekend: false
      }
    },
    {
      path: "/rsvp-c",
      name: "rsvp",
      components: {
        header: AppHeader_C,
        default: RSVP_C,
        footer: AppFooter_C
      },
      meta: {
        wholeWeekend: false
      }
    },
    {
      path: "/guess-that-photo-c",
      name: "guess-that-photo",
      components: {
        header: AppHeader_C,
        default: GuessThatPhoto,
        footer: AppFooter_C
      },
      meta: {
        wholeWeekend: false
      }
    },
    {
      path: "/login",
      name: "login",
      components: {
        default: Login
      }
    },
    {
      path: "/logout",
      name: "logout",
      components: {
        default: Logout
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
