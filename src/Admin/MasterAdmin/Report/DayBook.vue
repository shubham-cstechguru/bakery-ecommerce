<template lang="html">
  <div class="daybook">
    <b-container fluid>
      <AdminHeading pageTitle="Daybook" />
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
          text: 'Daybook',
        },
      ]
    }
  }
}
</script>

<style lang="css" scoped>
</style>
