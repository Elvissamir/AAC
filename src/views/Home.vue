<template>
    <div class="flex flex-col pt-24">
        <router-link class="nav-link" :to="{ name: 'Anagram' }">Anagram</router-link>
        <router-link class="nav-link" :to="{ name: 'Findvowels' }">Findvowels</router-link>
        <router-link class="nav-link" :to="{ name: 'Fizzbuzz' }">Fizzbuzz</router-link>
        <router-link class="nav-link" :to="{ name: 'Maxchars' }">Maxchars</router-link>
        <router-link class="nav-link" :to="{ name: 'Palindrome' }">Palindrome</router-link>
        <router-link class="nav-link" :to="{ name: 'StringReversal' }">String Reversal</router-link>
        <router-link class="nav-link" :to="{ name: 'BinaryTree' }">Binary Search Tree</router-link>
    </div>
</template>