<template lang="html">
  <div
    class="contact"
    >
    <Banner
      pageTitle="Contact"
      />
    <section
      class="contact_us"
      >
      <b-container>
        <div
          class="text-left"
          >
          <h3
            class="ecom_h3"
            >
            Get In Touch
            <hr />
          </h3>
          <p
            class="ecom_p"
            >
            Do you have anything in your mind to let us know? Kindly don't delay to connect to us by means of our contact form.
          </p>
        </div>
        <!--<form class="my-5">
          <div class="form-row">
            <div class="form-group col-md-6">
              <input type="text" class="form-control" placeholder="First Name">
            </div>
            <div class="form-group col-md-6">
              <input type="text" class="form-control" placeholder="Last Name">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <input type="text" class="form-control" placeholder="Mobile Number">
            </div>
            <div class="form-group col-md-6">
              <input type="email" class="form-control" placeholder="Email-Id">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-12">
              <textarea placeholder="Your Message" rows="10" class="form-control">
              </textarea>
            </div>
          </div>
          <button type="submit" class="button">Submit Now</button>
        </form>-->
        <b-form
          >
          <b-row>
            <b-col
              cols="6"
              >
              <b-form-group
                id="input-group-1"
                >
                <b-form-input
                  id="input-1"
                  v-model="form.name"
                  placeholder="Enter Name"
                  required
                  >
                </b-form-input>
              </b-form-group>
            </b-col>
            <b-col
              cols="6"
              >
              <b-form-group
                id="input-group-2"
                >
                <b-form-input
                  id="input-2"
                  v-model="form.email"
                  type="email"
                  placeholder="Enter email"
                  required
                  >
                </b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col
              cols="12"
              >
              <b-form-group
                id="input-group-3"
                >
                <b-form-input
                  id="input-3"
                  v-model="form.subject"
                  placeholder="Enter Your Subject"
                  required
                  >
                </b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-form-textarea
            id="textarea"
            v-model="text"
            placeholder="Enter something..."
            rows="6"
            max-rows="6"
            >
          </b-form-textarea>
            <b-button type="submit" variant="primary" class="button color">Submit</b-button>
            <b-button type="reset" variant="danger" class="button">Reset</b-button>
        </b-form>
      </b-container>
    </section>
  </div>
</template>

<script>
import Banner from "@/components/Banner"
export default {
  name: "contact",
  components: {
    Banner
  },
  data() {
     return {
       form: {
         firstname: '',
         email: '',
         subject: '',
       },
     }
   },
}
</script>

<style lang="css" scoped>
.text-left .ecom_h3{
  font-family: 'PT Serif';
  font-size: 39px;
  font-weight: bold;
  margin: 36px 0 0px 0;
  display: inline-block;
  color: #3e606b;
}
.text-left .ecom_p{
  font-family: 'PT Serif';
  font-size: 20px;
  font-style: italic;
  color: #555;
  margin-top: -20px;
  margin-bottom: 50px;
}
.contact_us hr{
  width: 70px;
  background: #3e606b;
  position: relative;
  right: -160px;
  top: -25px;
}
.contact_us .button{
  color: #ffffff;
  border: none;
  padding: 7px 9px;
  border-radius: 2px;
  margin-top: 20px;
  margin-right: 20px;
}
.color{
  background-color: #f195b2;
}
</style>
