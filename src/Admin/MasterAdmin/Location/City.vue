<template lang="html">
  <div class="City">
    <section class="city">
      <b-container fluid>
        <AdminHeading pageTitle="City" />
        <b-row>
          <b-col md="4" xs="12">
            <b-card>
              <b-form>
                <b-form-group
                  id="input-group-1"
                  label="Country"
                  label-for="input-1"
                  >
                  <b-form-select
                    id="input-1"
                    v-model="form.country"
                    :options="countries"
                    required
                    >
                  </b-form-select>
                </b-form-group>

                <b-form-group
                  id="input-group-2"
                  label="State"
                  label-for="input-2"
                  >
                  <b-form-select
                    id="input-2"
                    v-model="form.state"
                    :options="states"
                    required
                    >
                  </b-form-select>
                </b-form-group>

                  <b-form-group
                    id="input-group-3"
                    label="City"
                    label-for="input-3"
                    >
                    <b-form-input
                      id="input-3"
                      v-model="form.city"
                      placeholder="Enter City"
                      required
                      >
                    </b-form-input>
                  </b-form-group>
                  <b-form-group
                    id="input-group-4"
                    label="City Short Name"
                    label-for="input-4"
                    >
                    <b-form-input
                      id="input-4"
                      v-model="form.shortname"
                      placeholder="Enter City Short Name"
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
                  <b-icon-check-square></b-icon-check-square>
                  <span class="sr-only">Selected</span>
                </template>
                <template v-else>
                  <b-icon-square></b-icon-square>
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
        country: null,
        state: null,
        city: '',
        shortname: ''
      },
      countries: [{text: 'Select Country', value: null}, 'INDIA', 'USA'],
      states: [{text: 'Select One', value: null}, 'Rajasthan', 'Karnataka'],
      show: true,
      datas: [
        {city: 'Jodhpur'}
      ],
      fields: [
        'selected',
        { key: 'city', label: 'City', sortable: true, sortDirection: 'desc', class: 'text-left ml-1' },
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

a{
  text-decoration: none;
  color: #ffffff;
}
</style>
