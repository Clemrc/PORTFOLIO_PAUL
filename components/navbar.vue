<template>
  <nav>
    <nuxt-link to="/">
      <div class="name">
        <h1 class="prenom">
          <span class="hidetext h1 text-nav">Paul</span>
        </h1>
        <h1 class="nom">
          <span class="hidetext h1 text-nav">Jaffredo</span>
        </h1>
      </div>
    </nuxt-link>
    <ul>
      <!-- <li>
        <nuxt-link to="/experimentations" class="hidetext text-nav"
          >Experimentations</nuxt-link>
      </li> -->
      <li>
        <nuxt-link to="/works" class="hidetext text-nav">Clients</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/about" class="hidetext text-nav">Contact</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import gsap from 'gsap'

export default {
  mounted() {
    const tl = gsap.timeline()
    tl.to('.text-nav', {
      ease: 'power2',
      y: '0%',
      delay: 2.5,
      duration: 1.5,
      stagger: 0.1
    })
  }
}
</script>

<style scoped>
nav {
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding-top: 50px;
}

.name {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 5px;
  font-family: 'orkneyregular', sans-serif;
}

.nom {
  margin-left: 10px;
}

h1 {
  text-transform: uppercase;
  color: rgb(32, 32, 32);
  font-size: 32px;
  height: 32px;
}

h1,
li {
  background-color: #fff;
  overflow: hidden;
}

.hidetext {
  display: inline-block;
  transform: translateY(-120%);
}

ul {
  display: flex;
  justify-content: flex-end;
  list-style: none;
}

li {
  font-size: 18px;
  height: 34px;
  padding: 5px;
  margin: 0 20px;
}

li:hover {
  cursor: pointer;
}

a {
  text-decoration: none;
  color: black;
}
</style>
