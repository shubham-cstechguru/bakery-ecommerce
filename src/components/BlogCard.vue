<template lang="html">
  <div>
    <b-card
      :title="blog.title"
      :img-src="require(`@/assets/${ blog.image }`)"
      img-alt="Image"
      img-top
      tag="article"
      class="mb-2"
      >
      <b-card-text
        class="small text-muted"
        >
        April 18, 2018
      </b-card-text>
      <b-card-text
        v-html="blog.desc.substring(0, 70)"
        >
      </b-card-text>
      <router-link
        :to="{ name: 'single-blog', params: {id: blog.id} }"
        >
        <b-button
          class="button"
          >
          Read More
        </b-button>
      </router-link>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "blogs-card",
  props: ['blog']
}
</script>

<style lang="css" scoped>
.card img{
  display: block;
  height: 230px;
  width: auto;
  position: relative;
  z-index: 0;
  overflow: hidden;
}
.card{
  background: none;
  border: none;
  margin: 0px 8px;
}
.card img{
  width: 100%;
  overflow: hidden;
  position: relative;
  display: block;
}
.card h4{
  font-family: "PT Sans";
  font-weight: 599;
}
.card p{
  font-family: "Work Sans";
}
.card .button{
  background-color: #94c9d9;
  color: #ffffff;
  border: none;
  padding: 7px 9px;
  border-radius: 2px;
  margin-top: 11px;
}

</style>
