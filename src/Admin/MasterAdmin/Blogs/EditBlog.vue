<template lang="html">
  <div class="editproduct">
    <b-breadcrumb :items="items" class="my-2"></b-breadcrumb>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: 'Dashboard',
          to: { name: 'Dashboard' }
        },
        {
          text: 'Edit Blog',
        },
      ],
    }
  }
}
</script>

<style lang="css" scoped>
</style>
