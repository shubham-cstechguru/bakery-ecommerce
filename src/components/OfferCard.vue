<template lang="html">
  <div class="row">
      <div class="col-md-5">
        <div class="offer_img">
          <img src="@/assets/product.jpg" alt="">
        </div>
      </div>
      <div class="col-md-7">
        <div class="offer_content">
          <h4>{{ offer.name }}</h4>
          <p>{{ offer.Description }}</p>
          <button type="button" class="btn" name="button">Read More</button>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "offer",
  props: ['offer']
}
</script>

<style lang="css" scoped>
.offer_content{
  margin: 110px 20px;
  font-family: "PT Sans";
}
.offer_content h4{
  color: #ffffff;
  font-size: 56px;
  font-family: "PT Sans";
  margin: 25px 0px;
}
.offer_content p{
  color: #ffffff;
  font-size: 25px;
  font-style: italic;
  font-family: "PT Sans";
  margin: 20px 0px;
}
.offer_content button{
  background-color: #ffffff;
  color: #000000;
  font-size: 20px;
  font-family: "Work Sans";
  margin: 20px 0px;
  border-radius: 50px;
  padding: 7px 25px;
  transition: 0.5s ease;
}
.offer_content button:hover{
  background-color: #f195b2;
  color: #ffffff;
}
.offer_img{
  overflow: hidden;
  margin: 90px 0px;
  height: 380px;
}
@media (max-width: 768px){
  .offer_img{
    margin-bottom: 2px;
  }
}
</style>
