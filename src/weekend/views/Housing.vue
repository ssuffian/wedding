<template>
  <div>
    <div class="position-relative">
      <!-- shape Hero -->
      <section class="section-shaped my-0">
        <div class="shape shape-style-1 shape-default shape-skew"></div>
        <div class="container shape-container d-flex">
          <div class="col px-0">
            <v-img src="img/pages/housing.jpeg" max-height="300"></v-img><br />
            <v-expansion-panels>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  <h2>Stay at Camp Laurelwood</h2>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <p>
                    Becky and Steve will happily be staying at camp the entire
                    weekend. You’re all invited to join, but staying in rustic
                    cabins may not be everyone’s cup of tea.
                  </p>
                  <p>Cabin Details:</p>
                  <v-container>
                    <ul>
                      <li>
                        <b>BEDS:</b> Each cabin has about a dozen wooden bunk
                        beds, plus some single-beds. All beds have twin-size
                        mattresses.
                      </li>
                      <li>
                        <b>COST:</b> The cost to stay in a cabin is
                        <b>$50 per person per night</b>. Kids under 5 years old
                        stay for free!
                      </li>
                      <li>
                        <b>BEDDING:</b> Cabins do not include pillows, sheets,
                        sleeping bags, blankets, or towels. The RSVP form asks
                        if you plan to bring any of these items or if you’d like
                        to request them. For example, guests traveling by
                        airplane may not be able to pack all these items and can
                        request what they cannot bring.
                      </li>
                      <li>
                        <b>PEOPLE:</b> We expect approximately 4-8 people per
                        cabin, depending on how many people choose to stay in
                        cabins.
                      </li>
                      <li>
                        <b>FEATURES:</b> Each cabin has electricity, cubby
                        storage, closets, bathroom stalls, and sinks. Cabins do
                        not have air conditioning or heating.
                      </li>
                      <li>
                        <b>SHOWERS:</b> Showers are located in separate shower
                        buildings, a short walk from each cabin.
                      </li>
                      <li>
                        <b>PARKING:</b> Overnight guests should drive up
                        directly to cabins and remain parked there.
                      </li>
                      <li>
                        <b>HOW TO RESERVE:</b> All that you need to do is
                        complete the RSVP form. In the RSVP form, you have the
                        option to name other guests you’d like to stay with. The
                        RSVP form also asks about your preferences, such as
                        staying in a cabin with kids or not. After March 1st,
                        Becky & Steve will make cabin arrangements based on
                        everyone’s preferences, then send you directions for how
                        to pay, which will confirm your reservation.
                      </li>
                    </ul>
                  </v-container>
                  <a
                    href="https://www.camplaurelwood.org/interactive-map/"
                    target="_blank"
                    >Click here</a
                  >
                  to see an interactive map of Camp Laurelwood. The video below
                  shows a typical cabin:
                  <p class="text-center">
                    <br />
                    <iframe
                      width="80%"
                      height="315"
                      src="https://www.youtube.com/embed/neSfhTbFuGg"
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </p>
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  <h2>Stay Locally in Hotels, B&Bs, etc.</h2>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <HotelOptions />
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import HotelOptions from "@/views/HotelOptions.vue";
export default {
  components: { HotelOptions },
};
</script>
