<template lang="html">
  <div
    class="blog"
    >
    <Banner
      pageTitle="Blogs"
      />
    <section
      class="blog_main"
      >
      <b-container>
        <b-row>
          <b-col
            md="6"
            xs="12"
            class="mb-5"
            v-for="blog in blogs"
            :key="blog.id"
            >
            <BlogCard
              :blog="blog"
              >
            </BlogCard>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
import Banner from "@/components/Banner"
import BlogCard from "@/components/BlogCard"
export default {
  name: "blog",
  components: {
    Banner,
    BlogCard,
  },
  data (){
    return {
      blogs : [
        {
          title: 'A small river named Duden flows',
          desc: '<p class="card-text">Pityful a rethoric question ran over her cheek, then she continued her way. On her way she met a copy.</p> <p>The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word &#8220;and&#8221; and the Little Blind Text should turn around and return to its own, safe country.</p><p>O my friend &#8212; but it is too much for my strength &#8212; I sink under the weight of the splendour of these visions!</p><p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p><p>I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.</p><p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen.</p><p>She packed her seven versalia, put her initial into the belt and made herself on the way.</p><p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane.</p><p>Pityful a rethoric question ran over her cheek, then she continued her way. On her way she met a copy.</p><p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen.</p><p>She packed her seven versalia, put her initial into the belt and made herself on the way.</p><p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane.</p><p>Pityful a rethoric question ran over her cheek, then she continued her way. On her way she met a copy.</p>',
          id: 1,
          image: 'blog.jpg',
        },
        {
          title: 'A small river named Duden flows',
          desc: 'Pityful a rethoric question ran over her cheek, then she continued her way. On her way she met a copy. The copy warned the ...',
          id: 2,
          image: 'blog-2.jpg',
        },
        {
          title: 'A small river named Duden flows',
          desc: 'Pityful a rethoric question ran over her cheek, then she continued her way. On her way she met a copy. The copy warned the ...',
          id: 3,
          image: 'blog-1.jpg',
        },
        {
          title: 'A small river named Duden flows',
          desc: 'Pityful a rethoric question ran over her cheek, then she continued her way. On her way she met a copy. The copy warned the ...',
          id: 4,
          image: 'blog-1.jpg',
        },
        {
          title: 'A small river named Duden flows',
          desc: 'Pityful a rethoric question ran over her cheek, then she continued her way. On her way she met a copy. The copy warned the ...',
          id: 5,
          image: 'blog-2.jpg',
        },
        {
          title: 'A small river named Duden flows',
          desc: 'Pityful a rethoric question ran over her cheek, then she continued her way. On her way she met a copy. The copy warned the ...',
          id: 6,
          image: 'blog-2.jpg',
        },
        {
          title: 'A small river named Duden flows',
          desc: 'Pityful a rethoric question ran over her cheek, then she continued her way. On her way she met a copy. The copy warned the ...',
          id: 7,
          image: 'blog-1.jpg',
        },
        {
          title: 'A small river named Duden flows',
          desc: 'Pityful a rethoric question ran over her cheek, then she continued her way. On her way she met a copy. The copy warned the ...',
          id: 8,
          image: 'blog-1.jpg',
        },
      ]
    }
  }
}
</script>

<style lang="css" scoped>
.blog_main{
  padding: 90px 0px;
}
</style>
