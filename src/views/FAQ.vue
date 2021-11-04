<template>
  <div>
    <div class="position-relative">
      <!-- shape Hero -->
      <section class="section-shaped my-0">
        <div class="shape shape-style-1 shape-default shape-skew"></div>
        <div class="container shape-container d-flex">
          <div class="col px-0">
            <v-expansion-panels>
              <h2>COVID-19</h2>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  <b>What will be the COVID-19 mitigation measures during the
                  wedding<span v-if="wholeWeekend"> weekend</span>?</b>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <p>
                    Your health and well-being during our wedding weekend is our
                    highest concern. We understand that COVID-19 mitigation
                    measures are a personal and emotional topic for many people.
                    We also recognize that pandemic conditions, CDC guidelines,
                    and state regulations will likely change between now and
                    our wedding. We don’t know what May 2022 will bring, but we will
                    monitor updates closely and keep this website updated.
                  </p>

                  <p>For now, there are a few things we know definitively:</p>
                  <v-container
                    ><ul>
                      <li>
                        <b>Any guest age 5+ must be fully vaccinated to attend our
                        wedding weekend.</b> This means that, at least 2 weeks
                        before the wedding, guests ages 5 and older must be fully vaccinated against COVID-19.
                        We do not make this decision lightly, but we feel a responsibility to protect our guests, vendors, and camp
                        employees from unnecessary risk, especially those with suppressed immune systems due to medical conditions and young 
                        children who are unable to be vaccinated at this time.
                      </li>
                      <li>
                        The RSVP form asks for all guests’ vaccination status.
                      </li>
                      <li>
                        This will be a large gathering. We are expecting
                        hundreds of guests.
                      </li>
                      <li>
                      All camp staff and vendors will be fully vaccinated.
                      </li>
                      <li>
                        Attending a big wedding during a pandemic can be a
                        difficult and emotional decision. We
                        absolutely understand (and we don't take it personally) if
                        guests cannot attend.
                      </li>
                    </ul></v-container
                  >
                  As we get closer to the wedding, we will confirm other
                  COVID-19 measures and update them on this website. Measures
                  may include:
                  <v-container
                    ><ul>
                      <li>
                        If vaccinations are authorized for younger ages, we may
                        require younger guests to be fully vaccinated.
                      </li>
                      <li>
                        We may require guests to show proof of vaccination
                        and/or boosters.
                      </li>
                      <li>
                        We may require guests to be tested before the
                        wedding and/or upon arrival.
                      </li>
                      <li>We may hold all wedding events outdoors.</li>
                      <li>
                        If we hold indoor events, we may require guests
                        to wear a mask.
                      </li>
                    </ul></v-container
                  >
                </v-expansion-panel-content>
              </v-expansion-panel>
              <h2>About the Camp</h2>
              <v-expansion-panel>
                <v-expansion-panel-header>
                <b>Tell me about the food!</b>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <p>As a Jewish camp, Camp Laurelwood's kitchen is kosher, and the vast majority
                  of the food during our wedding<span v-if="wholeWeekend"> weekend</span> will be made by the camp. 
                  If we do serve any non-kosher items, they will not interact with the kitchen, and they will be explicitly labeled.</p> 
                  <p v-if="wholeWeekend">For guests staying in cabins, all your meals and snacks will be provided at camp
                  (from Saturday lunch to Monday breakfast). For guests staying outside camp, 
                  the RSVP form asks which meals you plan to attend at camp. For more details about mealtimes, please visit the Schedule page.</p>
                  <p>The RSVP form also asks for your dietary restrictions. Please let us know your specific allergies, restrictions, and needs, so we 
                  can do our absolute best to accomodate everyone. We will have vegetarian, vegan, gluten-free, and sesame-free options.
                  We will also try to put the entire <span v-if="wholeWeekend">weekend</span> menu (once it's formalized) on our website, so stay tuned!
                  </p>
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  <b>What are accessibility supports at the camp?</b>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  Camp Laurelwood is located on 130 acres, and we understand some
                  guests will need support to reach events.
                  We will rent golf carts the entire weekend, and we
                  will do our best to arrange golf cart rides for guests who
                  need support getting around. The RSVP form asks about
                  guests’ accessibility needs.
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel v-if="wholeWeekend">
                <v-expansion-panel-header>
                  <b>If I'm not staying at camp, can I still participate in camp
                  activities and meals?</b>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  Yes! For any guests not staying overnight in cabins, you are
                  welcome to spend as much time at camp as you wish. The RSVP
                  form asks which meals you plan to attend at camp.
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel v-if="wholeWeekend">
                <v-expansion-panel-header>
                  <b>Do I need to pay for specific camp activities?</b>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  Nope! All camp activities are free for all guests.
                </v-expansion-panel-content>
              </v-expansion-panel>
               <v-expansion-panel>
                <v-expansion-panel-header>
                  <b>Will the camp be buggy?</b>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  It's a summer camp, so there will be bugs. But Camp Laurelwood sprays against insects, and we will provide bug repellent for guests. We also highly
                  recommend that guests do <a
                          href="https://www.cdc.gov/ticks/avoid/on_people.html"
                          target="_blank"
                          >daily tick checks</a
                        >. 
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel v-if="wholeWeekend">
                <v-expansion-panel-header>
                  <b>Is there WiFi at camp?</b>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  The camp has ample cell phone service. Only a few facilities at camp have WiFi, and the cabins do
                  not have WiFi. But we can connect in
                  person! Luckily, our friends and family are pretty awesome.
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  <b>Are pets allowed at the camp?</b>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  Unfortunately, the camp does not allow pets.
                </v-expansion-panel-content>
              </v-expansion-panel>
              <h2>Where to Stay</h2>
              <v-expansion-panel v-if="wholeWeekend">
                <v-expansion-panel-header>
                  <b>Can I stay in my own tent at the camp?</b>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  Yes, but it will still cost
                  you $50 per person per night (the same cost as a cabin).
                  Please consider staying in a cabin instead. But if you’re
                  super interested in pitching a tent, contact us.
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel v-if="wholeWeekend">
                <v-expansion-panel-header>
                  <b>I’m staying in a cabin. What should I pack?</b>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  Here’s a suggested packing list:
                  <v-container
                    ><ul>
                      <li>Twin bed sheets and a blanket, or a sleeping bag</li>
                      <li>Pillow</li>
                      <li>Towel and/or robe for showering</li>
                      <li>Flip flops or shower shoes</li>
                      <li>Swimsuit and towel for the lake</li>
                      <li>Toiletries</li>
                      <li>Flashlight or headlamp</li>
                      <li>Bug spray</li>
                      <li>Sunscreen</li>
                      <li>Rain gear or light jacket, depending on forecast</li>
                      <li>Reusable water bottle</li>
                      <li>
                        You may want to bring lawn chairs, a fan, and musical
                        instruments.
                      </li>
                    </ul>
                  </v-container>
                  The RSVP form asks if you plan to
                  bring bedding and/or towels, or if you will need any of these
                  items. For example, guests traveling by airplane may not be
                  able to pack bedding or towels and can request what
                  they cannot bring.
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  <b>Are there room blocks at certain hotels?</b>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  No, we are not reserving room blocks. If you’d like to stay in
                  a local hotel or B&B, please book wherever you’d like. The
                  "Where to Stay" page lists some local options.
                </v-expansion-panel-content>
              </v-expansion-panel>
              <h2>Travel</h2>
              <v-expansion-panel v-if="wholeWeekend">
                <v-expansion-panel-header>
                  <b>Can I request or offer a ride to the wedding?</b>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                You're welcome to offer or request a ride to the wedding from fellow guests. Feel free to add your name to our <a href="https://docs.google.com/spreadsheets/d/1MobInYhQcv22yMg27kHuq4a9AYrP9LwNMKorDvgG3pk/edit?usp=sharing" target="_blank">rideshare document</a>.
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  <b>Is there parking at camp?</b>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  Yes, the camp has free parking. <span v-if="wholeWeekend">Overnight guests should drive
                  up directly to cabins and remain parked there. </span><span v-if="wholeWeekend">Daytime guests</span><span v-else>Guests</span> should park in the main parking 
                  lot at the entrance of camp
                  (or on the field to the left of the lot, if the lot is full).
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  <b>Will there be a shuttle to/from the camp?</b>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  We are not planning to have a shuttle to/from the camp.
                  Regarding driving conditions at night, the roads to the camp
                  are paved, wide, and in a residential area, but some parts are windy and poorly lit.
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel v-if="wholeWeekend">
                <v-expansion-panel-header>
                  <b>Can I arrive earlier than 1 PM on Saturday?</b>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                Yes, you can arrive earlier on Saturday. (For example, some overnight guests might want to get settled in their cabins.) But there won't be any 
                official events or meals until 1 PM.
                </v-expansion-panel-content>
              </v-expansion-panel>
              <h2>Ceremony</h2>
              <v-expansion-panel>
                <v-expansion-panel-header>
                <b>
                Tell me about your Jewish wedding!
                </b>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                <p>We’re having a Jewish wedding! This means that, in addition to getting a state-certified marriage license, we will have a wedding ceremony that follows Jewish customs and is recognized by the Jewish community.</p>
<p>This is both exciting and….complicated. It’s exciting because it connects our wedding to thousands of years of Jewish tradition, including traditions that some of our ancestors participated in at their own weddings. It’s complicated because, just like civil marriage in the United States, Jewish marriage has traditionally not been inclusive of feminist and queer couples. (For more on this, read <a href="https://www.theatlantic.com/health/archive/2014/04/toward-a-feminist-lgbt-friendly-jewish-wedding/284613/" target="_blank">this article</a>.)</p>

<p>We approach our Jewish wedding with a recognition of our privilege, a desire to be a small part of broader movements for social change that are making marriage accessible to all, and joy at the opportunity to create a participatory, justice-centered Jewish ceremony that weaves rituals, celebration, and our values.</p>

<p>Our wedding will include these Jewish customs:</p>

                  <v-container
                    ><ul>
                      <li>
<b>Tisches:</b> These are joyous gatherings that typically involve sitting around a table with food and drinks, making toasts, singing, and telling jokes. Tisches are the first in a series of ceremonies leading up to the wedding itself. Please join Becky or Steve’s tisch - or float between them as you wish!
                      </li>
                      <li>
<b>Ketubah (wedding contract):</b> After tisches, we will sign our ketubah. This document will be written in Hebrew and English, and it will outline our commitments to each other as partners. Our ketubah will have elements of traditional Jewish text as well as statements of our values and intentions for our marriage.
                      </li>
                      <li>
<b>Chuppah (wedding ceremony):</b> Under the chuppah, we will have a wedding ceremony that includes blessings, Jewish rituals, and invitations for participation by you, our guests. The chuppah symbolizes many things, including the home we are building together that invites people in.
                      </li>
                      <li>
<b>Joyous dancing:</b> After the ceremony, we will celebrate and dance the horah - woohoo!
                      </li>
                    </ul>
                    </v-container>
<p>Throughout these ceremonies, we will be encouraging and providing opportunities for active participation and community-building among our family and friends. Thank you for being a part of our wedding!</p>

                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel>
                <v-expansion-panel-header>
                <b>
                  Will there be a virtual ceremony for people who cannot attend
                  in-person?
                </b>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  No, we will not livestream our wedding ceremony. But we
                  will take some video, which can be shared with guests after
                  the wedding.
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  <b>What’s the dress code?</b>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <p><span v-if="wholeWeekend">The dress code most of the weekend will be casual, with the exception of the wedding itself. </span>The wedding dress code is on a spectrum, ranging from nice jeans & a nice shirt all the way to a suit. Yes, nice jeans are totally fine at the wedding!  Blazers and ties are optional. Sundresses, cocktail dresses, and rompers are all great, but we don’t recommend super long dresses, in case the hem gets dirty. Please wear whatever makes you feel comfortable and special. You’re also welcome to look funky and weird! For example, funny hats, colorful clothing, or other surprises.</p> 
                  <p>Make sure to wear practical shoes, since there will be lots of grass, gravel, and wooded trails. When you're packing, check the weather in Madison, CT to prepare for what to wear. Bring layers, in case it gets hot during the day, gets cold at night, or rains.</p>
                </v-expansion-panel-content>
              </v-expansion-panel>
              <h2>Other</h2>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  <b>What are some other fun activities in the area, outside the
                  camp?</b>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  Here are some local activities outside Camp Laurelwood:
                  <v-container
                    ><ul>
                      <li>
                        <a
                          href="https://portal.ct.gov/DEEP/State-Parks/Parks/Hammonasset-Beach-State-Park"
                          target="_blank"
                          ><b>Hammonasset Beach State Park</b></a
                        >
                        is Connecticut's largest shoreline park and a 17 min
                        drive from Camp Laurelwood. The park has over 2 miles of
                        beach for swimming, picnicking,
                        walking trails, or strolling along the boardwalk. The
                        park includes
                        <a
                          href="https://www.meigspointnaturecenter.org/"
                          target="_blank"
                          ><b>Meigs Point Nature Center</b></a
                        >, which has a learning center and 10 themed gardens.
                      </li>
                      <li>
                        <a
                          href="https://madisonct.com/project/shop/"
                          target="_blank"
                          ><b>Downtown Madison</b></a
                        >
                        and
                        <a
                          href="https://www.ctvisit.com/listings/town-guilford"
                          target="_blank"
                          ><b>downtown Guilford</b></a
                        >
                        have restaurants and shopping, mostly located on Boston
                        Post Road. We recommend checking out
                        <a href="https://bishopsorchards.com/" target="_blank"
                          ><b>Bishop’s Orchards</b></a
                        >
                        (farm market, winery, and creamery) and
                        <a href="https://www.rjjulia.com/" target="_blank"
                          ><b>RJ Julia Independent Booksellers</b></a
                        >.
                      </li>
                      <li>
                        <a
                          href="https://shorelinegreenwaytrail.org/"
                          target="_blank"
                          ><b>The Shoreline Greenway Trail</b></a
                        >
                        has hiking trails in Madison, Branford, and East Haven.
                        Each trail is about a mile of mostly off-road walking.
                      </li>
                      <li>
                        The
                        <a href="https://newenglandtrail.org/" target="_blank"
                          ><b>New England National Scenic Trail</b></a
                        >
                        runs through Guilford and Madison and has miles of
                        trails at varying elevations.
                      </li>
                      <li>
                        Stony Creek is a small coastal village in Branford,
                        about 25 min drive from Camp Laurelwood. It features
                        <a
                          href="https://www.stonycreekbeer.com/home"
                          target="_blank"
                          ><b>Stony Creek Brewery</b></a
                        >, boat tours of <a href="https://en.wikipedia.org/wiki/Thimble_Islands" target="_blank"><b>Thimble Islands</b></a
                        > (the 3 boat tour companies are: <a href="https://thimbleislandcruise.com/" target="_blank">Sea Mist</a>, <a href="https://thimbleislander.weebly.com/" target="_blank">The Islander</a>, and <a href="https://thimbleislands.com/" target="_blank">Volsunga IV</a>), restaurants, and gift
                        shops.
                      </li>
                      <li>
                        <a href="https://www.infonewhaven.com/" target="_blank"
                          ><b>Downtown New Haven</b></a
                        >
                        is about 30 min drive from Camp Laurelwood and has
                        restaurants, museums, and shopping.
                      </li>
                      <li>
                        <a
                          href="https://www.dinosaurstatepark.org/"
                          target="_blank"
                          ><b>Dinosaur State Park</b></a
                        >
                        is a 40 min drive from Camp Laurelwood. The museum
                        features a preserved Mesozoic flood plain, fossils, and
                        exhibits, and the park has two miles of nature trails
                        and an arboretum.
                      </li>
                    </ul></v-container
                  >
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  <b>Can I bring my kids, a date, or a friend?</b>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <p>
                    To best manage our numbers, costs, catering, and COVID-19
                    mitigation measures, your RSVP form specifically states who
                    is invited. But if we forgot someone in your immediate party (like invited 2 of your kids but not the 3rd!), then please contact us so we can correct the mistake.
                  </p>
                  <p v-if="wholeWeekend">
                    Regarding kids, the entire weekend will be family-friendly,
                    and we’re hoping to book babysitters for parts of the
                    weekend (updates to come as we get closer to the wedding).
                  </p>
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  <b>Are Becky or Steve changing their last names?</b>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  Nope! After they’re married, they’ll still be Becky Mer and
                  Stephen Suffian. 
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
    data() {
        return {
            wholeWeekend: localStorage.wholeWeekend === "true"
        }
    }
}
</script>
<style>
.v-expansion-panel-header > :not(.v-expansion-panel-header__icon) {
   flex: 1 0 0 !important;
   text-align: left;
}
</style>
