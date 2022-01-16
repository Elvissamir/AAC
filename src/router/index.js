import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Algorithms from '../views/Algorithms.vue'
import Challenges from '../views/Challenges.vue'
import About from '../views/About.vue'

// Challenges
import Anagram from '../views/Anagram.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home 
  },
  {
    path: '/algorithms',
    name: 'Algorithms',
    component: Algorithms
  },
  {
    path: '/challenges',
    name: 'Challenges',
    component: Challenges 
  },
  {
    path: '/about',
    name: 'About',
    component: About 
  },
  {
    path: '/anagram',
    name: 'Anagram',
    component: Anagram
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
