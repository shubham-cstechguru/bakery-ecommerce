<template lang="html">
  <div
    class="cake"
    >
    <Banner
      pageTitle="Cakes"
      />
    <section
      class="bakery_product"
      >
      <b-container
        class="mt-5"
        >
        <div
          class="text-left"
          >
          <h3
            class="ecom_h3"
            >
            Cakes
            <hr />
          </h3>
          <p
            class="ecom_p"
            >
            Baking schools closed during this time so when the war did eventually end there was an absence of skilled bakers. This resulted in new methods being developed to satisfy the world’s desire for bread.
          </p>
        </div>
          <b-row
            class="card_slide"
            >
            <b-col
              lg="3"
              md="4"
              sm="6"
              xs="6"
              :key="product.id"
              v-for="product in products"
              >
              <ProductCard
                :product="product"
                >
              </ProductCard>
            </b-col>
          </b-row>
      </b-container>
    </section>
    <section
      class="parallax"
      >
      <div
        class="parallax-inner"
        >
        <b-container>
          <b-col cols="12">
            <VueSlickCarousel
              :arrows="true"
              :dots="false"
              :slidesToShow="1"
              :infinite="true"
              :autoplay="true"
              >
              <div
                v-for="offer in offers"
                :key="offer.id"
                >
                <OfferCard
                  :offer="offer"
                  />
              </div>
            </VueSlickCarousel>
          </b-col>
        </b-container>
      </div>
    </section>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import Banner from "@/components/Banner"
import ProductCard from "@/components/ProductCard"
import OfferCard from "@/components/OfferCard"
export default {
  name: "cake",
  components: {
    Banner,
    ProductCard,
    OfferCard,
    VueSlickCarousel
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
      offers: [
        {
          name: "Special Offer",
          image: "product.jpg",
          id: 1,
          Description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi equatur uis autem vel eum.",
        },
        {
          name: "Special Offer",
          image: "product.jpg",
          id: 2,
          Description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi equatur uis autem vel eum.",
        },
        {
          name: "Special Offer",
          image: "product.jpg",
          id: 3,
          Description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi equatur uis autem vel eum.",
        },
        {
          name: "Special Offer",
          image: "product.jpg",
          id: 4,
          Description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi equatur uis autem vel eum.",
        },
        {
          name: "Special Offer",
          image: "product.jpg",
          id: 5,
          Description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi equatur uis autem vel eum.",
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
.parallax{
  width: 100%;
  object-fit: contain;
  background-size: 100% 100%;
  background-image: url(../assets/blog-1.jpg);
  background-attachment: fixed;
}
.parallax-inner{
  background-color: rgba(0, 0, 0, 0.7);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
}
</style>
