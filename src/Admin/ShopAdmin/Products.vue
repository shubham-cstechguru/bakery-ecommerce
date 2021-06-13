<template lang="html">
  <div class="viewproduct">
    <section
      class="view_product"
      >
      <b-container fluid>
        <AdminHeading pageTitle="Products" />

        <b-card>
          <b-row
            class="my-5 d-flex justify-content-between"
            >
            <b-col
              cols="5"
              class="my-1"
              >
              <b-form-group
                label-for="filter-input"
                >
                <b-input-group size="sm">
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
              offset="3"
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
            <b-col cols="1">
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

        <!-- Main table element -->
        <b-table
          class="mt-3"
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
          responsive="sm"
          ref="selectableTable"
          selectable
          @row-selected="onRowSelected"
          stacked="md"
          show-empty
          @filtered="onFiltered"
          striped
          bordered
          head-variant="dark"
          >
          <template #cell(selected)="{ rowSelected }">
            <template v-if="rowSelected">
              <span aria-hidden="true">&check;</span>
              <span class="sr-only">Selected</span>
            </template>
            <template v-else>
              <span aria-hidden="true">&nbsp;</span>
              <span class="sr-only">Not selected</span>
            </template>
          </template>
          <template #cell(actions)="row">
            <b-button size="sm" class="mr-2">
              <b-icon icon="archive-fill" class="mr-0" aria-hidden="true"></b-icon>
              Delete
            </b-button>
            <b-button size="sm" class="mr-2" @click="row.toggleDetails">
              {{ row.detailsShowing ? 'Hide' : 'Show' }} Details
            </b-button>
            <b-button size="sm" class="mr-2">
              <router-link to="/edit-shop"><b-icon icon="pencil-square" class="mr-1" aria-hidden="true"></b-icon>Edit Details</router-link>
            </b-button>
          </template>
          <template #row-details="row">
            <b-card>
              <ul>
                <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value }}</li>
              </ul>
            </b-card>
          </template>
        </b-table>

        <b-row
          class="d-flex justify-content-middle"
          >
          <b-col
            cols="3"
            class="my-1"
            >
            <p class="ecom_p">
              Total Records 0
            </p>
          </b-col>
          <b-col
            cols="3"
            offset="6"
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
      fields: [
        'selected',
        { key: 'productname', label: 'Product Name', sortable: true, sortDirection: 'desc', class: 'text-left ml-1' },
        { key: 'productvolume', label: 'Product Volume', sortable: true, sortDirection: 'desc', class: 'text-left ml-1' },
        { key: 'vom', label: 'Product Vol. unit', sortable: true, sortDirection: 'desc', class: 'text-left ml-1' },
        { key: 'productprice', label: 'Product Price', sortable: true, sortDirection: 'desc', class: 'text-left ml-1' },
        { key: 'actions', label: 'Actions' }
      ],
      selectMode: 'single',
      selected: [],
      totalRows: 1,
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
