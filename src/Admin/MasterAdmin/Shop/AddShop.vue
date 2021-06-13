<template lang="html">
  <div
    class="addshop"
    >

    <section
      class="add_shop mt-4"
      >
      <b-container fluid>
        <AdminHeading pageTitle="Add Shop"/>
        <b-card>

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
                <b-form-group
                  id="input-group-5"
                  label="Country:"
                  label-for="input-5">
                  <b-form-select
                  id="input-5"
                  v-model="form.country"
                  :options="countrys"
                  required
                  ></b-form-select>
                </b-form-group>
              </b-col>
              <b-col cols="4">
                <b-form-group
                  id="input-group-6"
                  label="State:"
                  label-for="input-6">
                  <b-form-select
                  id="input-6"
                  v-model="form.state"
                  :options="states"
                  required
                  ></b-form-select>
                </b-form-group>
              </b-col>
              <b-col cols="4">
                <b-form-group
                  id="input-group-7"
                  label="City:"
                  label-for="input-7">
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
  name: "add-shop",
    data() {
      return {
        form: {
          name: '',
          shopname: '',
          shopno: '',
          street: '',
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
.button{
  color: #ffffff;
  border: none;
  padding: 7px 18px;
  border-radius: 5px;
  margin-top: 20px;
  margin-right: 20px;
}
</style>
