<template>
  <header class="shape-container d-flex nav-padding">
    <base-nav class="navbar-main" type=""  transparent expand>

      <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
        <li class="nav-item">
          <router-link to="/home-w" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/schedule-w" class="nav-link">Schedule</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/travel-w" class="nav-link">Travel</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/housing-w" class="nav-link"
            >Where to Stay</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/guess-that-photo-w" class="nav-link"
            >Guess That Photo</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/gifts-w" class="nav-link"
            >Gifts/Donations</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/faq-w" class="nav-link"
            >FAQ/Covid-19</router-link
          >
        </li>
        <!--
                <base-dropdown tag="li" class="nav-item">
                    <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-collection d-lg-none"></i>
                        <span class="nav-link-inner--text">Examples</span>
                    </a>
                    <router-link to="/landing" class="dropdown-item">Landing</router-link>
                    <router-link to="/profile" class="dropdown-item">Profile</router-link>
                    <router-link to="/login" class="dropdown-item">Login</router-link>
                    <router-link to="/logout" class="dropdown-item">Logout</router-link>
                </base-dropdown>
                -->
        <li class="nav-item d-lg-block ml-lg-4">
          <router-link to="/rsvp-w">
            <span class="btn-inner--icon">
              <i class="ni ni-send mr-2"></i>
            </span>
            <span class="nav-link-inner--text"><b>RSVP</b></span>
          </router-link>
        </li>
      </ul>
    </base-nav>
  </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";

export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown
  }
};
</script>
<style>
.nav-padding{
    padding-right: 10rem;
}
</style>
