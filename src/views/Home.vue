<template>
  <div>
    <div class="position-relative">
      <!-- shape Hero -->
      <section class="section-shaped my-0">
        <div class="shape shape-style-1 shape-default shape-skew"></div>
        <div class="container shape-container d-flex">
          <div class="col px-0">
            <div class="row justify-content-center">
              <v-img src="img/pages/home_post.jpeg" max-height="500"></v-img>
            </div>
            <div class="row justify-content-center">
              <h1 class="display-3  text">
                <span
                  >Thank you so much for celebrating our wedding with us!</span
                >
                <br />
                <span
                  >If you want to share some photos, or see what photos others
                  have shared, head over to
                  <a
                    target="_blank"
                    href="http://photos.celebrateourweddingwith.us"
                    >this google photo album</a
                  >!</span
                ><br />
                <span>Professional photos and video will be shared later!</span>
              </h1>
            </div>
            <div class="row justify-content-center">
              <p class="text"></p>
            </div>
            <!--
            <div class="row justify-content-center">
              <p class="text">Becky Mer and Stephen Suffian</p>
            </div>
            <div class="row justify-content-center">
              <p class="text">
                Memorial Day Weekend 2022
              </p>
            </div>
            <div class="row justify-content-center">
              <p v-if="wholeWeekend" class="text">
                Saturday May 28 - Monday May 30, 2022
              </p>
              <p v-else class="text">
                Sunday May 29 - Monday May 30, 2022
              </p>
            </div>
            <div class="row justify-content-center">
              <p class="text">
                <a href="https://www.camplaurelwood.org/" target="_blank"
                  ><b>Camp Laurelwood</b></a
                >
              </p>
            </div>
            <div class="row justify-content-center">
              <p class="text">
                <a href="https://goo.gl/maps/B2bvfrwipdtnTEDt6" target="_blank"
                  ><b>463 Summer Hill Road, Madison, Connecticut 06443</b></a
                >
              </p>
            </div>
            -->
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      wholeWeekend: localStorage.wholeWeekend === "true",
    };
  },
};
</script>
<style>
.text {
  text-align: center;
}
</style>
