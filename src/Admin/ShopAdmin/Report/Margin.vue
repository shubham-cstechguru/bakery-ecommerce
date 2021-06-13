<template lang="html">
  <div class="margin">
    <b-container fluid>
      <AdminHeading pageTitle="Margin" />
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
          text: 'Margin',
        },
      ]
    }
  }
}
</script>

<style lang="css" scoped>
</style>
