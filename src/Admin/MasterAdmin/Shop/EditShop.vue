<template lang="html">
  <div
    class="addshop"
    >
    <b-breadcrumb :items="items" class="my-2"></b-breadcrumb>
    <section
      class="add_shop"
      >
      <b-container>
        <div
          class="text-center"
          >
          <h3
            class="ecom_h3"
            >
            Edit Shop
            <hr />
          </h3>
        </div>
        <b-form
          >
          <b-row>
            <b-col
              cols="6"
              >
              <b-form-group
                id="input-group-1"
                label="Name"
                label-for="input-1"
                >
                <b-form-input
                  id="input-1"
                  v-model="form.name"
                  placeholder="Enter Name"
                  required
                  >
                </b-form-input>
              </b-form-group>
            </b-col>
            <b-col
              cols="6"
              >
              <b-form-group
                id="input-group-2"
                label="Shop Name"
                label-for="input-2"
                >
                <b-form-input
                  id="input-2"
                  v-model="form.shopname"
                  placeholder="Enter Shop Name"
                  required
                  >
                </b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col
              cols="6"
              >
              <b-form-group
                id="input-group-3"
                label="Flat/Shop No."
                label-for="input-3"
                >
                <b-form-input
                  id="input-3"
                  v-model="form.shopno"
                  placeholder="Enter Flat/Shop No."
                  required
                  >
                </b-form-input>
              </b-form-group>
            </b-col>
            <b-col
              cols="6"
              >
              <b-form-group
                id="input-group-4"
                label="Street"
                label-for="input-4"
                >
                <b-form-input
                  id="input-4"
                  v-model="form.street"
                  placeholder="Enter Street"
                  required
                  >
                </b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="4">
              <b-form-group id="input-group-5" label="Country:" label-for="input-3">
                <b-form-select
                id="input-5"
                v-model="form.country"
                :options="countrys"
                required
                ></b-form-select>
              </b-form-group>
            </b-col>
            <b-col cols="4">
              <b-form-group id="input-group-6" label="State:" label-for="input-3">
                <b-form-select
                id="input-6"
                v-model="form.state"
                :options="states"
                required
                ></b-form-select>
              </b-form-group>
            </b-col>
            <b-col cols="4">
              <b-form-group id="input-group-7" label="City:" label-for="input-3">
                <b-form-select
                id="input-7"
                v-model="form.city"
                :options="citys"
                required
                ></b-form-select>
              </b-form-group>
            </b-col>
          </b-row>
            <b-button type="submit" variant="primary" class="button">Save</b-button>
            <b-button type="reset" variant="danger" class="button">Reset</b-button>
        </b-form>
      </b-container>
    </section>
  </div>
</template>

<script>
export default {
  name: "add-shop",
    data() {
      return {
        items: [
          {
            text: 'Dashboard',
            to: { name: 'Dashboard' }
          },
          {
            text: 'Edit Shop',
          },
        ],
        form: {
          name: 'User Name',
          shopname: 'Shop Name 1',
          shopno: '1',
          street: 'Bahgwati Colony, Highcourt Road',
          country: null,
          state: null,
          city: null,
        },
        countrys: [{ text: 'Select One', value: null }, 'India', 'USA', 'UK', 'Australia'],
        show: true
      }
    }
  }
</script>

<style lang="css" scoped>
.text-center .ecom_h3{
  font-family: 'PT Serif';
  font-size: 39px;
  font-weight: bold;
  margin: 36px 0 0px 0;
  display: inline-block;
  color: #3e606b;
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
