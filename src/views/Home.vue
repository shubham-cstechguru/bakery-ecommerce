<template>
  <div
    class="home"
    >
    <Banner
      pageTitle="Home"
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
            Our Featured Cakes
            <hr />
          </h3>
          <p
            class="ecom_p"
            >
            Seldolor sit amet consect etur
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
              v-for="product in products"
              :key="product.id"
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
      class="services"
      >
      <b-container>
        <div
        class="text-center"
        >
          <h3
            class="ecom_h3"
            >
            Services We Offer
          </h3>
          <hr />
        </div>
        <b-row>
          <b-col
            lg="4"
            md="6"
            sm="6"
            xs="6"
            v-for="(service, i) in services"
            :key="i"
            >
            <ServicesCard
              :service="service"
              >
            </ServicesCard>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section
      class="newproduct"
      >
      <b-container>
        <div
          class="text-center"
          >
          <h3
            class="ecom_h3"
            >
            New Arrivals
          </h3>
          <hr />
        </div>
        <b-row>
          <b-col
            md="5"
            class="d-none d-sm-none d-md-block"
            >
            <div
              class="image_prod d-flex"
              >
              <img
                src="@/assets/single_blog_5.png"
                alt=""
                class="img-responsive"
                >
            </div>
          </b-col>
          <b-col
            md="7"
            >
            <VueSlickCarousel
              v-bind="settings"
              >
              <div
                class="card_slide"
                v-for="(product,i) in products"
                :key="i"
              >
                <ProductCard
                  :product="product"
                  >
                </ProductCard>
              </div>
            </VueSlickCarousel>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section
      class="blogs"
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
            Latest Blogs
            <hr />
          </h3>
          <p
            class="ecom_p"
            >
            an turn into your instructor your helper, your
          </p>
        </div>
        <b-row
          class="pt-5"
          >
          <b-col
            lg="4"
            class="d-none d-sm-none d-md-none d-lg-block"
            >
            <b-card
              overlay
              img-src="https://cakecious2.bolvo.com/demo2/wp-content/uploads/sites/8/2018/06/l-news-1.jpg"
              img-alt="Card Image"
              text-variant="white"
              >
              <b-card-text
              class="text_blog"
              >
                Best ways to create a extra ordinary cake.
              </b-card-text>
            </b-card>
          </b-col>
          <b-col
            lg="8"
            class="m-0 p-0"
            >
            <VueSlickCarousel
              :arrows="false"
              :dots="true"
              :slidesToShow="2"
              :infinite="true"
              :autoplay="true"
              >
              <div
                class="blog_card"
                v-for="(blog, i) in blogs"
                :key="i"
              >
                <BlogCard
                  :blog="blog"
                  >
                </BlogCard>
              </div>
            </VueSlickCarousel>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
// @ is an alias to /src
import Banner from "@/components/Banner"
import ProductCard from "@/components/ProductCard"
import ServicesCard from "@/components/ServicesCard"
import BlogCard from "@/components/BlogCard"
export default {
  name: 'Home',
  components: {
    Banner,
    ProductCard,
    ServicesCard,
    BlogCard,
    VueSlickCarousel
  },
  data (){
    return {
      settings: [
        {
          "dots": true,
          "arrows": false,
          "infinite": true,
          "speed": 500,
          "autoplay": true,
          "slidesToShow": 2.3,
          "slidesToScroll": 2,
          "initialSlide": 0,
          "responsive": [
            {
              "breakpoint": 1360,
              "settings": {
                "slidesToShow": 2,
                "slidesToScroll": 1,
                "infinite": true,
                "dots": true
              }
            },
            {
              "breakpoint": 1175,
              "settings": {
                "slidesToShow": 1.4,
                "slidesToScroll": 1,
                "initialSlide": 2
              }
            },
            {
              "breakpoint": 770,
              "settings": {
                "slidesToShow": 1.8,
                "slidesToScroll": 1
              }
            },
            {
              "breakpoint": 560,
              "settings": {
                "slidesToShow": 1.4,
                "slidesToScroll": 1
              }
            }
          ]
        }
      ],
      products: [
        {
          name: "Custom Cake Builder",
          image: "product.jpg",
          id: 1,
          price: 18.00,
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
      ],
      services: [
        {
          name: "Cakes",
          font: "flaticon-cake",
          id: 1,
          desc: "We offer the best cookies cakes. Lorem Ipsum is simply my text of the printing and Ipsum."
        },
        {
          name: "Customized Cakes",
          font: "flaticon-cake-1",
          id: 2,
          desc: "We offer the best cookies cakes. Lorem Ipsum is simply my text of the printing and Ipsum."
        },
        {
          name: "Pastries",
          font: "flaticon-muffin",
          id: 3,
          desc: "We offer the best cookies cakes. Lorem Ipsum is simply my text of the printing and Ipsum."
        },
        {
          name: "Gifts",
          font: "flaticon-gift",
          id: 4,
          desc: "We offer the best cookies cakes. Lorem Ipsum is simply my text of the printing and Ipsum."
        },
        {
          name: "Menu",
          font: "flaticon-menu",
          id: 5,
          desc: "We offer the best cookies cakes. Lorem Ipsum is simply my text of the printing and Ipsum."
        },
        {
          name: "Delivery",
          font: "flaticon-delivery",
          id: 6,
          desc: "We offer the best cookies cakes. Lorem Ipsum is simply my text of the printing and Ipsum."
        }
      ],
      blogs : [
        {
          title: 'A small river named Duden flows',
          desc: 'Pityful a rethoric question ran over her cheek, then she continued her way. On her way she met a copy. The copy warned the ...',
          id: '1',
          image: 'blog-1.jpg',
        },
        {
          title: 'A small river named Duden flows',
          desc: 'Pityful a rethoric question ran over her cheek, then she continued her way. On her way she met a copy. The copy warned the ...',
          id: '2',
          image: 'blog.jpg',
        },
        {
          title: 'A small river named Duden flows',
          desc: 'Pityful a rethoric question ran over her cheek, then she continued her way. On her way she met a copy. The copy warned the ...',
          id: '3',
          image: 'blog.jpg',
        },
        {
          title: 'A small river named Duden flows',
          desc: 'Pityful a rethoric question ran over her cheek, then she continued her way. On her way she met a copy. The copy warned the ...',
          id: '4',
          image: 'blog.jpg',
        },
      ]
    }
  }
}
</script>

<style media="screen" lang="css" scoped>
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
  right: -221px;
  top: -25px;
}
.services{
  background: #f195b2;
  padding: 36px 0px;
  margin-top: 50px;
  padding-bottom: 70px;
}
.services .text-center .ecom_h3{
  font-family: 'PT Serif';
  font-size: 39px;
  font-weight: bold;
  margin: 36px 0 0px 0;
  display: inline-block;
  color: #ffffff;
}
.services hr{
  width: 70px;
  background: #ffffff;
  position: relative;
  margin-bottom: 29px;
}

.newproduct{
  padding-top: 50px;
  padding-bottom: 90px;
}
.newproduct .text-center .ecom_h3{
  font-family: 'PT Serif';
  font-size: 39px;
  font-weight: bold;
  margin: 36px 0 0px 0;
  display: inline-block;
  color: #3e606b;
}
.newproduct hr{
  width: 70px;
  background: #3e606b;
  position: relative;
  margin-bottom: 29px;
}
.newproduct .card_slide{
  width: 18rem;
  list-style: none;
}
.newproduct .image_prod{
  display: block;
  height: 360px;
  width: auto;
  position: relative;
  z-index: 0;
  overflow: hidden;
}

.blogs{
  background: #f5f5f5;
  padding-top: 20px;
  padding-bottom: 50px;
  margin-bottom: -50px;
  border-bottom: 1px solid #d4d4d4;
}
.blogs .text-left .ecom_h3{
  font-family: 'PT Serif';
  font-size: 39px;
  font-weight: bold;
  margin: 36px 0 0px 0;
  display: inline-block;
  color: #3e606b;
}
.blogs .text-left .ecom_p{
  font-family: 'PT Serif';
  font-size: 20px;
  font-style: italic;
  color: #555;
  margin-top: -20px;
}
.blogs hr{
  width: 70px;
  background: #3e606b;
  position: relative;
  right: -158px;
  top: -25px;
}
.blogs .card-img {
  display: block;
  height: 440px;
  width: 100%;
  position: relative;
  z-index: 0;
  overflow: hidden;
}
.blogs .text_blog{
  position: relative;
  top: 320px;
  color: #ffffff;
  font-size: 25px;
  font-weight: bold;
  margin-left: 20px;
  line-height: 29px;
}
.blogs .blog_card{
  width: 25rem;
  list-style: none;
}
.blogs .card{
  background: none;
  border: none;
}
@media (max-width: 576px){
  .blogs .text-left .ecom_p{
    margin-top: 0px;
  }
}
</style>
