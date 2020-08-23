<template>
    <section class="section section-shaped section-lg my-0">
        <div class="shape shape-style-1 bg-gradient-default">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="container pt-lg-md">
            <div class="row justify-content-center">
                <div class="col-lg-5">
                    <card type="secondary" shadow
                          header-classes="bg-white pb-5"
                          body-classes="px-lg-5 py-lg-5"
                          class="border-0">
                        <template>
                              <base-input 
                                          type="password"
                                          v-model="password"
                                          placeholder="Password"
                                          @keyup.enter = "passwordCheck" 
                                          addon-left-icon="ni ni-lock-circle-open">
                              </base-input>
                              <div>{{ passwordValidationString }}</div>
                              <div class="text-center">
                                  <base-button @click="passwordCheck" type="primary" class="my-4">Sign In</base-button>
                              </div>
                        </template>
                    </card>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
  name: 'login',
  data () {
    return {
      password: null,
      passwordValidationString: ''
    }
  },
  mounted() {console.log(localStorage.password)},
  methods: {
    passwordCheck() {
      if(this.password == "wedding") {
        localStorage.password = this.password;
        this.$router.push('/')
      } else {
        this.passwordValidationString = "Incorrect Password."
      }
    }
  }
};
</script>
<style>
</style>
