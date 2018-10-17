<template>
  <div id="app">
    <Header></Header>
    <Content></Content>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Content,
    Footer
  }
}
</script>

<style scoped>

</style>
