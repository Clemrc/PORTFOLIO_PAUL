<template>
  <div data-scroll-container class="container">
    <WelcomeScreen v-if="!getValidation" />
    <section data-scroll-section class="main">
      <img
        v-for="(item, index) in items"
        :key="index"
        class="img"
        :class="{ active: index === isActive }"
        :src="`photos_tinypng/${item.src}`"
        @click="lookBig(index)"
      />
    </section>
  </div>
</template>

<script>
import gsap from 'gsap'
import WelcomeScreen from '~/components/WelcomeScreen'

const images = require.context('../static/photos_tinypng/', false, /\.jpg$/)
const imagesArray = Array.from(images.keys())
const constructed = []
function constructItems(fileNames, constructed) {
  fileNames.forEach((fileName) => {
    constructed.push({
      src: fileName.substr(1)
    })
  })
  return constructed
}
const res = constructItems(imagesArray, constructed)

export default {
  components: {
    WelcomeScreen
  },
  data() {
    return {
      main: false,
      items: res,
      isActive: null
    }
  },
  computed: {
    getValidation() {
      return this.$store.getters.getValidation
    }
  },
  mounted() {
    const tl = gsap.timeline()
    if (!this.getValidation) {
      tl.delay(3.3)
        // .call(this.show(this))
        .to('img', {
          // y: '5%',
          // duration: 0.2,
          opacity: 1,
          stagger: 0.08
        })
        .then(() => {
          this.$store.dispatch('validateFirstAnimation', {
            validation: true
          })
        })
    } else {
      tl.to('img', {
        // y: '5%',
        // duration: 0.3,
        opacity: 1,
        stagger: 0.05
      })
    }
  },
  methods: {
    lookBig(index) {
      if (this.isActive == null) {
        this.isActive = index
      } else {
        this.isActive = null
      }
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');

.container {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: center;
  flex-direction: column;
  font-family: 'orkneyregular', sans-serif;
}

.main {
  padding: 0 20px;
  margin: 0 auto 40px;
  flex-direction: column;
}

h1 {
  font-size: 1.6rem;
  margin: 2rem;
}

.img {
  opacity: 0;
  width: 200px;
  height: 66px;
  margin: 20px;
  cursor: pointer;
  object-fit: cover;
  /* transition: 1s; */
}

.active {
  width: 50%;
  height: auto;
  transition: 0.3s;
  transition-timing-function: ease-in-out;
}

@media (min-width: 1300px) {
  .main {
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    flex-wrap: wrap;
    flex-direction: row;
  }

  section img {
    width: 300px;
    height: 100px;
  }
}
</style>
