<template lang="html">
  <div class="category">
    <section class="category_add">
      <b-container
        fluid>
        <AdminHeading
          pageTitle="Add Category"
          />
          <b-row>
            <b-col
              md="12"
              xs="12"
              >
              <b-card>
                <b-form>
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
                          v-model="form.category"
                          placeholder="Enter Category Name"
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
                        label="Parent"
                        label-for="input-4"
                        >
                        <b-form-select
                          id="input-4"
                          v-model="form.parent"
                          :options="parent"
                          required
                          >
                        </b-form-select>
                      </b-form-group>
                    </b-col>
                    <b-col
                      cols="12"
                      >
                      <label
                        for="textarea-small"
                        >
                        Description:
                      </label>
                      <b-form-textarea
                        id="textarea-small"
                        size="sm"
                        label
                        rows="6"
                        max-rows="9"
                        v-model="form.text"
                        placeholder="Enter Description..."
                        >
                      </b-form-textarea>
                    </b-col>
                    <b-col
                      cols="6"
                      >
                      <b-form-group
                        id="input-group-5"
                        label="Category Image"
                        label-for="input-5"
                        >
                        <b-form-file
                          v-model="fileimage"
                          accept="image/jpeg, image/png"
                          :state="Boolean(file1)"
                          placeholder="Choose a Category Image or drop it here..."
                          drop-placeholder="Drop Category Image here..."
                          >
                        </b-form-file>
                      </b-form-group>
                    </b-col>
                    <b-col
                      cols="6"
                      >
                      <b-form-group
                        id="input-group-6"
                        label="Category Icon"
                        label-for="input-6"
                        >
                        <b-form-file
                          v-model="fileicon"
                          accept="image/jpeg, image/png"
                          :state="Boolean(file1)"
                          placeholder="Choose a Category Icon or drop it here..."
                          drop-placeholder="Drop Category Icon here..."
                          >
                        </b-form-file>
                      </b-form-group>
                    </b-col>
                  </b-row>
                  <b-row
                    class="mt-5"
                    >
                    <b-col
                      cols="6"
                      >
                      <b-form-group
                        id="input-group-2"
                        label="SEO Keyword"
                        label-for="input-2"
                        >
                        <b-form-input
                          id="input-2"
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
                        id="input-group-3"
                        label="SEO Title"
                        label-for="input-3"
                        >
                        <b-form-input
                          id="input-3"
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
            </b-col>
          </b-row>
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
        category: '',
        seotitle: '',
        seokeyword: '',
        seodescription: '',
        parent: null,
        text: '',
        fileimage: null,
        fileicon: null
      },
    }
  },
  computed: {
    sortOptions() {
      // Create an options list from our fields
      return this.fields
      .filter(f => f.sortable)
      .map(f => {
        return { text: f.label, value: f.key }
      })
    }
  },
  mounted() {
    // Set the initial number of items
    this.totalRows = this.datas.length
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
