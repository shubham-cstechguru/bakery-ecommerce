<template lang="html">
  <div
    class="banner"
    >
    <section
      class="banner_area"
      v-if="pageTitle === 'Home'"
      >
      <div
        class="banner_text"
        >
        <p
          class="tt-content">
          Find the best Cakes & Gifts
        </p>
      </div>

      <div
        class="location pb-5 mb-5"
        >
        <b-container>
          <b-col
            md="6"
            sm="11"
            class="m-auto"
            >
            <b-input-group
              prepend="Select City"
              class="m-auto"
              >
              <b-form-select
                v-model="selected"
                :options="options"
                >
              </b-form-select>
              <div
                class="mt-3"
                >
                Selected:
                <strong>
                  {{ selected }}
                </strong>
              </div>
            </b-input-group>
          </b-col>
        </b-container>
      </div>
    </section>
    <section class="banner_area" v-else>
      <div class="banner_text">
        <h3 class="tt-title">{{ pageTitle }}</h3>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: "banner",
  props: {
    pageTitle: String,
  },
  data() {
      return {
        selected: null,
        options: [
          { value: null, text: 'Please select an option' },
          { value: 'a', text: 'This is First option' },
          { value: 'b', text: 'Selected Option' },
          { value: { C: '3PO' }, text: 'This is an option with object value' },
          { value: 'd', text: 'This one is disabled', disabled: true }
        ]
      }
    }
}
</script>

<style lang="css" scoped>
.banner_area{
  position: relative;
  padding-top: 200px;
  padding-bottom: 70px;
  min-height: 145px;
  background: linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(../assets/slider1.jpg) no-repeat scroll center center;
  background-size: cover;
}
.banner_text{
  text-align: center;
  padding-bottom: 20px;
}
.banner_text h3{
  color: #fff;
  padding-bottom: 20px;
  font-family: "PT Sans", serif;
  font-weight: bold;
  font-size: 62px;
}
.banner_text p{
  color: #fff;
  font-family: "Work Sans", serif;
  font-size: 45px;
}
.location .input-group-text{
  color: #fff;
  background-color: #f195b2;
  padding: 9px 20px;
  font-size: 20px;
}
.location .custom-select{
  padding: 6px 20px;
  font-size: 25px;
  outline: none;
  box-shadow: none;
}
@media (max-width: 768px){
  .banner_area{
    padding-top: 140px;
    padding-bottom: 11px;
  }
  .banner_text{
    text-align: center;
    padding-bottom: 16px;
  }
  .banner_text p{
    margin: 0px 9px;
    font-size: 25px;
  }
  .location .input-group-text{
    padding: 9px;
    font-size: 20px;
    border: none;
  }
  .location .custom-select{
    padding: 5px;
    font-size: 20px;
    width: 70%;
    border: none;
    outline: none;
    box-shadow: none;
  }
}
</style>
