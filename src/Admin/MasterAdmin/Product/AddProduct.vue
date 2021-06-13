<template lang="html">
  <div class="addproduct">
    <section
      class="add_product"
      >
      <b-container
        fluid>
        <AdminHeading
          pageTitle="Add Product"
          />
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
                  cols="6"
                  >

                  <b-form-group
                    id="input-group-2"
                    label="Product Price"
                    label-for="input-2"
                    >
                    <b-form-input
                      id="input-2"
                      v-model="form.price"
                      placeholder="Enter Product Price"
                      type="number"
                      required
                      >
                    </b-form-input>
                  </b-form-group>
                </b-col>
                <b-col
                  cols="6"
                  >
                  <b-form-group
                    id="input-group-3"
                    label="GST Rate"
                    label-for="input-3"
                    >
                    <b-form-select
                      id="input-3"
                      v-model="form.gstrate"
                      :options="gstrates"
                      required
                      >
                    </b-form-select>
                  </b-form-group>
                </b-col>
                <b-col
                  cols="4"
                  >
                  <b-form-group
                    id="input-group-4"
                    label="Parent"
                    label-for="input-4"
                    >
                    <b-form-select
                      id="input-4"
                      v-model="form.parent"
                      :options="parents"
                      required
                      >
                    </b-form-select>
                  </b-form-group>
                </b-col>
                <b-col
                  cols="4"
                  >
                  <b-form-group
                  id="input-group-5"
                  label="Category"
                  label-for="input-5"
                  >
                  <b-form-select
                    id="input-5"
                    v-model="form.category"
                    :options="categories"
                    required
                    >
                  </b-form-select>
                </b-form-group>
              </b-col>
              <b-col
                cols="4"
                >
                <b-form-group
                  id="input-group-6"
                  label="Sub Category"
                  label-for="input-6"
                  >
                  <b-form-select
                    id="input-6"
                    v-model="form.subcategory"
                    :options="subcategories"
                    >
                  </b-form-select>
                </b-form-group>
              </b-col>
              <b-col
                cols="12"
                >
                <label
                  for="textarea-large"
                  >
                  Description:
                </label>
                <b-form-textarea
                  id="textarea-small"
                  size="sm"
                  label
                  v-model="form.text"
                  placeholder="Enter Description..."
                  rows="8"
                  required
                  >
                </b-form-textarea>
              </b-col>
            </b-row>

            <b-row
              class="mt-5"
              >
              <b-col
                cols="6"
                >
                <b-form-group
                  id="input-group-7"
                  label="SEO Keyword"
                  label-for="input-7"
                  >
                  <b-form-input
                    id="input-7"
                    v-model="form.seokeyword"
                    placeholder="Enter SEO Keyword"
                    required
                    >
                  </b-form-input>
                </b-form-group>
              </b-col>
              <b-col
                cols="6"
                >
                <b-form-group
                  id="input-group-8"
                  label="SEO Title"
                  label-for="input-8"
                  >
                  <b-form-input
                    id="input-8"
                    v-model="form.seotitle"
                    placeholder="Enter SEO Title"
                    required
                    >
                  </b-form-input>
                </b-form-group>
              </b-col>
              <b-col
                cols="12"
                >
                <label
                  for="textarea-large"
                  >
                  SEO Description:
                </label>
                <b-form-textarea
                  id="textarea-large"
                  size="sm"
                  label
                  rows="6"
                  max-rows="9"
                  v-model="form.seodescription"
                  placeholder="Enter SEO Description..."
                  >
                </b-form-textarea>
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
        productname: '',
        image: null,
        price: null,
        gstrate: null,
        parent: null,
        category: null,
        subcategory: null,
        text: '',        
        seotitle: '',
        seokeyword: '',
        seodescription: '',
      }
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
