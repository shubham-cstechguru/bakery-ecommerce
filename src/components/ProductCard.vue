<template lang="html">
  <div class="product">
    <b-card
      no-body
      style="max-width: 18rem;"
      class="text-center product_card"
      >
      <div class="product_img">
        <img class="card-img-top" :src="require(`@/assets/${ product.image }`)" alt="Card image cap">
      </div>
      <b-card-body
        class="p-0 mb-3"
        >
        <div class="price_box mb-0">
          <p>$ {{ product.price }}</p>
        </div>
        <b-card-text
          class="product_name pb-3"
          >
          {{ product.name }}
        </b-card-text>
        <b-button
          class="btn_cart"
          >
          Add To Cart
        </b-button>
      </b-card-body>
  </b-card>
  </div>
</template>

<script>
export default {
  name: "product-card",
  props: ['product']

}
</script>

<style lang="css" scoped>
.product_card{
  margin-bottom: 20px;
  box-shadow: 0px 0px 15px 0px rgba(40, 40, 40, 0.08);
  border: none;
  overflow: hidden;
}
.product_img{
  transition: 0.5s ease;
  opacity: 1;
}
.product_card:hover .product_img{
  transform: scale(1.1);
}
.btn_cart{
  position: relative;
  top: -16px;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: .4px;
  padding: 8px 15px;
  border-radius: 2px;
  background: #94c9d9;
  color: #ffffff;
  margin-top: 20px;
  border: none;
}
.price_box{
  position: relative;
  top: -72px;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: .4px;
  border-radius: 2px;
  background: #ffffff;
  color: #000000;
  padding: 2px 0px;
  margin: 36px 40px;
}
.price_box p{
  font-size: 1.4rem;
  font-family: 'Work Sans', sans-serif;
  font-style: italic;
}
.product_name{
  font-size: 20px;
  margin-top: -70px;
  font-family: 'PT Serif';
}
@media (max-width: 576px){
  .card{
     width: 18rem !important;
     margin: auto !important;
     margin-top: 20px !important;
   }
   .btn_cart{
     position: relative;
     top: -16px;
     font-size: 16px;
     padding: 16px 29px;
   }
   .price_box{
     padding: 9px 0px;
     margin: 36px 55px;
   }
   .price_box p{
     font-size: 1.6rem;
     margin-top: -11px;
   }
   .product_name{
     font-size: 27px;
   }
}
</style>
