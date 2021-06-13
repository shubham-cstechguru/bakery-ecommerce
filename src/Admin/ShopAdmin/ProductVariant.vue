<template lang="html">
  <div class="productvariant">
    <section
    class="add_product_variant"
    >
    <b-container fluid>
      <AdminHeading pageTitle="Add Product Variant"/>
      <b-card>
        <b-form>
          <b-row>
            <b-col
            cols="6"
            >
            <b-form-group
            id="input-group-1"
            label="Product Name"
            label-for="input-1"
            >
            <b-form-input
            readonly
            id="input-1"
            v-model="form.productname"
            placeholder="Enter Product Name"
            required
            >
          </b-form-input>
        </b-form-group>
      </b-col>
      <b-col
      cols="6"
      >
      <b-form-group
      label="Product Images"
      >
      <b-form-file
      disabled
      v-model="form.image"
      :state="Boolean(form.image)"
      placeholder="Choose a Images or drop it here..."
      drop-placeholder="Drop Images here..."
      accept="image/jpeg, image/png"
      >
    </b-form-file>
  </b-form-group>
</b-col>
<b-col
cols="4"
>
<b-form-group
id="input-group-2"
label="Parent"
label-for="input-2"
>
<b-form-select
disabled
id="input-2"
v-model="form.parent"
:options="parents"
required
></b-form-select>
</b-form-group>
</b-col>
<b-col
cols="4"
>
<b-form-group
id="input-group-3"
label="Category"
label-for="input-3"
>
<b-form-select
disabled
id="input-3"
v-model="form.category"
:options="categories"
required
></b-form-select>
</b-form-group>
</b-col>
<b-col
cols="4"
>
<b-form-group
id="input-group-4"
label="Sub Category"
label-for="input-4"
>
<b-form-select
disabled
id="input-4"
v-model="form.subcategory"
:options="subcategories"
required
></b-form-select>
</b-form-group>
</b-col>
</b-row>

</b-form>
</b-card>


<b-card class="my-5">


  <b-row
  class="my-5 d-flex justify-content-between"
  >
  <b-col
  cols="5"
  class="my-1"
  >
  <p class="ecom_p">Add Product Variant</p>
</b-col>
<b-col
cols="3"
offset="3"
>
<p>
  <b-button
  size="sm"
  class="btn-primary float-right"
  @click.prevent="newTab"
  >
  <b-icon-node-plus-fill />

</b-button>
</p>
</b-col>
</b-row>

<b-row>
  <b-col cols="3">
    <b-form-group
    id="input-group-6"
    label="Volume"
    label-for="input-6"
    >
    <b-form-input
    id="input-6"
    v-model="form.volume"
    placeholder="Enter Volume"
    type="number"
    required
    ></b-form-input>
  </b-form-group>
</b-col>

<b-col
cols="2"
>
<b-form-group
id="input-group-7"
label="Units"
label-for="input-7"
>
<b-form-select
id="input-7"
v-model="form.unit"
:options="Units"
required
></b-form-select>
</b-form-group>
</b-col>
<b-col cols="3">
  <b-form-group
  id="input-group-8"
  label="Product Quantity"
  label-for="input-8"
  >
  <b-form-input
  id="input-8"
  v-model="form.quantity"
  placeholder="Enter Product Quantity"
  type="number"
  required
  >
</b-form-input>
</b-form-group>
</b-col>

<b-col cols="3">
  <b-form-group
  id="input-group-5"
  label="Product Price"
  label-for="input-5"
  >
  <b-form-input
  id="input-5"
  v-model="form.price"
  placeholder="Enter Product Price"
  type="number"
  required
  >
</b-form-input>
</b-form-group>
</b-col>
</b-row>

<b-form>
  <b-row v-for="(row, i) in tabs" :key="i">
    <b-col cols="3">
      <b-form-group
      id="input-group-6"
      label="Volume"
      label-for="input-6"
      >
      <b-form-input
      id="input-6"
      v-model="row.volume"
      placeholder="Enter Volume"
      type="number"
      required
      ></b-form-input>
    </b-form-group>
  </b-col>

  <b-col
  cols="2"
  >
  <b-form-group
  id="input-group-7"
  label="Units"
  label-for="input-7"
  >
  <b-form-select
  id="input-7"
  v-model="form.unit"
  :options="Units"
  required
  ></b-form-select>
</b-form-group>
</b-col>
<b-col cols="3">
  <b-form-group
  id="input-group-8"
  label="Product Quantity"
  label-for="input-8"
  >
  <b-form-input
  id="input-8"
  v-model="form.quantity"
  placeholder="Enter Product Quantity"
  type="number"
  required
  >
</b-form-input>
</b-form-group>
</b-col>

<b-col cols="3">
  <b-form-group
  id="input-group-5"
  label="Product Price"
  label-for="input-5"
  >
  <b-form-input
  id="input-5"
  v-model="form.price"
  placeholder="Enter Product Price"
  type="number"
  required
  >
</b-form-input>
</b-form-group>
</b-col>
<b-col cols="1" class="my-auto">
  <p>
    <b-button
    size="sm"
    class="btn-danger float-right"
    @click="closeTab(i)"
    >
    <b-icon-node-minus-fill />

  </b-button>
</p>
</b-col>
</b-row>


<b-button type="submit" variant="primary" class="button">Save</b-button>
<b-button type="reset" variant="danger" class="button">Reset</b-button>
</b-form>
</b-card>
</b-container>
</section>
</div>
</template>

<script>
import AdminHeading from "@/components/AdminHeading"
export default {
  components: {
    AdminHeading
  },
  data() {
    return {
      form: {
        productname: 'Product Name',
        image: "asdfghjkl.png",
        parent: "asdfghjkl",
        category: "asdfghjkl",
        subcategory: "asdfghjkl",
        price: null,
        volume: null,
        quantity: '',
        unit: null,
      },
      tabs: [{
        volume: 1,
        unit: '',
        in_stock: 1,
        regular_price: 0,
        discount: 0,
        sale_price: 0
      }]
    }
  },
  methods: {
    newTab() {
      this.tabs.push({
        volume: 1,
        unit: '',
        in_stock: 1,
        regular_price: 0,
        discount: 0,
        sale_price: 0
      })
    },
    closeTab(x) {
      for (let i = 0; i < this.tabs.length; i++) {
        if (this.tabs[i] === x) {
          this.tabs.splice(i, 1)
        }
      }
    },
  }
}
</script>

<style lang="css" scoped>
.ecom_p{
  font-family: 'PT Serif';
  font-size: 18px;
  color: #555;
}
.button{
  color: #ffffff;
  border: none;
  padding: 7px 18px;
  border-radius: 5px;
  margin-top: 20px;
  margin-right: 20px;
}
</style>
