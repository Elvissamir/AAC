<template>
    <div class="main-content-wrapper">
        <div class="content">
            <h1 class="title">AAC</h1>
            <h2 class="text-2xl text-center text-indigo-900 font-black font-playfair mt-3 md:text-3xl">Algorithms And Challenges</h2>
            <div class="line"></div>
            <div class="w-full text-center">
                <p class="text-xl text-indigo-900 font-black font-lora mt-7 lg:text-2xl">AAC is a collection of algorithms and challenges with UI that allows user interaction.</p>    
            </div>
            <!-- Algorithms -->
            <div class="flex flex-col mt-24">
                <p class="text-2xl text-indigo-900 text-center font-black font-lora md:text-3xl">Algorithms</p>
                <PreviewSection :elements="algorithms"></PreviewSection>
            </div>

            <!-- Challenges -->
            <div class="flex flex-col mt-24">
                <p class="text-2xl text-indigo-900 text-center font-black font-lora md:text-3xl">Challenges</p>
                <PreviewSection :elements="challenges"></PreviewSection>
            </div>
        </div>
    </div>
</template>

<script>
import PreviewSection from '../components/PreviewSection.vue'

export default {
    components: {
        PreviewSection,
    },
    setup() {
        const algorithms = [
            {routeName: 'BinaryTree', title: 'Binary Tree', imageUrl: 'imgs/binarytree_c.png'},
            {routeName: 'LinkedList', title: 'Linked List', imageUrl: 'imgs/linkedlist_c.png'},
            {routeName: 'SelectionSort', title: 'Selection Sort', imageUrl: 'imgs/selection_c.png'},
            {routeName: 'ShortestPath', title: 'Shortest Path', imageUrl: 'imgs/shortest_c.png'},
        ]

        const challenges = [
            {routeName: 'StringReversal', title: 'String Reversal', imageUrl: 'imgs/stringreversal_c.png'},
            {routeName: 'Palindrome', title: 'Palindrome', imageUrl: 'imgs/palindrome_c.png'},
            {routeName: 'FizzBuzz', title: 'Fizz Buzz', imageUrl: 'imgs/fizzbuzz_c.png'},
            {routeName: 'FindVowels', title: 'Find Vowels', imageUrl: 'imgs/findvowels_c.png'},
            {routeName: 'MaxChars', title: 'Max Chars', imageUrl: 'imgs/maxchars_c.png'},
            {routeName: 'Anagram', title: 'Anagram', imageUrl: 'imgs/anagram_c.png'}
        ]

        return {
            algorithms,
            challenges,
        }
    },
}
</script>