<template lang="html">
  <div class="sales">
    <b-container fluid>
      <AdminHeading pageTitle="Sales" />
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
          text: 'Sales',
        },
      ]
    }
  }
}
</script>

<style lang="css" scoped>
</style>
