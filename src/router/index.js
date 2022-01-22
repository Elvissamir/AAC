import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Algorithms from '../views/Algorithms.vue'
import Challenges from '../views/Challenges.vue'
import About from '../views/About.vue'

// Challenges
import Anagram from '../views/Anagram.vue'
import Findvowels from '../views/Findvowels.vue'
import Fizzbuzz from '../views/Fizzbuzz.vue'
import Maxchars from '../views/Maxchars.vue'
import Palindrome from '../views/Palindrome.vue'
import StringReversal from '../views/StringReversal.vue'
import BinaryTree from '../views/BinaryTree.vue'
import ShortestPath from '../views/ShortestPath.vue'

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
  },
  {
    path: '/findvowels',
    name: 'Findvowels',
    component: Findvowels,
  },
  {
    path: '/fizzbuzz',
    name: 'Fizzbuzz',
    component: Fizzbuzz
  },
  {
    path: '/maxchars',
    name: 'Maxchars',
    component: Maxchars
  },
  {
    path: '/palindrome',
    name: 'Palindrome',
    component: Palindrome,
  },
  {
    path: '/stringreversal',
    name: 'StringReversal',
    component: StringReversal,
  },
  {
    path: '/binaryTree',
    name: 'BinaryTree',
    component: BinaryTree,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
