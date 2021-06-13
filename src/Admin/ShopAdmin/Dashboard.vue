<template lang="html">
  <div class="dashboard">
    <b-container fluid>
      <AdminHeading pageTitle="Dashboard" />
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
          text: 'Dashboard',
        },
      ]
    }
  }
}
</script>

<style lang="css" scoped>
</style>
