<template>
  <div class="app-container">
    
    <Mobilemenu @toggle-navbar="showNavbar"></Mobilemenu>
    <Nav :show="show"></Nav>

    <div class="w-full">
      <router-view/>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue'
import Mobilemenu from './components/Mobilemenu.vue'
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'
import Challenges from './views/Challenges.vue'

export default {
  components: {
    Nav,
    Mobilemenu,
    Footer,
    Challenges
  },
  setup () {

    const show = ref(false)
    const screenWidth = ref(window.innerWidth)

    const checkScreenWidth = () => {
      if (screenWidth.value >= 1024)
        show.value = true
    }

    const showNavbar = (event) => {
      show.value = show.value ? false : true 
    }

    onMounted(() => {
      
      window.addEventListener('resize', () => {
        screenWidth.value = window.innerWidth
      })

      checkScreenWidth()
    })

    watch(screenWidth, () => {
      checkScreenWidth()
    })

    return {
      show,
      showNavbar
    }
  }
}
</script>
