<template lang="html">
  <div
    class="single_blog"
  >
    <Banner
      :pageTitle="blog.title"
    />
    <b-container
      class="my-5 py-5"
    >
      <b-col
        md="10"
      >
        <b-card
          :title="blog.title"
          :img-src="require(`@/assets/${ blog.image }`)"
          img-alt="Image"
          img-top
          tag="article"
          class="mb-2"
        >
          <b-card-text
            v-html="blog.desc"
          >
          </b-card-text>
          <b-card-text
            class="small text-muted my-5"
          >
            April 18, 2018
          </b-card-text>
        </b-card>
      </b-col>
    </b-container>
  </div>
</template>

<script>
import Banner from "@/components/Banner"
export default {
  name: "single-blog",
  components: {
    Banner
  },
  data (){
    return {
      blog : {
          title: 'A small river named Duden flows',
          desc: '<p class="card-text">Pityful a rethoric question ran over her cheek, then she continued her way. On her way she met a copy.</p> <p>The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word &#8220;and&#8221; and the Little Blind Text should turn around and return to its own, safe country.</p><p>O my friend &#8212; but it is too much for my strength &#8212; I sink under the weight of the splendour of these visions!</p><p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p><p>I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.</p><p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen.</p><p>She packed her seven versalia, put her initial into the belt and made herself on the way.</p><p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane.</p><p>Pityful a rethoric question ran over her cheek, then she continued her way. On her way she met a copy.</p><p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen.</p><p>She packed her seven versalia, put her initial into the belt and made herself on the way.</p><p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane.</p><p>Pityful a rethoric question ran over her cheek, then she continued her way. On her way she met a copy.</p>',
          id: 1,
          image: 'blog.jpg',
        }
    }
  },
}
</script>

<style lang="css" scoped>
.card{
  background: none;
  border: none;
  border-bottom: 2px solid #dadada;
  margin: 0px 8px;
}
.card img{
  display: block;
  height: 560px;
  width: 100%;
  position: relative;
  z-index: 0;
  overflow: hidden;
}
.card h4{
  font-family: "Work Sans";
  font-weight: 200;
  font-size: 36px;
  margin: 25px 0px;
}
.card p{
  font-family: "Work Sans";
  font-size: 18px;
  margin: 11px 0px;
}
</style>
