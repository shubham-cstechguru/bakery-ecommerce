<template lang="html">
  <div class="blog_category">
    <div class="category">
      <b-container fluid>
        <AdminHeading pageTitle="Blog Category" />

        <b-row>
          <b-col md="4" xs="12">
            <b-card>
            <b-form>
                <b-form-group
                id="input-group-1"
                label="Blog Category"
                label-for="input-1"
                >
                <b-form-input
                id="input-1"
                v-model="form.category"
                placeholder="Add Blog Category"
                required
                >
              </b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-2"
              label="Slug"
              label-for="input-2"
              >
              <b-form-input
                id="input-2"
                v-model="form.slug"
                placeholder="Add Slug"
                required
                >
              </b-form-input>
            </b-form-group>
                <b-button type="submit" variant="primary" class="button">Save</b-button>
                <b-button type="reset" variant="danger" class="button">Reset</b-button>
              </b-form>
            </b-card>
            </b-col>
            <b-col md="8" xs="12">

        <!-- Main table element -->
        <b-card>

          <b-row
            class="my-5 d-flex justify-content-between"
            >
            <b-col
              cols="5"
              >
              <b-form-group
                label-for="filter-input"
                >
                <b-input-group
                  size="sm">
                  <b-form-input
                    id="filter-input"
                    v-model="filter"
                    type="search"
                    placeholder="Type to Search"
                    class="py-3"
                    >
                  </b-form-input>
                  <b-input-group-append>
                    <b-button
                      :disabled="!filter"
                      @click="filter = ''"
                      class="ml-2"
                      >
                      Search
                    </b-button>
                  </b-input-group-append>
                </b-input-group>
              </b-form-group>
            </b-col>
            <b-col
              cols="3"
              offset="2"
              >
              <p>
                <b-button
                  size="sm"
                  class="btn-danger float-right"
                  >
                  <b-icon
                    icon="archive-fill"
                    class="mr-1"
                    aria-hidden="true"
                    >
                  </b-icon>
                  Delete selected
                </b-button>
              </p>
            </b-col>
            <b-col
              cols="2"
              >
              <b-form-group
                label-for="per-page-select"
                >
                <b-form-select
                  id="per-page-select"
                  v-model="perPage"
                  :options="pageOptions"
                  size="sm"
                  >
                </b-form-select>
              </b-form-group>
            </b-col>
          </b-row>
            <b-table
              responsive
              :items="datas"
              :fields="fields"
              :current-page="currentPage"
              :per-page="perPage"
              :filter="filter"
              :filter-included-fields="filterOn"
              :sort-by.sync="sortBy"
              :sort-desc.sync="sortDesc"
              :sort-direction="sortDirection"
              :select-mode="selectMode"
              ref="selectableTable"
              selectable
              @row-selected="onRowSelected"
              show-empty
              @filtered="onFiltered"
              striped
              bordered
              head-variant="dark"
              >
              <template
                #cell(selected)="{ rowSelected }"
                >
                <template
                  v-if="rowSelected"
                  >
                  <b-icon-check-square />
                  <span
                    class="sr-only"
                    >
                    Selected
                  </span>
                </template>
                <template
                  v-else
                  >
                  <b-icon-square />
                  <span
                    class="sr-only"
                    >
                    Not selected
                  </span>
                </template>
              </template>
              <template
                #cell(actions)="row"
                >
                <b-button
                  size="sm"
                  class="mr-2"
                  >
                  <b-icon-archive-fill />
                </b-button>
                <b-button
                  size="sm"
                  class="mr-2"
                  @click="row.toggleDetails"
                  >
                  <b-icon-eye-slash-fill
                    v-if="row.detailsShowing"
                    />
                  <b-icon-eye-fill
                    v-else
                    />

                  </b-button>
                  <b-button
                    size="sm"
                    class="mr-2"
                    >
                    <router-link
                      to="/edit-shop"
                      >
                      <b-icon-pencil-square />
                    </router-link>
                  </b-button>
                </template>
                <template
                  #row-details="row"
                  >
                  <b-card>
                    <ul>
                      <li
                        v-for="(value, key) in row.item"
                        :key="key">{{ key }}: {{ value }}
                      </li>
                    </ul>
                  </b-card>
                </template>
              </b-table>
              <b-row>
                <b-col
                  md="6"
                  sm="6"
                  xs="12"
                  class="my-1"
                  >
                  <p class="ecom_p">
                    1 - {{ perPage }} of {{ datas.length }} records are showing
                  </p>
                </b-col>
                <b-col
                  md="4"
                  offset-md="2"
                  sm="6"
                  xs="12"
                  class="my-1"
                  >
                  <b-pagination
                    v-model="currentPage"
                    :total-rows="totalRows"
                    :per-page="perPage"
                    align="fill"
                    size="sm"
                    class="my-0"
                    >
                  </b-pagination>
                </b-col>
              </b-row>
          </b-card>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import AdminHeading from "@/components/AdminHeading"
export default {
  name: "blog-category",
  components: {
    AdminHeading
  },
  data() {
    return {
      form: {
        category: '',
        slug: ''
      },
      datas: [
        { id: 1, category: 'Fred', slug: 'Flintstone' },
        { id: 2, category: 'Wilma', slug: 'Flintstone' },
        { id: 3, category: 'Barney', slug: 'Rubble' },
        { id: 4, category: 'Betty', slug: 'Rubble' },
        { id: 5, category: 'Pebbles', slug: 'Flintstone' },
        { id: 6, category: 'Bamm Bamm', slug: 'Rubble' },
        { id: 7, category: 'The Great', slug: 'Gazzoo' },
        { id: 8, category: 'Rockhead', slug: 'Slate' },
        { id: 9, category: 'Pearl', slug: 'Slaghoople' },
        { id: 10, category: 'Fred', slug: 'Flintstone' },
        { id: 11, category: 'Wilma', slug: 'Flintstone' },
        { id: 12, category: 'Barney', slug: 'Rubble' },
        { id: 13, category: 'Betty', slug: 'Rubble' },
      ],
      fields: [
        'selected',
        { key: 'id', label: 'Id', sortable: true, sortDirection: 'desc', class: 'text-left ml-1' },
        { key: 'slug', label: 'Slug', sortable: true, sortDirection: 'desc', class: 'text-left ml-1' },
        { key: 'category', label: 'Category Name', sortable: true, class: 'text-left ml-1' },
        { key: 'actions', label: 'Actions' }
      ],
      selectMode: 'multi',
      selected: [],
      currentPage: 1,
      perPage: 5,
      pageOptions: [5, 10, 15, { value: 100, text: "Show a lot" }],
      sortBy: '',
      sortDesc: false,
      sortDirection: 'asc',
      filter: null,
      filterOn: [],
    }
  },
  computed: {
    totalRows() {
      return this.datas.length
    }
  },
  methods: {
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      this.currentPage = 1
    },
    onRowSelected(items) {
      this.selected = items
    },
    selectAllRows() {
      this.$refs.selectableTable.selectAllRows()
    },
    clearSelected() {
      this.$refs.selectableTable.clearSelected()
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
