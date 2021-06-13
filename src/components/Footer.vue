<template lang="html">
  <div class="">
    <footer class="footer">
      <div class="footer_main">
        <b-container>
          <b-row>
            <b-col sm="12" lg="3" class="clearfix">
              <img src="@/assets/BakeryLogo_040414.png" height="50">
              <p class="text-left mt-2 foot_about">Cakecious is a WordPress theme for Bakery and related businesses.</p>
              <div class="row">
                <div class="clearfix d-flex mt-2 p-0">
                  <span class="size">
                    <i class="flaticon-facebook"></i>
                    <i class="flaticon-instagram"></i>
                    <i class="flaticon-linkedin"></i>
                    <i class="flaticon-twitter"></i>
                  </span>
                </div>
              </div>
            </b-col>
            <b-col sm="6" md="4" lg="3" class="clearfix">
              <div class="list">
                <h2 class="text-left fhead">Quick Links</h2>
                <hr />
                <ul>
                  <li><a href="#">Cakes</a></li>
                  <li><a href="#">Gifts</a></li>
                  <li><a href="#">Offers</a></li>
                  <li><a href="#">Customized Cakes</a></li>
                </ul>
              </div>
            </b-col>
            <b-col sm="6" md="4" lg="3" class="clearfix">
              <div class="list">
                <h2 class="text-left fhead">Quick Links</h2>
                <hr />
                <ul>
                  <li><a href="#">Blogs</a></li>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Faq's</a></li>
                  <li><a href="#">Terms and Condition</a></li>
                </ul>
              </div>
            </b-col>
            <b-col md="4" lg="3" class="clearfix">
              <h2 class="text-left fhead">Contact Us</h2>
              <hr />
              <div>
                <div class="contact_info">
                  <b-row>
                    <b-col cols="2">
                      <span class="size">
                        <i class="flaticon-whatsapp"></i>
                      </span>
                    </b-col>
                    <b-col cols="10">
                      <p class="ecom_font">+91 722 981 4000</p>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col cols="2">
                      <span class="size">
                        <i class="flaticon-phone-contact"></i>
                      </span>
                    </b-col>
                    <b-col cols="10">
                      <p class="ecom_font">+91 722 981 4000</p>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col cols="2">
                      <span class="size">
                        <i class="flaticon-email"></i>
                      </span>
                    </b-col>
                    <b-col cols="10">
                      <p class="ecom_font">ecom@ecommerce.com</p>
                    </b-col>
                  </b-row>
                </div>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </div>
      <div class="footer_copy">
        <b-container>
          <b-row>
            <b-col cols="12" class="m-auto">
              <p class="text-center">Copyright ©2020 All rights reserved Under Wish To Special | This Website is made with by Suncity Group</p>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
/*footer*/
.footer{
  background-color: #303339;
  padding-top: 50px;
  padding-bottom: 11px;
}
.footer .footer_main .container{
  padding-bottom: 50px;
  border-bottom: 0.5px solid #797979;
}
.footer .footer_copy .container{
  padding-top: 20px;
  color: #8a8a8a;
}
.footer .list ul
{
	margin: 23px 0px 0px 0px;
	padding: 0px;
  list-style: none;
}
.footer .list ul li a
{
	text-decoration: none;
	color: #a8a8a8;
  font-size: 0.7rem;
  transition: 1s ease;
}
.footer .list ul li{
  padding-bottom: 7px;
}
.footer .list ul li a:hover
{
	cursor: pointer;
  color: #f195b2;
}
.footer .fhead
{
	font-size: 20px;
  font-weight: bold;
  margin-bottom: 25px;
  color: #ffffff;
  font-family: 'PT Sans';
}
.footer .contact_info{
  margin-top: 23px;
  margin-left: -20px;
  padding-bottom: 20px;
}
.footer .ecom_font{
  font-size: 0.9rem;
  padding-top: 2px;
  margin-left: 18px;
  color: #a8a8a8;
}
.footer .ecom_font:hover{
  color: #f195b2;
}
.footer .foot_about{
  color: #a8a8a8;
}
.footer hr{
  position: relative;
  right: 41%;
  width: 18%;
  padding-bottom: 2px;
  background-color: #f195b2;
  border: 0;
  margin-top: -18px !important;
}
.size{
  color: #fff;
}
.size i {
  font-size: 20px;
  margin-left: 11px;
}
.size i:hover {
  color: #f195b2;
  transform: rotate(15deg);
}
i:hover .ecom_font{
  color: #f195b2;
}

@media (max-width: 576px){
  .footer .list ul li a
  {
    font-size: 1.1rem;
  }
  .footer .fhead
  {
    margin-top: 27px;
  }
}
@media (min-width: 577px) and (max-width: 768px){
  .footer .list ul li a
  {
    font-size: 1.4rem;
  }
  .footer .fhead
  {
    margin-top: 45px;
    font-size: 29px;
  }
  .footer .ecom_font{
    font-size: 1.4rem;
  }
  .size i {
    font-size: 27px;
  }
}
</style>
