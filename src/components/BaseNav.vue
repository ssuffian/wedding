<template>
  <nav
    class="navbar"
    :class="[
      { 'navbar-expand-lg': expand },
      { [`navbar-${effect}`]: effect },
      { 'navbar-transparent': transparent },
      { [`bg-${type}`]: type },
      { rounded: round }
    ]"
  >
    <div class="container">
      <slot name="container-pre"></slot>
      <slot name="brand">
        <a class="navbar-brand" href="#" @click.prevent="onTitleClick">
          {{ title }}
        </a>
      </slot>
      <span class="toggle-text">Click for Menu --></span>
      <navbar-toggle-button
        :toggled="toggled"
        :target="contentId"
        @click.native.stop="toggled = !toggled"
      >
      </navbar-toggle-button>

      <slot name="container-after"></slot>
      <div
        class="collapse navbar-collapse"
        :class="{ show: toggled }"
        :id="contentId"
        v-click-outside="closeMenu"
      >
        <button style="float:right" class="toggle-text" @click="closeThisMenu">X</button>
        <div class="navbar-collapse-header">
          <slot name="content-header"></slot>
        </div>
        <slot></slot>
      </div>
    </div>
  </nav>
</template>
<script>
import { FadeTransition } from "vue2-transitions";
import NavbarToggleButton from "./NavbarToggleButton";

export default {
  name: "base-nav",
  components: {
    FadeTransition,
    NavbarToggleButton
  },
  props: {
    type: {
      type: String,
      default: "primary",
      description: "Navbar type (e.g default, primary etc)"
    },
    title: {
      type: String,
      default: "",
      description: "Title of navbar"
    },
    contentId: {
      type: [String, Number],
      default: Math.random().toString(),
      description:
        "Explicit id for the menu. By default it's a generated random number"
    },
    effect: {
      type: String,
      default: "dark",
      description: "Effect of the navbar (light|dark)"
    },
    round: {
      type: Boolean,
      default: false,
      description: "Whether nav has rounded corners"
    },
    transparent: {
      type: Boolean,
      default: false,
      description: "Whether navbar is transparent"
    },
    expand: {
      type: Boolean,
      default: false,
      description: "Whether navbar should contain `navbar-expand-lg` class"
    }
  },
  data() {
    return {
      toggled: false
    };
  },
  methods: {
    onTitleClick(evt) {
      this.$emit("title-click", evt);
    },
    closeThisMenu() {
      this.toggled = false;
    },
    closeMenu() {}//Something wrong with this }
  }
};
</script>
<style>
@media (min-width:992px) {
    .toggle-text {
        display: none;
    }
}
</style>
