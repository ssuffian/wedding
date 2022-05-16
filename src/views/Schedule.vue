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
            </p>
            <div v-if="wholeWeekend">
              <h2>Saturday May 28, 2022</h2>
              Wedding weekend begins!<br /><br />
              <b>1 PM - Lunch</b>
              <i> (food served in Mess Hall, outdoor seating available)</i
              ><br />
              <b>2 PM -</b> Camp tour<br />
              <b>2-4 PM -</b> Games, activities, and lake hours
              <i>(swim, canoe, kayak, paddleboard)</i><br />
              <b>3-6 PM -</b> Babysitting + Arts & Crafts<br />
              <b>3-4 PM -</b> Archery<br />
              <b>4 PM -</b> Social Mixer event
              <i> (outside, weather-permitting)</i><br />
              <b>6 PM - Welcome Dinner BBQ</b>
              <i> (outside, weather-permitting)</i><br />
              <b>8 PM - </b>Talent show<i> (outside, weather-permitting)</i>.
              <a
                href="https://docs.google.com/spreadsheets/d/1j4lZV38hfLajJQT5hIJpp7oOfKGJwRMitj6pcoPIiWg/edit?usp=sharing"
                target="_blank"
                >Click Here to Sign up!</a
              ><br />
              <b>9 PM - </b>Havdalah Ceremony, Bonfire and Karaoke
            </div>
            <br />
            <h2>Sunday May 29, 2022</h2>
            <span v-if="wholeWeekend">
              <b>9:30 AM - </b> Collective Mikvah/Lake Swim<br />
              <b>9:30-11 AM -</b> Lake hours
              <i>(swim, canoe, kayak, paddleboard)</i><br />
              <b>10:30 AM - </b> Coffee Demonstration <i>(in Mess Hall)</i
              ><br />
              <b>11 AM - Brunch</b>
              <i> (in Mess Hall, outdoor seating available)</i><br />
              <b>12-1 PM -</b> Archery<br />
              <b>12-2 PM -</b> Babysitting + Arts & Crafts<br />
            </span>
            <b>3:30 PM - Wedding ceremony begins!</b> The wedding ceremony will
            include:
            <v-container
              ><ul>
                <li>
                  Tisches: separate, joyful gatherings for Becky
                  <i>(outside, weather-permitting)</i> and Steve
                  <i>(in Mess Hall)</i>
                </li>
                <li>
                  Signing the ketubah (Jewish marriage contract)
                  <i>(outside, weather-permitting)</i>
                </li>
                <li>
                  A ceremony under the chuppah
                  <i>(outside on a beach, weather-permitting)</i>
                </li>
                <li>
                  A dinner reception, plus lots of dancing
                  <i>(outside, weather-permitting)</i>
                </li>
              </ul>
            </v-container>
            Later in the evening, there will be an after-party and bonfire.<br /><br />

            <h2>Monday May 30, 2022</h2>
            <b>9-11 AM - Goodbye Brunch</b
            ><i> (food served in Mess Hall, outdoor seating available)</i><br />
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
