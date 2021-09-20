<template>
  <section class="section section-shaped section-lg my-0">
    Logout
  </section>
</template>
<script>
export default {
  name: "logout",
  mounted() {
    localStorage.password = null;
    this.$router.push("/login");
  }
};
</script>
<style></style>
