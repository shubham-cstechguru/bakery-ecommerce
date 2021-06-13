<template lang="html">
  <div class="bankbook">
    <b-container fluid>
      <AdminHeading pageTitle="Bankbook" />
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
          text: 'Bankbook',
        },
      ]
    }
  }
}
</script>

<style lang="css" scoped>
</style>
