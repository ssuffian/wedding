<template>
  <div>
    <div class="position-relative">
      <!-- shape Hero -->
      <section class="section-shaped my-0">
        <div class="shape shape-style-1 shape-default shape-skew"></div>
        <div class="container shape-container d-flex">
          <div class="col px-0">
            <v-expansion-panels>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  <b> Tell me about your Jewish wedding! </b>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <p v-if="wholeWeekend">
                    <a
                      href="https://docs.google.com/document/d/e/2PACX-1vTUTPGa_d-zYreZLziB2mL3IlPW1TWRQhKs6xF4K-RXihPtBpYx1xmByL3hhYwponmJ09szi49xVDOV/pub"
                      target="_blank"
                    >
                      Here is a guide</a
                    >
                    to Jewish traditions and ceremonies during our wedding
                    weekend.
                  </p>
                  <p>
                    We’re having a Jewish wedding! This means that, in addition
                    to getting a state-certified marriage license, we will have
                    a wedding ceremony that follows Jewish customs and is
                    recognized by the Jewish community.
                  </p>
                  <p>
                    This is both exciting and….complicated. It’s exciting
                    because it connects our wedding to thousands of years of
                    Jewish tradition, including traditions that some of our
                    ancestors participated in at their own weddings. It’s
                    complicated because, just like civil marriage in the United
                    States, Jewish marriage has traditionally not been inclusive
                    of feminist and queer couples. (For more on this, read
                    <a
                      href="https://www.theatlantic.com/health/archive/2014/04/toward-a-feminist-lgbt-friendly-jewish-wedding/284613/"
                      target="_blank"
                      >this article</a
                    >.)
                  </p>

                  <p>
                    We approach our Jewish wedding with a recognition of our
                    privilege, a desire to be a small part of broader movements
                    for social change that are making marriage accessible to
                    all, and joy at the opportunity to create a participatory,
                    justice-centered Jewish ceremony that weaves rituals,
                    celebration, and our values.
                  </p>

                  <p>Our wedding will include these Jewish customs:</p>

                  <v-container
                    ><ul>
                      <li>
                        <b>Tisches:</b> These are joyous gatherings that
                        typically involve sitting around a table with food and
                        drinks, making toasts, singing, and telling jokes.
                        Tisches are the first in a series of ceremonies leading
                        up to the wedding itself. Please join Becky or Steve’s
                        tisch - or float between them as you wish!
                      </li>
                      <li>
                        <b>Ketubah (wedding contract):</b> After tisches, we
                        will sign our ketubah. This document will be written in
                        Hebrew and English, and it will outline our commitments
                        to each other as partners. Our ketubah will have
                        elements of traditional Jewish text as well as
                        statements of our values and intentions for our
                        marriage.
                      </li>
                      <li>
                        <b>Chuppah (wedding ceremony):</b> Under the chuppah, we
                        will have a wedding ceremony that includes blessings,
                        Jewish rituals, and invitations for participation by
                        you, our guests. The chuppah symbolizes many things,
                        including the home we are building together that invites
                        people in.
                      </li>
                      <li>
                        <b>Joyous dancing:</b> After the ceremony, we will
                        celebrate and dance the horah - woohoo!
                      </li>
                    </ul>
                  </v-container>
                  <p>
                    Throughout these ceremonies, we will be encouraging and
                    providing opportunities for active participation and
                    community-building among our family and friends. Thank you
                    for being a part of our wedding!
                  </p>
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  <b>
                    Will there be a virtual ceremony for people who cannot
                    attend in-person?
                  </b>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  No, we will not livestream our wedding ceremony. But we will
                  have a professional videographer taking video, which can be
                  shared with guests after the wedding.
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
      wholeWeekend: localStorage.wholeWeekend === "true",
    };
  },
};
</script>
<style>
.v-expansion-panel-header > :not(.v-expansion-panel-header__icon) {
  flex: 1 0 0 !important;
  text-align: left;
}
</style>
