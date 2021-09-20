<template>
  <div>
    <div class="position-relative">
      <!-- shape Hero -->
      <section class="section-shaped my-0">
        <div class="shape shape-style-1 shape-default shape-skew"></div>
        <div class="container shape-container d-flex">
          <div class="col px-0">
            <v-img src="img/pages/rsvp.jpeg" max-height="300"></v-img><br />
            <p>
              <b>Ready to RSVP?</b> Please review our Schedule and Where to Stay
              pages. The RSVP form asks which camp meals you’ll be attending and
              whether you plan to stay overnight in cabins.
            </p>
            <p>
              <b>Not attending the wedding?</b> If you or anyone in your party
              are not able to attend, please complete the RSVP form to let us
              know.
            </p>
            <p>
              <b>Need to make changes after RSVPing?</b> After you submit the
              RSVP form, you can change your responses anytime by clicking the
              RSVP form again.
            </p>
            <p>
              Search your reservation below to RSVP. Please RSVP by February 1,
              2022. There is a separate form for each member of the party.
            </p>

            <v-toolbar>
              <v-text-field
                v-on:keyup.enter="getRSVP"
                v-model="rsvpEmail"
                label="Enter the e-mail we used to send you the RSVP"
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
              <div v-for="(rsvp, key) in rsvps" v-bind:key="key">
                <a :href="rsvp.fields['Edit Url']" target="_blank">{{
                  rsvp.fields["Name"]
                }}</a>
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
      rsvpEmail: "",
      rsvps: null,
      rsvpsFound: true,
      loading: false
    };
  },
  components: {},
  watch: {
    rsvpEmail: function(val) {
      this.loading = true;
    }
  },

  methods: {
    getRSVP(email) {
      var Airtable = require("airtable");
      var base = new Airtable({ apiKey: "keywYtoZwrZCEIjju" }).base(
        "app6RU8GISA8nj0um"
      );
      const rsvpEmail = this.rsvpEmail;
      var rsvps = [];
      var loading = true;
      const self = this;
      self.loading = true;

      base("People")
        .select({
          maxRecords: 10,
          filterByFormula: "{RSVPs} = '" + rsvpEmail + "'",
          view: "Grid view"
        })
        .eachPage(
          function page(records, fetchNextPage) {
            // This function (`page`) will get called for each page of records.
            self.loading = false;

            if (records.length === 0) {
              console.log("No records found for " + rsvpEmail);
            }
            records.forEach(function(record) {
              var thisRecord = record;
              if (thisRecord) {
                console.log("Retrieved", thisRecord.get("Name"));
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
              console.error(err);
              return;
            }
          }
        );
      this.rsvps = rsvps;
      // Need to add a "watch" so the change to the name in rsvp email for if no records are returned.
    }
  }
};
</script>
