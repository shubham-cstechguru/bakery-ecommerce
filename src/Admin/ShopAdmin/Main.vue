<template lang="html">
  <div class="wrapper">
    <!-- Sidebar -->

      <b-navbar toggleable="md" type="light" variant="light" fixed="top">
        <b-navbar-brand class="mr-5">Shop Admin</b-navbar-brand>
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
                    <router-link to="/shop-admin">
                      Dashboard
                    </router-link>
                  </b-col>
                </b-row>
              </div>
            </li>
            <li >
              <div>
                <b-row class="d-flex align-items-center">
                  <b-col cols="9" class="menu_head">
                    <router-link to="/shop-admin/order">
                      Order
                    </router-link>
                  </b-col>
                </b-row>
              </div>
            </li>
            <li >
              <div v-b-toggle.collapse-3>
                <b-row class="d-flex align-items-center">
                  <b-col cols="9" class="menu_head">
                    <router-link to="/shop-admin/products">
                      Product
                    </router-link>
                  </b-col>
                </b-row>
              </div>
            </li>
            <li >
              <div v-b-toggle.collapse-1>
                <b-row class="d-flex align-items-center">
                  <b-col cols="9" class="menu_head">
                    Reports
                  </b-col>
                  <b-col cols="3">
                    <b-icon-arrow-bar-down class="mr-0" />
                  </b-col>
                </b-row>
              </div>
              <b-collapse id="collapse-1" class="">
                <div class="menu_list">
                  <router-link to="/shop-admin/report/cash-book">Cash Book</router-link>
                </div>
                <div class="menu_list">
                  <router-link to="/shop-admin/report/day-book">Day Book</router-link>
                </div>
                <div class="menu_list">
                  <router-link to="/shop-admin/report/bank-book">Bank Book</router-link>
                </div>
                <div class="menu_list">
                  <router-link to="/shop-admin/report/sales">Sales</router-link>
                </div>
                <div class="menu_list">
                  <router-link to="/shop-admin/report/stock">Stock</router-link>
                </div>
                <div class="menu_list">
                  <router-link to="/shop-admin/report/margin">Margin</router-link>
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
