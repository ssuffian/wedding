<template>
  <div>
    <div class="position-relative">
      <!-- shape Hero -->
      <section class="section-shaped my-0">
        <div class="shape shape-style-1 shape-default shape-skew"></div>
        <div class="container shape-container d-flex">
          <div class="col px-0">
            <v-img
              style="float:left; margin-right:10px"
              src="img/pages/rsvp.jpeg"
            ></v-img>
            <b>Ready to RSVP?</b> Please review our "Schedule" and "Where to
            Stay" pages. The RSVP form asks
            <span v-if="wholeWeekend"
              >which camp meals you’ll be attending and whether you plan to stay
              overnight in cabins.</span
            ><span v-else
              >if you will be attending the goodbye breakfast on Monday
              morning.</span
            >
            <br /><br />
            <b>Not attending the wedding?</b> If you or anyone in your party are
            not able to attend, please RSVP to let us know. <br /><br />
            <b>Need to make changes after RSVPing?</b> After you RSVP, you can
            change your responses anytime by re-entering your email address
            below. <br /><br /><br /><br /><br />
            <br />
            <b>Enter your email</b> below to RSVP. Please note, we are not
            mailing paper invitations or RSVPs. <br /><br />
            <b
              >There is a separate RSVP form for each member of your party.
              After entering your email, you may see multiple guest names appear
              for all guests in your party. Please click each guest name and
              complete a separate form for each guest.
            </b>
            If you need any tech support, please email us at
            <a href="mailto:celebratebeckysteve@gmail.com"
              >celebratebeckysteve@gmail.com</a
            >
            and we can help. <br /><br />
            <i
              >Tech Hint: We recommend filling out the RSVP form(s) from a
              computer rather than a mobile device.</i
            >
            <br /><br />
            <v-toolbar>
              <v-text-field
                v-on:keyup.enter="getRSVP"
                v-model="rsvpEmail"
                label="Enter the e-mail where we sent your invitation"
              ></v-text-field>
              <v-btn
                class="mx-2"
                fab
                dark
                small
                color="primary"
                v-on:click="getRSVP"
              >
                <v-icon dark>
                  mdi-magnify
                </v-icon>
              </v-btn>
            </v-toolbar>
            <div v-if="rsvps">
              <div v-if="rsvps.length === 0 && loading === false">
                No RSVPS found for: '{{ rsvpEmail }}'
              </div>
              <div v-else>
                Please make sure to complete an RSVP form for each guest in your
                immediate party.
                <div v-for="(rsvp, key) in rsvps" v-bind:key="key">
                  <a :href="rsvp.fields['Edit Url']" target="_blank">{{
                    rsvp.fields["Name"]
                  }}</a>
                </div>
              </div>
            </div>
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
      rsvpEmail: "",
      rsvps: null,
      rsvpsFound: true,
      loading: false,
    };
  },
  components: {},
  watch: {
    rsvpEmail: function(val) {
      this.loading = true;
    },
  },

  methods: {
    getRSVP() {
      var Airtable = require("airtable");
      var base = new Airtable({ apiKey: "key6efY0GWxTGk31K" }).base(
        "app6RU8GISA8nj0um"
      );
      var rsvpEmail = this.rsvpEmail.toLowerCase().replace(/\s/g, "");

      var emailSplit = rsvpEmail.split("@");
      if (emailSplit.length > 1) {
        var email = emailSplit[0];
        var domain = emailSplit[1];
        email = email.replace(/\./g, "");
        rsvpEmail = email + "@" + domain;
      }

      var rsvps = [];
      var loading = true;
      const self = this;
      self.loading = true;

      base(this.wholeWeekend ? "People" : "People_Sunday")
        .select({
          maxRecords: 10,
          filterByFormula: "{RSVPs_Cleaned} = '" + rsvpEmail + "'",
          view: "Grid view",
        })
        .eachPage(
          function page(records, fetchNextPage) {
            // This function (`page`) will get called for each page of records.
            self.loading = false;

            records.forEach(function(record) {
              var thisRecord = record;
              if (thisRecord) {
                rsvps.push(record);
              }
            });
            // To fetch the next page of records, call `fetchNextPage`.
            // If there are more records, `page` will get called again.
            // If there are no more records, `done` will get called.
            fetchNextPage();
          },
          function done(err) {
            if (err) {
              return;
            }
          }
        );
      this.rsvps = rsvps;
      // Need to add a "watch" so the change to the name in rsvp email for if no records are returned.
    },
  },
};
</script>
