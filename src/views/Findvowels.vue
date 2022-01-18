<template>
     <div class="main-content-wrapper">
        <div class="content">
            <h1 class="title">{{ title }}</h1>
            <div class="explanation">
                <p>
                    Write one word, and you'll get the vowel's count as result!. E.g: Chocolate has: 2 o, 1 a and 1 e. That's 4 vowels.
                </p>
            </div>
            <div class="form-wrapper flex-col sm:flex-row sm:justify-between sm:items-end">
                <div class="input-form">
                    <div class="form-field sm:w-10/12">
                        <label class="form-label" for="str">Enter a word</label>
                        <input class="form-input" id="str" type="text" v-model="str" @keyup='updateWord'>
                    </div>
                </div>
                <button class="button action-button mt-5 md:w-2/12" @click='findVowels'>Go!</button>
            </div>
            
            <div class="actions-container flex-col w-full lg:w-8/12">
                <transition-group name="list-complete" tag="p" class='word'>
                    <span
                    v-for="(item, index) in vowelsCount"
                    :key="index"
                    class="list-complete-item letter">
                        <p>{{ item.vowel }} = {{ item.count }}</p>
                    </span>
                </transition-group>

                <transition-group name="list-complete" tag="p" class='word mt-6'>
                    <span
                    v-for="letter in word"
                    :key="letter"
                    class="list-complete-item letter">
                        <p v-if="letter == ' '">_</p>
                        <p v-else>{{ letter }}</p>
                    </span>
                </transition-group>
            </div>
            
            <transition name='show-warning'>
                <div class="warning" v-if='showWarning' v-bind:class='{ showWarning: showWarning }'>
                    <p>{{ warningMessage }}</p>
                </div>
            </transition>
        </div>
    </div>
</template>


<script>

import { ref } from 'vue'

export default {
    setup() {

        // Properties
        const title = 'Find and Count Vowels';
        const str = ref('')
        const word = ref([])
        const initialVowelsCount =  [
            {vowel: 'A', count: 0},
            {vowel: 'E', count: 0},
            {vowel: 'I', count: 0},
            {vowel: 'O', count: 0},
            {vowel: 'U', count: 0},
        ]
        const vowelsCount = ref(initialVowelsCount.map((item) => item))
        const showWarning = ref(false)
        const warningMessage = ref('')

        // Methods
        const validateStr = () => {
        
            let valid = false
                        
            if (str.value == '') {
                warningMessage.value = 'You must enter a word'
                showWarning.value = true
                return valid
            } 
            else if(str.value == ' ') {
                warningMessage.value = 'You must enter a word'
                showWarning.value = true
                return valid
            }
            
            valid = true
            showWarning.value = false
            return valid
        }

        const updateWord = () => {
            if(!validateStr()) {
                showWarning.value = false
            }
        
            word.value = str.value.toUpperCase().split('')

            if (word.value.length == 0)
                vowelsCount.value = []
        }

        const findVowels = () => {
            vowelsCount.value = []
        
            const vowels = ['A', 'E', 'I', 'O', 'U'];

            let vowelsObj = word.value.reduce(function (obj, letter) {
                for (let vowel of vowels) {
                    if (vowel == letter) {
                        if (!obj[vowel])
                            obj[vowel] = 1;
                        else
                            obj[vowel]++;
                        break;
                    }
                }

                return obj;
            }, {});
        
            for (let vowel in vowelsObj) {
                vowelsCount.value.push({
                    'vowel': vowel,
                    'count': vowelsObj[vowel]
                });
            }
        }

        return {
          title,
          str,
          word,
          vowelsCount,
          showWarning,
          warningMessage,
          updateWord,
          findVowels,
        }
    },
}
</script>