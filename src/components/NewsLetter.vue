<template lang="html">
  <div
    class="news">
    <b-container
      class="mt-5"
      >
      <b-row>
        <b-col
          lg="6"
          class="text-left text_news"
          >
          Join our Newsletter list to get all the latest offers, discounts and other benefits.
        </b-col>
        <b-col
          lg="6"
          >
          <b-form class="form_news">
            <b-input-group
              id="input-group-1"
              label-for="input-1"
              class="m-auto"
              >
              <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                placeholder="Enter email"
                required
                >
              </b-form-input>
              <b-input-group-append>
                <b-button type="submit" class="form_btn px-3">Subscribe</b-button>
              </b-input-group-append>
            </b-input-group>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Newsletter",
  data() {
   return {
     form: {
       email: '',
     },
     show: true
   }
 },
}
</script>

<style lang="css" scoped>
.news{
  background: #f195b2;
  padding-bottom: 27px;
  color: #ffffff;
}
.row{
  padding-top: 27px;
}
.text_news{
  font-size: 23px;
  font-family: Work Sans;
  font-weight: 500;
}
.form_news{
  position: relative;
  top: 27%;
}
.form_btn{
  background-color: #94c9d9;
  color: #ffffff;
  border: none;
  border-radius: 2px;
}

</style>
