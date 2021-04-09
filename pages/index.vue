<template>
  <div id="js-scroll" class="container">
    <WelcomeScreen v-if="!animvalidation" />
    <section data-scroll-section class="main" v-show="main">
      <img
        v-for="(item, i) in items"
        :key="i"
        :src="`photos_tinypng/${item.src}`"
      />
    </section>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'
import WelcomeScreen from '~/components/WelcomeScreen'

import gsap from 'gsap'

var cache = {}
const images = require.context('../static/photos_tinypng/', false, /\.jpg$/)
var imagesArray = Array.from(images.keys())
var constructed = []
function constructItems(fileNames, constructed) {
  fileNames.forEach((fileName) => {
    constructed.push({
      src: fileName.substr(1)
    })
  })
  return constructed
}
var res = constructItems(imagesArray, constructed)

export default {
  components: {
    Navbar,
    WelcomeScreen
  },
  data() {
    return {
      main: false,
      items: res,
      animvalidation: ''
    }
  },
  async asyncData({ $content }) {
    const page = await $content('index').fetch()
    return {
      page
    }
  },
  mounted() {
    const tl = gsap.timeline()
    if (!this.$store.state.firstAnimation) {
      tl.delay(3.8).call(this.show(this)).to('img', {
        y: '2%',
        duration: 1,
        opacity: 1,
        stagger: 0.1
      })
      this.$store.dispatch('store/validateFirstAnimation', {
        validation: true
      })
    } else {
      tl.call(this.show(this)).to('img', {
        y: '2%',
        duration: 1,
        opacity: 1,
        stagger: 0.1
      })
    }
  },
  updated() {
    this.animvalidation = this.$store.state.firstAnimation
  },
  methods: {
    show: (c) => {
      return () => {
        c.main = true
      }
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');

.container {
  min-height: calc(100vh - 200px);
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: center;
  flex-direction: column;
  font-family: 'orkneyregular', sans-serif;
}

.main {
  padding: 0 20px;
  margin: 100px auto;
  flex-direction: column;
}

h1 {
  font-size: 1.6rem;
  margin: 2rem;
}

section img {
  opacity: 0;
  width: 80%;
  margin: 20px;
}

@media (min-width: 1300px) {
  .main {
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    align-self: center;
    flex-wrap: wrap;
    flex-direction: row;
  }

  section img {
    width: 400px;
  }
}
</style>
