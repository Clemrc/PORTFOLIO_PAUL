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
      <li>
        <nuxt-link to="/works" class="hidetext text-nav">Clients</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/about" class="hidetext text-nav">Contact</nuxt-link>
      </li>
    </ul>
    <div id="_progress"></div>
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
      duration: 1,
      stagger: 0.1
    })
    document.addEventListener('scroll', function () {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop

      const scrollBottom =
        (document.documentElement.scrollHeight || document.body.scrollHeight) -
        document.documentElement.clientHeight

      const scrollPercent = (scrollTop / scrollBottom) * 100 + '%'
      const scrollPercentDecimal = Math.round((scrollTop / scrollBottom) * 100)

      document
        .getElementById('_progress')
        .style.setProperty('--scroll', scrollPercent)

      document.getElementById('_percent').innerHTML = scrollPercentDecimal
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
  margin-bottom: 50px;
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
li,
.line {
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
  padding: 0;
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

.separation {
  display: flex;
  align-items: center;
  width: 100%;
}

.line {
  width: 100%;
  height: 1px;
  background-color: black;
}

#_progress {
  --scroll: 0%;
  background: linear-gradient(
    to right,
    rgb(0, 0, 0) var(--scroll),
    transparent 0
  );
  position: fixed;
  width: 100%;
  height: 5px;
  right: 0px;
  top: 0px;
  z-index: 100;
}
</style>
