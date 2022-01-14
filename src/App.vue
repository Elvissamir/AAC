<template>
  <div class="w-full relative">
    <Nav></Nav>
    <div class="w-full">
      <!-- VUE VIEW -->
      <router-view/>
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
