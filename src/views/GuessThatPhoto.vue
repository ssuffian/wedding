<template>
  <div>
    <div class="position-relative">
      <!-- shape Hero -->
      <section class="section-shaped my-0">
        <div class="shape shape-style-1 shape-default shape-skew"></div>
        <div class="container shape-container d-flex">
          <v-container>
            <v-row>
              <v-col>
                <flashcard
                  front="What are these messages?"
                  imgFront="img/guess/messages.jpeg"
                  back="Our first messages to each other!"
                  imgBack="img/guess/messages.jpeg"
                  imgBackWidth="350"
                  imgFrontWidth="350"
                  headerFront="Guess that photo"
                  footerFront="Click to show answer"
                  footerBack="We met through a dating app in 2017. Extra credit if you know which friend Steve was referencing seeing in San Francisco!"
                  colorTextBack="black"
                ></flashcard>
                <flashcard
                  front="Who is this?"
                  imgFront="img/guess/beckyparents.jpg"
                  back="Barbara and Benny Mer!"
                  imgBack="img/guess/beckyparents.jpg"
                  imgBackWidth="350"
                  imgFrontWidth="350"
                  headerFront="Guess that photo"
                  footerFront="Click to show answer"
                  footerBack="These are Becky's wonderful parents who live in Rhode Island."
                  colorTextBack="black"
                ></flashcard>
                <br><br>
                </v-col ><v-col>
                <flashcard
                  front="What is this?"
                  imgFront="img/guess/apartment.jpeg"
                  back="Our first apartment!"
                  imgBack="img/guess/apartment.jpeg"
                  imgBackWidth="350"
                  imgFrontWidth="350"
                  headerFront="Guess that photo"
                  footerFront="Click to show answer"
                  footerBack="In 2019, we moved into our first apartment together in Cambridge, MA."
                  colorTextBack="black"
                ></flashcard> 
                <flashcard
                  front="Who is this?"
                  imgFront="img/guess/steve_parents.jpeg"
                  back="Sue and Fred Suffian!"
                  imgBack="img/guess/steve_parents.jpeg"
                  imgBackWidth="350"
                  imgFrontWidth="350"
                  headerFront="Guess that photo"
                  footerFront="Click to show answer"
                  footerBack="These are Steve's wonderful parents who live in Pennsylvania (with their adorable dog, Sophie!)."
                  colorTextBack="black"
                ></flashcard>
                </v-col ><v-col>
                <flashcard
                  front="What happened here?"
                  imgFront="img/guess/isabella.jpeg"
                  back="Our proposal!"
                  imgBack="img/guess/isabella.jpeg"
                  imgBackWidth="350"
                  imgFrontWidth="350"
                  headerFront="Guess that photo"
                  footerFront="Click to show answer"
                  footerBack="The Isabella Stewart Gardner Museum in Boston is where we proposed to each other in December 2019."
                  colorTextBack="black"
                ></flashcard> 
                <flashcard
                  front="Why is this park bench important?"
                  imgFront="img/guess/bench.jpeg"
                  back="Where we first met!"
                  imgBack="img/guess/bench.jpeg"
                  imgBackWidth="350"
                  imgFrontWidth="350"
                  headerFront="Guess that photo"
                  footerFront="Click to show answer"
                  footerBack="For our first date in May 2017 in Berkeley, we met at this bench in Willard Park and went for a walk around the neighborhood."
                  colorTextBack="black"
                ></flashcard>
              </v-col> <v-col>
                <flashcard
                  front="Where is this?"
                  imgFront="img/guess/beach.png"
                  back="The Jersey Shore, near Atlantic City!"
                  imgBack="img/guess/beach.png"
                  imgBackWidth="350"
                  imgFrontWidth="350"
                  headerFront="Guess that photo"
                  footerFront="Click to show answer"
                  footerBack="This photo shows the extent of our collective gymnastic abilities."
                  colorTextBack="black"
                ></flashcard> 
                </v-col>
            </v-row>
          </v-container>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Flashcard from "./components/Flashcard";

export default {
  components: {
    Flashcard
  }
};
</script>
