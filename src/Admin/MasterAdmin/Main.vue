<template lang="html">
  <div class="wrapper">
    <!-- Sidebar -->

      <b-navbar toggleable="md" type="light" variant="light" fixed="top">
        <b-navbar-brand class="mr-5">Master Admin</b-navbar-brand>
        <b-button @click="show = !show" class="ml-5">
          <b-icon icon="text-left" aria-hidden="true">
          </b-icon>
        </b-button>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto text-right">
              <!--<b-nav-form class="mr-5 d-none d-sm-none d-md-block">
                <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                <b-button size="sm" class="my-2 my-sm-0 float-right" type="submit">Search</b-button>
              </b-nav-form>-->

              <!-- <b-nav-item-dropdown text="Lang" right class="mr-3">
                <b-dropdown-item href="#">EN</b-dropdown-item>
                <b-dropdown-item href="#">ES</b-dropdown-item>
                <b-dropdown-item href="#">RU</b-dropdown-item>
                <b-dropdown-item href="#">FA</b-dropdown-item>
              </b-nav-item-dropdown> -->

              <b-nav-item-dropdown right class="mr-3">
                <template #button-content>
                  <em>User</em>
                </template>
                <b-dropdown-item href="#">Profile</b-dropdown-item>
                <b-dropdown-item href="#">Sign Out</b-dropdown-item>
              </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    <!-- Page Content -->
    <div class="d-flex mt-5 content_wrap">
      <div class="sidebar">
        <nav class="sidebar_main" v-show="show">

          <ul class="list-unstyled components mt-3 ml-3">
            <li>
              <div>
                <b-row class="d-flex align-items-center">
                  <b-col cols="9" class="menu_head">
                    <router-link to="/master-admin">
                      Dashboard
                    </router-link>
                  </b-col>
                </b-row>
              </div>
            </li>
            <li>
              <div v-b-toggle.collapse-1>
                <b-row class="d-flex align-items-center">
                  <b-col cols="9" class="menu_head">
                    Shop
                  </b-col>
                  <b-col cols="3">
                    <b-icon-arrow-bar-down class="mr-0" />
                  </b-col>
                </b-row>
              </div>
              <b-collapse id="collapse-1" class="">
                <div class="menu_list">
                  <router-link to="/master-admin/add-shop">Add Shop</router-link>
                </div>
                <div class="menu_list">
                  <router-link to="/master-admin/view-shop">View Shop</router-link>
                </div>
                <div class="menu_list">
                  <router-link to="/master-admin/assign-product">Assign Product</router-link>
                </div>
              </b-collapse>
            </li>
            <li>
              <div v-b-toggle.collapse-2>
                <b-row class="d-flex align-items-center">
                  <b-col cols="9" class="menu_head">
                    Location
                  </b-col>
                  <b-col cols="3">
                    <b-icon-arrow-bar-down class="mr-0" />
                  </b-col>
                </b-row>
              </div>
              <b-collapse id="collapse-2" class="">
                <div class="menu_list">
                  <router-link to="/master-admin/country">Country</router-link>
                </div>
                <div class="menu_list">
                  <router-link to="/master-admin/state">State</router-link>
                </div>
                <div class="menu_list">
                  <router-link to="/master-admin/city">City</router-link>
                </div>
                <div class="menu_list">
                  <router-link to="/master-admin/area">Area</router-link>
                </div>
              </b-collapse>
            </li>
            <li>
              <div v-b-toggle.collapse-6>
                <b-row class="d-flex align-items-center">
                  <b-col cols="9" class="menu_head">
                    Category
                  </b-col>
                  <b-col cols="3">
                    <b-icon-arrow-bar-down class="mr-0" />
                  </b-col>
                </b-row>
              </div>
              <b-collapse id="collapse-6">
                <div class="menu_list">
                  <router-link to="/master-admin/add-category">Add Category</router-link>
                </div>
                <div class="menu_list">
                  <router-link to="/master-admin/view-category">View Category</router-link>
                </div>
              </b-collapse>
            </li>
            <li>
              <div>
                <b-row class="d-flex align-items-center">
                  <b-col cols="12" class="menu_head">
                    <router-link to="/master-admin/gst-rate">GST Rate</router-link>
                  </b-col>
                </b-row>
              </div>
            </li>
            <li>
              <div v-b-toggle.collapse-3>
                <b-row class="d-flex align-items-center">
                  <b-col cols="9" class="menu_head">
                    Product
                  </b-col>
                  <b-col cols="3">
                    <b-icon-arrow-bar-down class="mr-0" />
                  </b-col>
                </b-row>
              </div>
              <b-collapse id="collapse-3" class="">
                <div class="menu_list">
                  <router-link to="/master-admin/add-product">Add Product</router-link>
                </div>
                <div class="menu_list">
                  <router-link to="/master-admin/view-product">View Product</router-link>
                </div>
              </b-collapse>
            </li>
            <li>
              <div v-b-toggle.collapse-4>
                <b-row class="d-flex align-items-center">
                  <b-col cols="9" class="menu_head">
                    Blog
                  </b-col>
                  <b-col cols="3">
                    <b-icon-arrow-bar-down class="mr-0" />
                  </b-col>
                </b-row>
              </div>
              <b-collapse id="collapse-4" class="">
                <div class="menu_list">
                  <router-link to="/master-admin/blog/blog-category">Blog Category</router-link>
                </div>
                <div class="menu_list">
                  <router-link to="/master-admin/blog/blog-tag">Blog Tag</router-link>
                </div>
                <div class="menu_list">
                  <router-link to="/master-admin/blog/add-blog">Add Blog</router-link>
                </div>
                <div class="menu_list">
                  <router-link to="/master-admin/blog/view-blog">View Blog</router-link>
                </div><div class="menu_list">
                  <router-link to="/master-admin/blog/blog-comments">Blog Comments</router-link>
                </div>
              </b-collapse>
            </li>
            <li>
              <div>
                <b-row class="d-flex align-items-center">
                  <b-col cols="12" class="menu_head">
                    <router-link to="/master-admin/faq">FAQ's</router-link>
                  </b-col>
                </b-row>
              </div>
            </li>
            <li>
              <div v-b-toggle.collapse-7>
                <b-row class="d-flex align-items-center">
                  <b-col cols="9" class="menu_head">
                    Reports
                  </b-col>
                  <b-col cols="3">
                    <b-icon-arrow-bar-down class="mr-0" />
                  </b-col>
                </b-row>
              </div>
              <b-collapse id="collapse-7" class="">
                <div class="menu_list">
                  <router-link to="/master-admin/report/cash-book">Cash Book</router-link>
                </div>
                <div class="menu_list">
                  <router-link to="/master-admin/report/day-book">Day Book</router-link>
                </div>
                <div class="menu_list">
                  <router-link to="/master-admin/report/bank-book">Bank Book</router-link>
                </div>
                <div class="menu_list">
                  <router-link to="/master-admin/report/sales">Sales</router-link>
                </div>
                <div class="menu_list">
                  <router-link to="/master-admin/report/stock">Ledger</router-link>
                </div>
                <div class="menu_list">
                  <router-link to="/master-admin/report/margin">Margin</router-link>
                </div>
              </b-collapse>
            </li>
            <li >
              <div v-b-toggle.collapse-5>
                <b-row class="d-flex align-items-center">
                  <b-col cols="9" class="menu_head">
                    Pages
                  </b-col>
                  <b-col cols="3">
                    <b-icon-arrow-bar-down class="mr-0" />
                  </b-col>
                </b-row>
              </div>
              <b-collapse id="collapse-5" class="">
                <div class="menu_list">
                  <router-link to="/master-admin/">Add Pages</router-link>
                </div>
                <div class="menu_list">
                  <router-link to="/master-admin/">View Pages</router-link>
                </div>
              </b-collapse>
            </li>
          </ul>
        </nav>

      </div>
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
      return {
        show: true,
        isVisible: false
      }
    },
  }
</script>

<style lang="css" scoped>
.sidebar_main {
  background: #000000;
  color: #ffffff;
  height: calc(100vh - 54px);
  width: 270px;
  overflow: auto;
}
.content {
  width: 100vw;
  background-color: #e7f7f9;
  height: calc(100vh - 54px);
  overflow: auto;
}
.navbar-toggler
{
  border: none !important;
  outline: none !important;
}
.wrapper ul .menu_head{
  font-size: 20px;
  padding: 14px;
}
.wrapper ul .menu_list{
  font-size: 20px;
  padding: 9px;
  margin-left: 20px;
}
.wrapper ul .menu_list a{
  color: #ffffff;
  text-decoration: none;
}
.wrapper ul a{
  color: #ffffff;
  text-decoration: none;
}
</style>
