<template>
    <div class="flex flex-col pt-24">
        <router-link class="nav-link" :to="{ name: 'Anagram' }">Anagram</router-link>
        <router-link class="nav-link" :to="{ name: 'Findvowels' }">Findvowels</router-link>
        <router-link class="nav-link" :to="{ name: 'Fizzbuzz' }">Fizzbuzz</router-link>
        <router-link class="nav-link" :to="{ name: 'Maxchars' }">Maxchars</router-link>
        <router-link class="nav-link" :to="{ name: 'Palindrome' }">Palindrome</router-link>
        <router-link class="nav-link" :to="{ name: 'StringReversal' }">String Reversal</router-link>
        <router-link class="nav-link" :to="{ name: 'BinaryTree' }">Binary Search Tree</router-link>
        <router-link class="nav-link" :to="{ name: 'ShortestPath' }">Shortest Path</router-link>
        <router-link class="nav-link" :to="{ name: 'SelectionSort' }">Selection Sort</router-link>
        <router-link class="nav-link" :to="{ name: 'LinkedList' }">Linked List</router-link>
    </div>

    <div class="main-content-wrapper">
        <div class="content">
            <h1 class="title">AAC</h1>
            <h2 class=" text-indigo-900 font-black font-playfair">Algorithms And Challenges</h2>
            <div class="explanation">
                <p class=" text-indigo-900 font-black font-lora">AAC is a collection of algorithms and challenges with UI that allows user interaction.</p>    
            </div>
            <!-- Algorithms -->
            <div class="flex">
                <p class=" text-indigo-900 font-black font-lora">Algorithms</p>
                
            </div>

            <!-- Challenges -->
            <div class="flex">

            </div>
        </div>
    </div>
</template>

