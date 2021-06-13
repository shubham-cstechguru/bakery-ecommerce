<template lang="html">
  <div>
    <b-card
      no-body
      class="service_card"
      >
      <b-row
        class="m-0 p-0"
        >
        <b-col
          sm="4"
          class="pl-0 ml-0"
          >
          <span class="pt-5">
            <i :class="service.font"></i>
          </span>
        </b-col>
        <b-col
          sm="8"
          class="p-0 m-0"
          >
          <h3
            class="service_h3 mb-2"
            >
            {{ service.name }}
          </h3>
          <p
            class="service_font"
            >
            {{ service.desc }}
          </p>
        </b-col>
      </b-row>
    </b-card>
</div>
</template>

<script>
export default {
  name: "service-card",
  props: ['service']
}
</script>

<style lang="css" scoped>
.service_card{
  background: none;
  border: 1px solid #ffffff;
  margin: 18px 0px;
  padding: 41px 11px 11px 11px;
  color: #ffffff;
  transition: 1s ease;
}
.service_card:hover{
  background: #fff;
  color: #000000;
}
.service_h3{
  margin-top: -20px;
  margin-left: -16px;
}
.service_font{
  margin-left: -16px;
}
.service_card i{
  font-size: 25px;
  margin-left: 0px !important;
  padding-left: 0px !important;
  text-align: left !important;
}
.service_card h3{
  font-family: 'PT Sans';
}
.service_card p{
  font-family: 'Work Sans';
  letter-spacing: 0.2px;
}
.service_card i{
  font-size-adjust: 1.1;
}
@media screen and (min-width: 576px) and (max-width: 768px) {
  .service_card{
    padding: 28px 14px 2px 14px;
    margin: 20px -7px -7px -7px;
  }
  .service_h3{
    margin-left: 0px;
  }
  .service_font{
    margin-left: -63px;
    margin-top: 41px;
  }
  .service_card h3{
    font-size: 25px;
    margin-top: -5px;
  }
}
@media (max-width: 576px){
 .card{
    width: 18rem;
    margin: auto;
    margin-top: 20px;
  }
  .service_card{
    margin: auto;
    margin-top: 25px;
  }
  .service_h3{
    margin-top: 20px;
    margin-left: 5px;
  }
  .service_font{
    margin-left: 5px;
  }
}
</style>
