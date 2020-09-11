<template>
    <div>
        <div class="position-relative">
            <!-- shape Hero -->
            <section class="section-shaped my-0">
                <div class="shape shape-style-1 shape-default shape-skew">
                </div>
                <div class="container shape-container d-flex">
                  <flashcard
                    front="Where?"
                    imgFront="img/guess/warringtongardens.jpg"
                    back="West Philly - Warrington gardens!"
                    imgBack="img/guess/warringtongardens.jpg"
                    imgBackWidth="350"
                    imgFrontWidth="350"
                    headerFront="Guess that photo"
                    footerFront="Click to show answer"
                    footerBack="Becky and Steve spent a month this summer at an AirBnB in West Philly and helped water plants here."
                    colorTextBack="black"
                    ></flashcard>
                  <flashcard
                    front="Who?"
                    imgFront="img/guess/beckyparents.jpg"
                    back="Barbara and Benny Mer!"
                    imgBack="img/guess/beckyparents.jpg"
                    imgBackWidth="350"
                    imgFrontWidth="350"
                    headerFront="Guess that photo"
                    footerFront="Click to show answer"
                    footerBack="These are Becky's parents. They live in Rhode Island!"
                    colorTextBack="black"
                    ></flashcard>
                    <flashcard
                      front="Hello"
                      imgFront="https://vuejs.org/images/logo.png"
                      back="Bye"
                      imgBack="https://vuejs.org/images/logo.png"
                      headerFront="Guess that photo"
                      headerBack="This is the answer"
                      colorTextBack="black"
                      ></flashcard>

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
