<template lang="html">
  <div class="cashbook">
    <b-container fluid>
      <AdminHeading pageTitle="Cashbook" />
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
          text: 'Cashbook',
        },
      ]
    }
  }
}
</script>

<style lang="css" scoped>
</style>
