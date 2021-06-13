<template lang="html">
  <div class="">
    <div class="float-sm" v-if="active">
      <div class="fl-fl float-si">
        <i class="flaticon-in mr-4"></i>
        <router-link to="/sign-in">Sign In</router-link>
      </div>
      <div class="fl-fl float-su">
        <i class="flaticon-pencil mr-4"></i>
        <router-link to="/sign-up">Sign Up</router-link>
      </div>
      <div class="fl-fl float-c">
        <i class="flaticon-shopping-cart mr-4"></i>
        <router-link to="/cart">Cart</router-link>
      </div>
    </div>

    <div class="float-sm" v-else>
      <div class="fl-fl float-su">
        <i class="flaticon-profile mr-4"></i>
        <router-link to="/user-profile">User Name</router-link>
      </div>
      <div class="fl-fl float-c">
        <i class="flaticon-shopping-cart mr-4"></i>
        <router-link to="/cart">Cart</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideOption"
}
</script>

<style lang="css" scoped>

.fl-fl {
	background: #94c9d9;
	text-transform: uppercase;
	letter-spacing: 3px;
	padding: 11px 0px;
	width: 200px;
	position: fixed;
	right: -140px;
	z-index: 1000;
	font-family: "Work Sans";
	-webkit-transition: all .25s ease;
	-moz-transition: all .25s ease;
	-ms-transition: all .25s ease;
	-o-transition: all .25s ease;
	transition: all .25s ease;
  color: #ffffff;
}
.fa {
		font-size: 50px;
		color: #fff;
		padding: 10px 0;
		width: 40px;
		margin-left: 8px;
}
.fl-fl:hover {
		right: 0;
}
.fl-fl a {
		color: #fff !important;
		text-decoration: none;
		text-align: center;
}
.float-si {
		top: 180px;
}
.float-su {
		top: 240px;
}
.float-c {
		top: 320px;
}
i{
  font-size: 20px;
  margin-left: 11px;
}
</style>
