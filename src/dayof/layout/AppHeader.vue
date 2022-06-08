<template>
  <header class="shape-container d-flex nav-padding">
    <div v-if="expanded">
      <base-nav class="navbar-main" transparent expand>
        <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
          <li class="nav-item" v-for="(link, i) in links" :key="i">
            <router-link :to="link.to" class="nav-link">{{
              link.text
            }}</router-link>
          </li>
        </ul>
      </base-nav>
    </div>
    <div v-else>
      <v-app-bar absolute>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title @click.stop="drawer = !drawer"
          >Click Here For Menu</v-toolbar-title
        >
      </v-app-bar>
      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list nav dense>
          <v-list-item-group active-class="deep-purple--text text--accent-4">
            <v-list-item v-for="(link, i) in links" :key="i">
              <router-link :to="link.to" class="nav-link">{{
                link.text
              }}</router-link>
            </v-list-item>
            <!--
          <v-list-item>
          <router-link to="/rsvp-c">
            <span class="btn-inner--icon">
              <i class="ni ni-send mr-2"></i>
            </span>
            <span class="nav-link-inner--text"><b>RSVP</b></span>
          </router-link>
          </v-list-item>
          -->
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </div>
  </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";

export default {
  components: {
    BaseNav,
  },
  data() {
    return {
      drawer: false,
      windowWidth: window.innerWidth,
      links: [
        { to: "/home-c", text: "Home" },
        //{'to': '/schedule-c', 'text': 'Schedule'},
        //{'to': '/travel-c', 'text': 'Travel'},
        //{'to': '/housing-c', 'text': 'Where to Stay'},
        { to: "/guess-that-photo-c", text: "Guess That Photo" },
        { to: "/gifts-c", text: "Gifts/Donations" },
        { to: "/faq-c", text: "FAQ" },
      ],
    };
  },
  computed: {
    expanded() {
      return this.windowWidth > 892;
    },
  },
  methods: {
    handleWindowResize(event) {
      this.windowWidth = event.currentTarget.innerWidth;
    },
  },
  beforeDestroy: function() {
    window.removeEventListener("resize", this.handleWindowResize);
  },
  mounted() {
    window.addEventListener("resize", this.handleWindowResize);
  },
};
</script>
<style>
.nav-padding {
  padding-right: 10rem;
}
</style>
