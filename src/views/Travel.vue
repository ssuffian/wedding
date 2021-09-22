<template>
  <div>
    <div class="position-relative">
      <!-- shape Hero -->
      <section class="section-shaped my-0">
        <div class="shape shape-style-1 shape-default shape-skew"></div>
        <div class="container shape-container d-flex">
          <div class="col px-0">
            <v-img src="img/pages/travel.png" max-height="300"></v-img><br />
            <p>
              We are inviting many of you to travel from all over the world to
              attend our wedding. Thank you for considering making the journey!
            </p>

            <p>
              Camp Laurelwood Address:
              <a href="https://goo.gl/maps/B2bvfrwipdtnTEDt6" target="_blank"
                >463 Summer Hill Road, Madison, CT 06443</a
              >
            </p>

            <v-expansion-panels>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  <h2>Driving</h2>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <p>
                    Camp Laurelwood is located a few miles off I-95. These are
                    approximate driving times to camp, but traffic will be heavy
                    on Memorial Day Weekend:
                  </p>
                  <v-container>
                    <ul>
                      <li>From New Haven, CT: 30 min drive</li>
                      <li>From Providence, RI: 1.5 hour drive</li>
                      <li>From Boston, MA: 2.5 hour drive</li>
                      <li>From New York City: 2.5 hour drive</li>
                      <li>From Philadelphia, PA: 3.5 hour drive</li>
                    </ul>
                  </v-container>

                  <p>Camp Laurelwood has free parking onsite.</p>

                  <p>
                    To offer or find a ride to the wedding, please add your name
                    to our
                    <a
                      href="https://docs.google.com/spreadsheets/d/1MobInYhQcv22yMg27kHuq4a9AYrP9LwNMKorDvgG3pk/edit?usp=sharing"
                      target="_blank"
                      >rideshare document.</a
                    >
                  </p>
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  <h2>Flying</h2>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <p>Major airports near camp are:</p>

                  <v-container>
                    <ul>
                      <li>
                        New York LaGuardia Airport (LGA): 2 hour drive (~$200
                        Uber/Lyft)
                      </li>
                      <li>
                        New York JFK Airport (JFK): 2 hour drive (~$200
                        Uber/Lyft)
                      </li>
                      <li>
                        Boston Logan Airport (BOS): 2.5 hour drive (~$250
                        Uber/Lyft)
                      </li>
                    </ul>
                  </v-container>

                  <p>Smaller airports closer to camp are:</p>

                  <v-container>
                    <ul>
                      <li>
                        Tweed New Haven Airport (HVN): 30 min drive (~$40
                        Uber/Lyft)
                      </li>
                      <li>
                        Hartford-Bradley International Airport (BDL): 1 hour
                        drive (~$65 Uber/Lyft)
                      </li>
                      <li>
                        Providence T.F. Green Airport (PVD): 1.5 hour drive
                        (~$100 Uber/Lyft)
                      </li>
                    </ul>
                  </v-container>

                  <p>
                    From the airport, you will need to travel by car to Camp
                    Laurelwood. To offer or find a ride to camp, please add your
                    name to our
                    <a
                      href="https://docs.google.com/spreadsheets/d/1MobInYhQcv22yMg27kHuq4a9AYrP9LwNMKorDvgG3pk/edit?usp=sharing"
                      target="_blank"
                      >rideshare document.</a
                    >
                  </p>
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  <h2>Traveling by Train</h2>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <p>
                    There are a few options for train travel, but they all
                    require supplemental travel by car, since Camp Laurelwood is
                    not in walking distance from any train stations. To offer or
                    find a ride to camp, please add your name to our
                    <a
                      href="https://docs.google.com/spreadsheets/d/1MobInYhQcv22yMg27kHuq4a9AYrP9LwNMKorDvgG3pk/edit?usp=sharing"
                      target="_blank"
                      >rideshare document.</a
                    >
                  </p>

                  <b>Option 1: Travel to Madison Station</b>

                  <p>
                    Take either Amtrak or the MTA Metro-North Railroad New Haven
                    Line to New Haven Union Station. From New Haven Union
                    Station, transfer to the Shore Line East commuter rail. Your
                    destination will be Madison Station (about 30 min journey).
                    Madison Station is located at 77 Bradley Road, Madison, CT.
                    It is a 10 minute drive from Camp Laurelwood.
                  </p>

                  <b>Option 2: Travel Only by Amtrak</b>
                  <p>The closest Amtrak stations to Camp Laurelwood are:</p>
                  <v-container>
                    <ul>
                      <li>Old Saybrook: 25 min drive</li>
                      <li>New Haven Union Station: 30 min drive</li>
                      <li>New Haven State Street Station: 30 min drive</li>
                    </ul>
                  </v-container>

                  <b>Option 3: Travel Only by MTA Metro-North Railroad</b>
                  <p>
                    The closest Metro-North stations are New Haven Union Station
                    and New Haven State Street Station. Both stations are on the
                    New Haven Line and about a 30 min drive to camp.
                  </p>
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
export default {
  components: {}
};
</script>
<style>
.v-expansion-panel-header > :not(.v-expansion-panel-header__icon) {
  flex: 0 0 auto !important;
}
</style>
