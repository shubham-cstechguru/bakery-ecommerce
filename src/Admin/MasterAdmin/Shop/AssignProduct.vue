<template lang="html">
  <div class="assignproduct">
    <section>
      <b-container fluid>
        <AdminHeading pageTitle="Assign Product" />
        <b-row>
          <b-col cols="6">
            <b-form-group
            label-for="filter-input-1"
            >
            <b-input-group size="lg">
              <b-form-input
              id="filter-input-1"
              list="my-list-id"
              v-model="search_shop"
              type="search shop"
              placeholder="Search Shop"
              class="py-3"
              >
            </b-form-input>
          </b-input-group>
        </b-form-group>
        <datalist id="my-list-id">
          <option v-for="(shop, i) in shops" :key="i">{{ shop }}</option>
        </datalist>
      </b-col>
      <b-col v-if="search_shop" cols="6">
        <b-form-group
        label-for="filter-input"
        >
        <b-input-group size="lg">
          <b-form-input
          id="filter-input"
          v-model="filter"
          type="search"
          placeholder="Type to Search Product"
          class="py-3"
          >
        </b-form-input>
        <b-input-group-append>
          <b-button
          :disabled="filter"
          @click="filter = ''"
          class="ml-2"
          >
          Search
        </b-button>
      </b-input-group-append>
    </b-input-group>
  </b-form-group>
</b-col>

</b-row>

<b-row v-if="search_shop">
  <b-col cols="6">

    <b-card class="mt-5">
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
        <b-button size="sm" class="mr-2" @click="row.toggleDetails">
          {{ row.detailsShowing ? 'Hide' : 'Show' }} Details
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
    <b-button type="submit" variant="primary" class="button">Assign Product</b-button>
    <b-button type="reset" variant="danger" class="button">Reset</b-button>

  </b-card>
</b-col>


<b-col cols="6">

  <b-card class="mt-5">
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


  </b-table>
  <b-button type="submit" variant="primary" class="button">Unassign Product</b-button>
  <b-button type="reset" variant="danger" class="button">Reset</b-button>

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
      shops: [
        'Shop Name 1', 'Shop Name 2', 'Shop Name 3','Shop Name 4','Shop Name 5'
      ],
      search_shop: '',
      datas: [
        {productimages: 'Shop Name 1' , productname: 'Dickerson Macdonald' },
        {productimages: 'Shop Name 2' , productname: 'Larsen Shaw'  },
        {productimages: 'Shop Name 3' , productname: 'Mini Navarro'  },
        {productimages: 'Shop Name 4' , productname: 'Geneva Wilson'  },
        {productimages: 'Shop Name 5' , productname: 'Jami Carney'  },
        {productimages: 'Shop Name 6' , productname: 'Essie Dunlap'  },
        {productimages: 'Shop Name 7' , productname: 'Thor Macdonald'  },
        {productimages: 'Shop Name 8' , productname: 'Larsen Shaw' },
        {productimages: 'Shop Name 9' , productname: 'Mitzi Navarro'  },
        {productimages: 'Shop Name 10', productname: 'Genevieve Wilson' },
        {productimages: 'Shop Name 11', productname: 'John Carney' },
        {productimages: 'Shop Name 12', productname: 'Dick Dunlap'  }
      ],
      fields: [
        'selected',
        { key: 'productname', label: 'Product Name', sortable: true, sortDirection: 'desc', class: 'text-left ml-1' },
        'Product Images',
      ],
      selectMode: 'multi',
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

},
mounted() {
  // Set the initial number of items
  this.totalRows = this.datas.length
},
methods: {

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
