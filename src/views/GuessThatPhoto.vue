<template>
    <div>
        <div class="position-relative">
            <!-- shape Hero -->
            <section class="section-shaped my-0">
                <div class="shape shape-style-1 shape-default shape-skew">
                </div>
                <div class="container shape-container d-flex">
                  <flashcard
                    front="Gardens"
                    imgFront="img/guess/warringtongardens.jpg"
                    back="Warrington gardens!"
                    imgBack="img/guess/warringtongardens.jpg"
                    imgBackWidth="350"
                    imgFrontWidth="350"
                    headerFront="Guess that photo"
                    footerFront="Click to show answer"
                    footerBack="Click to hide answer"
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
