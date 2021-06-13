<template lang="html">
  <div
    class="Gift"
    >
    <Banner
      pageTitle="Gift"
      />
    <section
      class="bakery_product"
      >
      <b-container class="mt-5">
        <div class="text-left">
          <h3 class="ecom_h3">Gifts<hr /></h3>
          <p class="ecom_p">Seldolor sit amet consect etur</p>
        </div>
        <b-row class="card_slide">
          <b-col
            lg="3"
            md="4"
            sm="6"
            xs="6"
            v-for="product in products"
            :key="product.id"
            >
            <ProductCard :product="product"></ProductCard>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
import Banner from "@/components/Banner"
import ProductCard from "@/components/ProductCard"
export default {
  name: "gifts",
  components: {
    Banner,
    ProductCard
  },
  data (){
    return {
      products: [
        {
          name: "Custom Cake Builder",
          image: "product.jpg",
          id: 1,
          price: 18.21,
        },
        {
          name: "Custom Cake Builder",
          image: "product.jpg",
          id: 2,
          price: 20.00,
        },
        {
          name: "Custom Cake Builder",
          image: "product.jpg",
          id: 3,
          price: 25.00,
        },
        {
          name: "Custom Cake Builder",
          image: "product.jpg",
          id: 4,
          price: 18.00,
        },
        {
          name: "Custom Cake Builder",
          image: "product.jpg",
          id: 5,
          price: 18.00,
        },
        {
          name: "Custom Cake Builder",
          image: "product.jpg",
          id: 6,
          price: 20.00,
        },
        {
          name: "Custom Cake Builder",
          image: "product.jpg",
          id: 7,
          price: 25.00,
        },
        {
          name: "Custom Cake Builder",
          image: "product.jpg",
          id: 8,
          price: 18.00,
        },
      ],
    }
  }
}
</script>

<style lang="css" scoped>
@media (max-width: 576px){
  hr{
    display: none;
  }
  .bakery_product .text-left .ecom_p{
    margin-top: 12px !important;
  }
}
.bakery_product .text-left .ecom_h3{
  font-family: 'PT Serif';
  font-size: 39px;
  font-weight: bold;
  margin: 36px 0 0px 0;
  display: inline-block;
  color: #3e606b;
}
.bakery_product .text-left .ecom_p{
  font-family: 'PT Serif';
  font-size: 20px;
  font-style: italic;
  color: #555;
  margin-top: -20px;
}
.bakery_product hr{
  width: 70px;
  background: #3e606b;
  position: relative;
  right: -99px;
  top: -25px;
}
</style>
