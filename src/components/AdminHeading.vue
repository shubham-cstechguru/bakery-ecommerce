<template lang="html">
  <div
    class="text-left"
    >
    <h3
      class="ecom_h3"
      >
      {{ pageTitle }}
      <hr />
    </h3>
  </div>
</template>

<script>
export default {
  name: "adminheading",
  props: {
    pageTitle: String,
  },

}
</script>

<style lang="css" scoped>
.ecom_h3{
  font-family: 'PT Serif';
  font-size: 25px;
  font-weight: bold;
  margin: 36px 0 36px 0;
  color: #3e606b;
}
</style>
