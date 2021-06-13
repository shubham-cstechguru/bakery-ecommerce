<template lang="html">
  <div class="">
    <header
      class="bakery_header"
      >
      <div
        class="menu"
        >
        <b-container>
          <b-navbar
            toggleable="lg"
            type="light"
            >
            <router-link
              class="navbar-brand"
              to="/"
              >
              <img
                src="@/assets/BakeryLogo_040414.png"
                class="d-inline-block align-top"
                alt=""
                >
            </router-link>
            <b-navbar-toggle
              target="nav-collapse"
              >
            </b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav>
                <b-nav-item to="/" exact exact-active-class="active">
                  Home
                  <hr />
                </b-nav-item>
                <b-nav-item exact exact-active-class="active" to="/cake">
                  Cake
                  <hr />
                </b-nav-item>
                <b-nav-item exact exact-active-class="active" to="/customized-cake">
                  Customized Cake
                  <hr />
                </b-nav-item>
              </b-navbar-nav>
              <b-navbar-nav class="ml-auto">
                <b-nav-item to="/gift">
                  Gift
                  <hr />
                </b-nav-item>
                <b-nav-item to="/about">
                  About
                  <hr />
                </b-nav-item>
                <b-nav-item to="/blogs">
                  Blogs
                  <hr />
                </b-nav-item>
                <b-nav-item to="/contact">
                  Contact Us
                  <hr />
                </b-nav-item>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
        </b-container>
      </div>
    </header>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
/*header*/

.menu{
  box-shadow: 5px -2px 11px #888888;
  top: 0px;
  position: fixed;
  width: 100%;
  background-color: #ffffff;
  z-index: 99999;
}
.menu a{
  text-decoration: none;
  color: #555;
  font-size: 20px;
  font-weight: 1600 !important;
  margin-top: 9px;
}
.navbar-brand img
{
  width:140px;
  height: auto;
}
.navbar-brand
{
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 1px;
}
.navbar-toggler
{
  border: none !important;
  outline: none !important;
}
.nav-item hr{
  position: relative;
  right: 36%;
  width: 20%;
  padding-bottom: 2px;
  background-color: #f195b2;
  margin-top: -9px;
  border: 0;
  opacity: 0;
  transition: 1s ease;
  top: 5px;
}
.nav-link{
  font-weight: 500;
  transition: 1s ease;
  font-family: "Work Sans";
}
.nav-link:hover{
  color: #f195b2 !important;
}
.nav-item:hover hr{
  opacity: 1;
}
.router-link-exact-active{
  color: #f195b2 !important;
}

@media (max-width: 576px){
  .nav-item hr{
    position: relative;
    right: 47%;
    width: 5%;
    top: 5px;
  }
}
@media (min-width: 577px) and (max-width: 768px){
  .nav-item hr{
    position: relative;
    right: 48.5%;
    width: 3%;
    top: 5px;
  }
}
</style>
