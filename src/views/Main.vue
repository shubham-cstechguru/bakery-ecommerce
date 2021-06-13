<template lang="html">
  <div class="main">
    <Header />
    <router-view />
    <SideOptions />
    <NewsLetter />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import SideOptions from "@/components/SideOptions"
import NewsLetter from "@/components/NewsLetter"
  export default{
    components: {
      Header,
      SideOptions,
      NewsLetter,
      Footer
    }
  }
</script>

<style lang="css" scoped>
</style>
