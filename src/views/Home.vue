<template>
    <div class="main-content-wrapper">
        <div class="content">
            <h1 class="title">AAC</h1>
            <h2 class="text-2xl text-center text-indigo-900 font-black font-playfair mt-3">Algorithms And Challenges</h2>
            <div class="w-full text-center">
                <p class="text-xl text-indigo-900 font-black font-lora mt-6">AAC is a collection of algorithms and challenges with UI that allows user interaction.</p>    
            </div>
            <!-- Algorithms -->
            <div class="flex flex-col mt-10">
                <p class="text-2xl text-indigo-900 text-center font-black font-lora">Algorithms</p>
                <div class="preview-section">
                    <router-link v-for="(algorithm, i) in algorithms" :key="i" class="preview-link" :to="{ name: algorithm.routeName }">
                        <p class="text-indigo-900 text-center text-xl  font-lora font-black">{{ algorithm.title }}</p>
                        <img class="preview-image mt-2" :src="algorithm.imageUrl" alt="Linked List">
                    </router-link>
                </div>
            </div>

            <!-- Challenges -->
            <div class="flex flex-col mt-10">
                <p class="text-2xl text-indigo-900 text-center font-black font-lora">Challenges</p>
                <div class="preview-section">
                    <router-link v-for="(challenge, i) in challenges" :key="i" class="preview-link" :to="{ name: challenge.routeName }">
                        <p class="text-indigo-900 text-center text-xl  font-lora font-black">{{ challenge.title }}</p>
                        <img class="preview-image mt-2" :src="challenge.imageUrl" alt="Linked List">
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    setup() {
        const algorithms = [
            {routeName: 'BinaryTree', title: 'Binary Tree', imageUrl: 'imgs/binarytree_c.png'},
            {routeName: 'LinkedList', title: 'Linked List', imageUrl: 'imgs/linkedlist_c.png'},
            {routeName: 'SelectionSort', title: 'Selection Sort', imageUrl: 'imgs/selection_c.png'},
            {routeName: 'ShortestPath', title: 'Shortest Path', imageUrl: 'imgs/shortest_c.png'},
        ]

        const challenges = [
            {routeName: 'StringReversal', title: 'String Reversal', imageUrl: 'imgs/linkedlist_c.png'},
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

