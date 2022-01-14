<template>
  <div class="app-container">
    <Nav></Nav>
    <div class="content-container bg-blue-800 text-white text-5xl">
      Content Container
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Nav,
    Footer
  },
  setup () {

  }
}
</script>
