<template>
  <div
    class="about"
    >
    <Banner
      pageTitle="About"
      />
    <section
      class="about_us"
      >
      <b-container>
        <div
          class="text-center"
          >
          <h3
            class="ecom_h3"
            >
            Our Bakery Approach
          </h3>
          <hr />
          <p
            class="ecom_p"
            >
            This drastic appeal for baked goods promoted baking all throughout Europe and expanded into the eastern parts of Asia. Bakers started baking breads and goods at home and selling them out on the streets.
          </p>
          <p>
            Baked goods have been around for thousands of years. The art of baking was developed early during the Roman Empire. It was a highly famous art as Roman citizens loved baked goods and demanded for them frequently for important occasions such as feasts and weddings etc. Due to the fame and desire that the art of baking received, around 300 BC, baking was introduced as an occupation and respectable profession for Romans.
          </p>
        </div>
        <b-row>
          <b-col
            md="4"
            >
            <img
              src="@/assets/bakery-1.jpg"
              alt=""
              class="img-responsive"
              >
          </b-col>
          <b-col
            md="4"
            >
            <img
              src="@/assets/bakery-2.jpg"
              alt=""
              class="img-responsive"
              >
          </b-col>
          <b-col
            md="4"
            >
            <img
              src="@/assets/bakery-3.jpg"
              alt=""
              class="img-responsive"
              >
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section
      class="about_us"
      >
      <b-container>
        <div
          class="text-center"
          >
          <h3
            class="ecom_h3"
            >
            Our Real taste
          </h3>
          <hr />
          <p
            class="ecom_p">
            This drastic appeal for baked goods promoted baking all throughout Europe and expanded into the eastern parts of Asia. Bakers started baking breads and goods at home and selling them out on the streets.
          </p>
          <p>
            Baked goods have been around for thousands of years. The art of baking was developed early during the Roman Empire. It was a highly famous art as Roman citizens loved baked goods and demanded for them frequently for important occasions such as feasts and weddings etc. Due to the fame and desire that the art of baking received, around 300 BC, baking was introduced as an occupation and respectable profession for Romans.
          </p>
        </div>
        <b-row>
          <b-col
            md="4"
            >
            <img
              src="@/assets/bakery-1.jpg"
              alt=""
              class="img-responsive"
              >
          </b-col>
          <b-col
            md="4"
            >
            <img
              src="@/assets/bakery-2.jpg"
              alt=""
              class="img-responsive"
              >
          </b-col>
          <b-col
            md="4"
            >
            <img
              src="@/assets/bakery-3.jpg"
              alt=""
              class="img-responsive"
              >
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section
      class="about_us"
      >
      <b-container>
        <div
          class="text-center"
          >
          <h3
            class="ecom_h3"
            >
            Our Mission & Vision
          </h3>
          <hr />
          <p
            class="ecom_p"
            >
            This drastic appeal for baked goods promoted baking all throughout Europe and expanded into the eastern parts of Asia. Bakers started baking breads and goods at home and selling them out on the streets.
          </p>
          <p>
            Baked goods have been around for thousands of years. The art of baking was developed early during the Roman Empire. It was a highly famous art as Roman citizens loved baked goods and demanded for them frequently for important occasions such as feasts and weddings etc. Due to the fame and desire that the art of baking received, around 300 BC, baking was introduced as an occupation and respectable profession for Romans.
          </p>
        </div>
        <b-row>
          <b-col
            md="4"
            >
            <img
              src="@/assets/bakery-1.jpg"
              alt=""
              class="img-responsive"
              >
          </b-col>
          <b-col
            md="4"
            >
            <img
              src="@/assets/bakery-2.jpg"
              alt=""
              class="img-responsive"
              >
          </b-col>
          <b-col
            md="4"
            >
            <img
              src="@/assets/bakery-3.jpg"
              alt=""
              class="img-responsive"
              >
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
import Banner from "@/components/Banner"
export default {
  name: "about",
  components: {
    Banner,
  },
}
</script>

<style media="screen" lang="css" scoped>
.about_us .text-center .ecom_h3{
  font-family: 'PT Serif';
  font-size: 39px;
  font-weight: bold;
  margin: 36px 0 0px 0;
  display: inline-block;
  color: #3e606b;
}
.about_us .ecom_p{
  font-family: 'PT Serif';
  font-size: 20px;
  font-style: italic;
  color: #555;
  margin-top: -20px;
}
.about_us p{
  font-family: 'Work Sans';
  font-size: 18px;
  color: #555;
  margin-top: 50px;
}
.about_us hr{
  width: 70px;
  background: #3e606b;
  position: relative;
  margin-bottom: 29px;
}
</style>
