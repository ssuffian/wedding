<template>
    <div>
        <div class="position-relative">
            <!-- shape Hero -->
            <section class="section-shaped my-0">
                <div class="shape shape-style-1 shape-default shape-skew">
                </div>
                <div class="container shape-container d-flex">
                    <div class="col px-0">
                    <v-text-field v-model="rsvpEmail" label="Enter the e-mail we used to send you the RSVP"></v-text-field>
                     <v-btn class="mx-2" fab dark small color="primary" v-on:click="getRSVP">
                      <v-icon dark>
                        mdi-minus
                      </v-icon>
                    </v-btn>
                      <p>You in? Can you make it? Can we get a witness? Let us know! We very graciously request the favor of your kind reply.</p>

                      <p>Before you RSVP, please make sure to review our Schedule and Housing pages, as the RSVP form asks questions about your housing preferences (if you’re planning to stay at the camp) and questions about which meals you’ll be attending.</p>

                      <p>Once you’re ready, please RSVP by completing <a href="https://docs.google.com/forms/d/e/1FAIpQLSdJ0ZqOWr-jTSBBtjmQVtIq6NMORZTk4FhpGOIhjz68fXGlVg/viewform?usp=sf_link" target="_blank">this online form</a>.</p>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>

export default {
    data() {return {rsvpEmail: ''}},
  components: {
  },
  methods: {
      getRSVP(email) {
      var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keywYtoZwrZCEIjju'}).base('app6RU8GISA8nj0um');
     const rsvpEmail = this.rsvpEmail

base('People').select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 10,
    filterByFormula: "{RSVPs} = '"+rsvpEmail + "'",
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    if(records.length === 0){
        console.log("No records found for " + rsvpEmail)
    } else{

        console.log("No records found for " + rsvpEmail)
    }
    records.forEach(function(record) {
        console.log('Retrieved', record.get('Name'));
    });
    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});
  }
  }
};
</script>
