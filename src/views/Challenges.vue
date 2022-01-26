<template>
    <div class="main-content-wrapper">
        <div class="content">
            <h1 class="title">Challenges</h1>
            <div class="line"></div>

            <!-- Algorithms -->
            <div class="flex flex-col mt-16">
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
        
        const challenges = [
            {routeName: 'StringReversal', title: 'String Reversal', imageUrl: 'imgs/linkedlist_c.png'},
            {routeName: 'Palindrome', title: 'Palindrome', imageUrl: 'imgs/palindrome_c.png'},
            {routeName: 'FizzBuzz', title: 'Fizz Buzz', imageUrl: 'imgs/fizzbuzz_c.png'},
            {routeName: 'FindVowels', title: 'Find Vowels', imageUrl: 'imgs/findvowels_c.png'},
            {routeName: 'MaxChars', title: 'Max Chars', imageUrl: 'imgs/maxchars_c.png'},
            {routeName: 'Anagram', title: 'Anagram', imageUrl: 'imgs/anagram_c.png'}
        ]

        return {
            challenges,
        }
    },
}
</script>