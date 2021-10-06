<template>
  <nav
    class="navbar"
    :class="[
      { 'navbar-expand-lg': expand },
      { 'navbar-transparent': transparent },
      { [`bg-${type}`]: '' },
      { rounded: round }
    ]"
  >
  <slot></slot>
  </nav>
</template>
<script>

export default {
  name: "base-nav",
  components: {
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
@media (min-width:892px) {
    .toggle-text {
        display: none;
    }
}
.navbar-nav {
    margin: auto
}
</style>
