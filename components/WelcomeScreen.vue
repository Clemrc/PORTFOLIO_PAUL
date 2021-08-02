<template>
  <div class="welcome-screen">
    <div class="name">
      <h1 class="prenom">
        <span class="hidetext h1 name-intro">Paul</span>
      </h1>
      <h1 class="nom">
        <span class="hidetext h1 name-intro">Jaffredo</span>
      </h1>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'

export default {
  mounted() {
    const tl = gsap.timeline()
    tl.to('.name-intro', {
      ease: 'power2',
      y: '0%',
      delay: 0.5,
      duration: 1,
      stagger: 0.1
    })
      .to('.name-intro ', {
        ease: 'power2',
        y: '150%',
        delay: 1,
        duration: 0.5,
        stagger: 0.1
      })
      .call(this.removeElement('.welcome-screen'))
      .call(this.hideContent(this))
  },
  methods: {
    removeElement: (element) => {
      if (typeof element === 'string') {
        element = document.querySelector(element)
      }
      return function () {
        element.parentNode.removeChild(element)
      }
    },
    hideContent: (c) => {
      return function () {
        c.welcome = false
      }
    }
  }
}
</script>

<style scoped>
/* @import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap'); */

.welcome-screen {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  position: absolute;
  top: 0;
  z-index: 200;
  background: transparent;
  font-family: 'orkneyregular', sans-serif;
}

.name {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
}

.nom {
  margin-left: 40px;
}

h1 {
  transform: translateY(-44px);
  text-transform: uppercase;
  color: rgb(32, 32, 32);
  background-color: #fff;
  overflow: hidden;
  font-size: 48px;
  height: 48px;
}

/* h2 {
  text-transform: uppercase;
  color: rgb(231, 231, 231);
  background-color: #242323;
  overflow: hidden;
  font-size: 50px;
  height: 70px;
} */

/* .description {
  margin-top: 30px;
} */

.hidetext {
  display: inline-block;
  transform: translateY(100%);
}

@media (min-width: 640px) {
  h1 {
    font-size: 64px;
    height: 64px;
  }
}
</style>
