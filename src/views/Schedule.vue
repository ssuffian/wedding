<template>
  <div>
    <div class="position-relative">
      <!-- shape Hero -->
      <section class="section-shaped my-0">
        <div class="shape shape-style-1 shape-default shape-skew"></div>
        <div class="container shape-container d-flex">
          <div class="col px-0">
            <v-img src="img/pages/schedule.jpeg" max-height="300"></v-img><br />
            <p>
              Our wedding ceremony will be on <b>Sunday, May 29, 2022</b>.
              <span v-if="wholeWeekend"
                >Celebrate with us for the entire weekend!</span
              >
              As we get closer to the wedding, this page will be updated with
              more details. All events take place at Camp Laurelwood.
            </p>
            <div v-if="wholeWeekend">
              <h2>Saturday May 28, 2022</h2>
              Wedding weekend begins!<br /><br />
              <b>1 PM - </b> Lunch at camp (food served in Mess Hall, outdoor
              seating available)<br />
              <b>After Lunch -</b> Optional camp activities (canoeing, swimming,
              hammocks, swingsets, gaga courts, games, sports)<br />
              <b>4 PM -</b> Meet and Greet event (outside,
              weather-permitting)<br />
              <b>6 PM -</b> Welcome Dinner BBQ (outside, weather-permitting)<br />
              <b>8 PM - </b>Family-friendly talent show (featuring you, our
              guests!) (outside, weather-permitting)<br />
              <b>9 PM - </b>Bonfire and Karaoke
            </div>
            <br />
            <h2>Sunday May 29, 2022</h2>
            <span v-if="wholeWeekend">
              <b>9:30 AM - </b> Collective Mikvah/Lake Swim<br />
              <b>10:30 AM - </b> Coffee Demonstration (in Mess Hall)<br />
              <b>11 AM - </b> Brunch at camp (food served in Mess Hall, outdoor
              seating available)<br />
              <b>After Brunch -</b> Optional camp activities (canoeing, arts and
              crafts, hammocks, swingsets, gaga courts, games, sports)<br />
            </span>
            <b>3:30 PM</b> Wedding ceremony begins! The wedding ceremony will
            include:
            <v-container
              ><ul>
                <li>
                  Tisches: separate, joyful gatherings for Becky (outside,
                  weather-permitting) and Steve (in Mess Hall)
                </li>
                <li>
                  Signing the ketubah (Jewish marriage contract) (outside,
                  weather-permitting)
                </li>
                <li>
                  A ceremony under the chuppah (outside, weather-permitting)
                </li>
                <li>
                  A dinner reception, plus lots of dancing (outside,
                  weather-permitting)
                </li>
              </ul>
            </v-container>
            Later in the evening, there will be an after-party and bonfire.<br /><br />

            <h2>Monday May 30, 2022</h2>
            <b>9:00 AM - 11 AM - </b> Goodbye Brunch at camp (food served in
            Mess Hall, outdoor seating available)<br />
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
