<template>
  <div id="js-scroll" class="container">
    <section data-scroll-section class="main">
      <h1>Paul Jaffredo</h1>
      <p>aka le plus beau</p>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.container {
  min-height: calc(100vh - 200px);
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: flex-start;
  flex-direction: column;
  font-family: 'orkneyregular', sans-serif;
}

.main {
  padding: 0 20px;
  margin-top: 100px;
  flex-direction: column;
}
</style>
