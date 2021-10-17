<template>
  <div>
    <div class="position-relative">
      <!-- shape Hero -->
      <section class="section-shaped my-0">
        <div class="shape shape-style-1 shape-default shape-skew"></div>
        <div class="container shape-container d-flex">
          <div class="col px-0">
            <v-img src="img/pages/housing.jpeg" max-height="300"></v-img><br />
        <HotelOptions/>
            </div>
        </div>
     </section>
    </div>
  </div>
</template>

<script>
import HotelOptions from "@/views/HotelOptions.vue";
export default {
  components: {HotelOptions}
};
</script>
