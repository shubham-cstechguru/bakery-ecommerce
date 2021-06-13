<template lang="html">
  <div class="stock">
    <b-container fluid>
      <AdminHeading pageTitle="Stock" />
    </b-container>
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
      items: [
        {
          text: 'Stock',
        },
      ]
    }
  }
}
</script>

<style lang="css" scoped>
</style>
