<template lang="html">
  <div
    class="product_detail"
    >
    <Banner
      pageTitle="Product Detail"
      />
    <section
      class="prod_detail my-5"
      >
      <b-container>
        <b-row>
          <b-col
            lg="6"
            md="7"
            >
            <ProductZoomer
              :base-images="images"
              :base-zoomer-options="zoomerOptions"
              />
          </b-col>
          <b-col
            lg="6"
            md="5"
            class="details"
            >
						<h3
              class="product-title mt-0"
              >
              men's shoes fashion
            </h3>
            <h4
              class="price mb-2"
              >
              <span>$&nbsp;&nbsp;&nbsp;180</span></h4>
						<div
              class="my-3"
              >
							<div
                class="stars"
                >
								<span class="flaticon-star checked"></span>
								<span class="flaticon-star checked"></span>
								<span class="flaticon-star checked"></span>
								<span class="flaticon-star"></span>
								<span class="flaticon-star"></span>
							</div>
							<span class="review-no">41 reviews</span>
						</div>
						<p
              class="product-description"
              >
              Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus posuere.
            </p>
						<h5
              class="sizes"
              >
              sizes:
							<span class="size" data-toggle="tooltip" title="small">s</span>
							<span class="size" data-toggle="tooltip" title="medium">m</span>
							<span class="size" data-toggle="tooltip" title="large">l</span>
							<span class="size" data-toggle="tooltip" title="xtra large">xl</span>
						</h5>
						<h5
              class="weights"
              >
              weight:
              <span class="weight" data-toggle="tooltip" title="small">2kg</span>
							<span class="weight" data-toggle="tooltip" title="medium">5kg</span>
						</h5>
						<div>
              <b-button type="submit" class="add-to-cart">Add to cart</b-button>
						</div>
          </b-col>
        </b-row>
        <b-row
          class="detail_tab mt-5 pt-5"
          >
          <b-tabs
            content-class="mt-3"
            >
            <b-tab
              title="Description"
              active
              class="prod_desc"
              >
              <h2>Description</h2>
              <p>This product is a demo to build your own product. This particular product is created for Cakes, but you can use this feature to any other type also, like Build your Cake, Custom Cake builder, Build your cupcake plate, etc.</p>
              <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
            </b-tab>
            <b-tab
              title="Review"
              >
              <b-container>
                <b-row
                  class="mt-5 mx-5"
                  >
                  <b-col cols="1">
                    <img src="@/assets/default_user.png" alt="" width="50" height="50">
                  </b-col>
                  <b-col cols="11">
                    <b-card>
                      <blockquote
                        class="blockquote mb-0"
                        >
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        <div
                        class="stars mb-2"
                        >
                        <span class="flaticon-star checked"></span>
                        <span class="flaticon-star checked"></span>
                        <span class="flaticon-star checked"></span>
                        <span class="flaticon-star-1"></span>
                        <span class="flaticon-star-1"></span>
                      </div>
                        <footer
                          class="blockquote-footer"
                          >
                          Someone famous in <cite title="Source Title">Source Title</cite>
                        </footer>
                      </blockquote>
                    </b-card>

                  </b-col>
                </b-row>
                <b-row
                  class="mt-5 mx-5"
                  >
                  <b-col cols="1">
                    <img src="@/assets/default_user.png" alt="" width="50" height="50">
                  </b-col>
                  <b-col cols="11">
                    <b-card>
                      <blockquote
                        class="blockquote mb-0"
                        >
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        <div
                        class="stars mb-2"
                        >
                        <span class="flaticon-star checked"></span>
                        <span class="flaticon-star checked"></span>
                        <span class="flaticon-star checked"></span>
                        <span class="flaticon-star-1"></span>
                        <span class="flaticon-star-1"></span>
                      </div>
                        <footer
                          class="blockquote-footer"
                          >
                          Someone famous in <cite title="Source Title">Source Title</cite>
                        </footer>
                      </blockquote>
                    </b-card>

                  </b-col>
                </b-row>
              </b-container>
            </b-tab>
          </b-tabs>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
import Banner from "@/components/Banner"
export default {
  name: "cart",
  components: {
    Banner,
  },
  data() {
    return {
      images: {
        thumbs: [
          {
            id: 1,
            url:
            "https://yoohooworld.com/assets/images/vue_product_zoomer/normal_size/1.jpeg"
          },
          {
            id: 2,
            url:
            "https://yoohooworld.com/assets/images/vue_product_zoomer/normal_size/2.jpeg"
          },
          {
            id: 3,
            url:
            "https://yoohooworld.com/assets/images/vue_product_zoomer/normal_size/3.jpeg"
          },
          {
            id: 4,
            url:
            "https://yoohooworld.com/assets/images/vue_product_zoomer/normal_size/4.jpeg"
          },
        ],
        normal_size: [
          {
            id: 1,
            url:
            "https://yoohooworld.com/assets/images/vue_product_zoomer/normal_size/1.jpeg"
          },
          {
            id: 2,
            url:
            "https://yoohooworld.com/assets/images/vue_product_zoomer/normal_size/2.jpeg"
          },
          {
            id: 3,
            url:
            "https://yoohooworld.com/assets/images/vue_product_zoomer/normal_size/3.jpeg"
          },
          {
            id: 4,
            url:
            "https://yoohooworld.com/assets/images/vue_product_zoomer/normal_size/4.jpeg"
          },
        ],
        large_size: [
          {
            id: 1,
            url:
            "https://yoohooworld.com/assets/images/vue_product_zoomer/normal_size/1.jpeg"
          },
          {
            id: 2,
            url:
            "https://yoohooworld.com/assets/images/vue_product_zoomer/normal_size/2.jpeg"
          },
          {
            id: 3,
            url:
            "https://yoohooworld.com/assets/images/vue_product_zoomer/normal_size/3.jpeg"
          },
          {
            id: 4,
            url:
            "https://yoohooworld.com/assets/images/vue_product_zoomer/normal_size/4.jpeg"
          },
        ]
      },
      zoomerOptions: {
        zoomFactor: 3, // scale for zoomer
        pane: 'container-round', // three type of pane ['pane', 'container-round', 'container']
        hoverDelay: 300, // how long after the zoomer take effect
        namespace: 'zoomer', // add a namespace for zoomer component, useful when on page have mutiple zoomer
        move_by_click:false, // move image by click thumb image or by mouseover
        scroll_items: 4, // thumbs for scroll
        choosed_thumb_border_color: "#bbdefb", // choosed thumb border color
        scroller_button_style: "line",
        scroller_position: "bottom",
        zoomer_pane_position: "right"
      }
    }
  }
}
</script>

<style lang="css" scoped>
.details {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  margin-top: 9px;
}
.flaticon-star{
  color: #f195b2;
}
.flaticon-star-1{
  color: #f195b2;
}
.product-title, .price, .sizes, .weights {
  text-transform: UPPERCASE;
  font-family: "PT Sans"
}
.price, .sizes, .weights {
  margin-top: 11px;
}
.price{
  color: #f195b2;
  font-style: italic;
  font-weight: 600;
  font-size: 25px;
}
.product-description{
  font-size: 18px;
  font-family: "Work Sans";
  margin: 5px 0px;
}
.sizes, .weights {
  margin: 11px 0px;
  display: flex;
}
.size, .weight {
  margin-right: 10px;
  color: #000000;
  font-weight: bold;
  background-color: #f195b2;
  padding: 3px 8px;
  border-radius: 5px;
  color: #ffffff;
}
.size:first-of-type {
  margin-left: 40px;
}
.weight:first-of-type {
  margin-left: 16px;
}
.add-to-cart{
  background: #f195b2;
  padding: 11px 15px;
  border: none;
  text-transform: UPPERCASE;
  color: #fff;
  margin-top: 14px;
  -webkit-transition: background .3s ease;
  transition: background .3s ease;
  font-size: 16px;
}
.prod_desc h2{
  font-family: "Work Sans";
  font-weight: 200;
  font-size: 36px;
  margin: 25px 0px;
}
.prod_desc p{
  font-family: "Work Sans";
  font-size: 16px;
  margin: 11px 0px;
}
@media (max-width: 768px){
  .zoomer-base-container{
    margin: auto;
  }
  .details{
    margin-top: 50px;
    margin-left: 7%;
    margin-right: 7%;
  }
  .detail_tab{
    margin-top: 50px;
    margin-left: 7%;
    margin-right: 7%;
  }
}
@media (min-width: 768px) and (max-width: 992px){
  .zoomer-base-container{
    margin-left: -20px;
  }
}
</style>
<style media="screen" >
.detail_tab .nav-tabs .nav-link.active{
  border-top: 3px solid #f195b2 !important;
  background-color: #ffffff;
  color: #000000;
}
.detail_tab .nav-tabs .nav-link{
  background-color: #f195b2;
  color: #ffffff;
  padding: 7px 45px !important;
  margin-right: 20px;
  transition: 0.5s ease;
}
@media (max-width: 415px){
  .product_detail .zoomer-base-container .preview-box {
    width: 299px !important;
    margin: auto !important;
  }
  .product_detail .zoomer-base-container .thumb-list {
    width: 299px !important;
    margin: 0px auto !important;
  }
  .product_detail .zoomer-base-container {
    width: 295px !important;
  }
}
</style>
