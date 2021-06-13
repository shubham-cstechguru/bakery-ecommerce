<template lang="html">
  <div class="Admin">
    <input type="checkbox" id="check">
    <!--header area start-->
    <header class="header">
      <label for="check">
        <b-icon-text-left class="sidebar_btn"/>
      </label>
      <div class="left_area">
        <h3>Coding <span>Snow</span></h3>
      </div>
      <div class="right_area">
        <a href="#" class="logout_btn">Logout</a>
      </div>
    </header>
    <div class="sidebar">
      <div class="profile_info">
        <img src="@/assets/1.png" class="profile_image" alt="">
        <h4>Jessica</h4>
      </div>

      <!-- <ul>
        <li>
          <div class="a">
            <span target="collapse-1">
              <b-icon-shop class="list_icon" />
              Shop
              <b-icon-chevron-bar-down />
            </span>
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
      </ul> -->
      <ul class="list-unstyled components mt-3 ml-3">
        <li>
          <div>
            <b-row class="d-flex align-items-center m-0 p-0">
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
            <b-row class="d-flex align-items-center m-0 p-0">
              <b-col cols="9" class="menu_head">
                Shop
              </b-col>
              <b-col cols="3">
                <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
        <b-icon v-else icon="chevron-bar-down"></b-icon>
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
            <b-row class="d-flex align-items-center m-0 p-0">
              <b-col cols="9" class="menu_head">
                Location
              </b-col>
              <b-col cols="3">
                <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
        <b-icon v-else icon="chevron-bar-down"></b-icon>
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
            <b-row class="d-flex align-items-center m-0 p-0">
              <b-col cols="9" class="menu_head">
                Category
              </b-col>
              <b-col cols="3">
                <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
        <b-icon v-else icon="chevron-bar-down"></b-icon>
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
            <b-row class="d-flex align-items-center m-0 p-0">
              <b-col cols="12" class="menu_head">
                <router-link to="/master-admin/gst-rate">GST Rate</router-link>
              </b-col>
            </b-row>
          </div>
        </li>
        <li>
          <div v-b-toggle.collapse-3>
            <b-row class="d-flex align-items-center m-0 p-0">
              <b-col cols="9" class="menu_head">
                Product
              </b-col>
              <b-col cols="3">
                <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
        <b-icon v-else icon="chevron-bar-down"></b-icon>
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
            <b-row class="d-flex align-items-center m-0 p-0">
              <b-col cols="9" class="menu_head">
                Blog
              </b-col>
              <b-col cols="3">
                <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
        <b-icon v-else icon="chevron-bar-down"></b-icon>
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
            <b-row class="d-flex align-items-center m-0 p-0">
              <b-col cols="12" class="menu_head">
                <router-link to="/master-admin/faq">FAQ's</router-link>
              </b-col>
            </b-row>
          </div>
        </li>
        <li>
          <div v-b-toggle.collapse-7>
            <b-row class="d-flex align-items-center m-0 p-0">
              <b-col cols="9" class="menu_head">
                Reports
              </b-col>
              <b-col cols="3">
                <b-icon v-if="collapse-7" icon="chevron-bar-up"></b-icon>
                <b-icon v-else icon="chevron-bar-down"></b-icon>
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
            <b-row class="d-flex align-items-center m-0 p-0">
              <b-col cols="9" class="menu_head">
                Pages
              </b-col>
              <b-col cols="3">
                <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
        <b-icon v-else icon="chevron-bar-down"></b-icon>
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

      <!-- <a href="#"><i class="fas fa-cogs"></i><span>Components</span></a>
      <a href="#"><i class="fas fa-table"></i><span>Tables</span></a>
      <a href="#"><i class="fas fa-th"></i><span>Forms</span></a>
      <a href="#"><i class="fas fa-info-circle"></i><span>About</span></a>
      <a href="#"><i class="fas fa-sliders-h"></i><span>Settings</span></a> -->
    </div>
    <!--sidebar end-->

    <div class="content">
      <router-view />
    </div>

  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.Admin{
  margin: 0;
  padding: 0;
}
.header{
  z-index: 99;
  position: fixed;
  background: #22242A;
  width: calc(100% - 0%);
  top: 0;
}

.left_area h3{
  color: #fff;
  margin: 0 0px 20px 41px;
  text-transform: uppercase;
  font-size: 22px;
  font-weight: 900;
}

.left_area span{
  color: #19B3D3;
}

.logout_btn{
  padding: 5px;
  background: #19B3D3;
  text-decoration: none;
  float: right;
  margin-top: -47px;
  margin-right: 40px;
  border-radius: 2px;
  font-size: 15px;
  font-weight: 600;
  color: #fff;
  transition: 0.5s;
  transition-property: background;
}

.logout_btn:hover{
  background: #0B87A6;
}

.sidebar{
  z-index: 9;
  top: 0;
  background: #2f323a;
  margin-top: 0px;
  padding-top: 90px;
  position: fixed;
  left: 0;
  width: 250px;
  height: 100%;
  transition: 0.5s;
  transition-property: left;
  overflow-y: auto;
}

.sidebar .menu_head{
  color: #fff;
  font-size: 16px;
  margin: 14px 0;
}
.sidebar .menu_list{
  margin: 9px 32px;
}
.sidebar ul li a{
  text-decoration: none;
  color: #fff;
}
.sidebar ul li{
  color: #ffffff;
}
.profile_info{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.sidebar .profile_info .profile_image{
  width: 100px;
  height: 100px;
  border-radius: 100px;
  margin-bottom: 10px;
}

.sidebar .profile_info h4{
  color: #ccc;
  margin-top: 0;
  margin-bottom: 20px;
}
label .sidebar_btn{
  z-index: 1;
  color: #fff;
  position: fixed;
  cursor: pointer;
  left: 300px;
  font-size: 25px;
  margin: 16px 0;
  transition: 0.5s;
  transition-property: color;
}

label .sidebar_btn:hover{
  color: #19B3D3;
}

#check:checked ~ .sidebar{
  left: -100%;
}

/* #check:checked ~ .sidebar a span{
  display: none;
}

#check:checked ~ .sidebar a{
  font-size: 20px;
  margin-left: 165px;
  width: 100%;
} */

.content{
  width: (100% - 250px);
  margin-top: 70px;
  padding: 20px;
  margin-left: 250px;
  background: #e7f7f9;
  background-position: center;
  background-size: cover;
  height: calc(100vh - 72px);
  transition: 0.5s;
}

#check:checked ~ .content{
  margin-left: 0;
}

#check:checked ~ .sidebar .profile_info{
  display: none;
}

#check{
  display: none;
}
.content .card p{
  background: #fff;
  padding: 15px;
  margin-bottom: 10px;
  font-size: 14px;
  opacity: 0.8;
}

/* Responsive CSS */

@media screen and (max-width: 780px){
  .sidebar{
    left: -100%;
  }
  #check:checked ~ .sidebar{
    left: 0;
  }

  #check:checked ~ .sidebar .profile_info {
    display: flex;
  }
/*
  #check:checked ~ .sidebar a span{
    display: inline;
  }

  #check:checked ~ .sidebar a {
    font-size: 14px;
    margin-left: 0px;
    width: 100%;
  } */

  #check:checked ~ .sidebar {
    display: block;
  }

  .content{
    margin-left: 0;
    margin-top: 90;
    padding: 10px 20px;
    transition: 0s;
  }

  #check:checked ~ .content{
    margin-left: 0;
  }
  label .sidebar_btn{
    left: 25px;
  }
  .left_area h3{
    margin-left: 70px;
  }
}

</style>
