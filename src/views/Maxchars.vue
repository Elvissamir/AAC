<template>
     <div class="main-content-wrapper">
        <div class="content">
            <h1 class="title">{{ title }}</h1>
            <div class="explanation">
                <p>
                    This program finds the letter with the highest count in the word.
                </p>
            </div>
            <div class="form-wrapper flex-col sm:flex-row sm:justify-between sm:items-end">
                <div class="input-form">
                    <div class="form-field sm:w-10/12">
                        <label class="form-label" for="str">Enter a word</label>
                        <input class="form-input" id="str" type="text" v-model="str" @keyup='updateWord'>
                    </div>
                </div>
                <button class="button action-button mt-5 md:w-2/12" @click='findMaxChar'>Find!</button>
            </div>
            
            <div class="actions-container flex-col w-full lg:w-8/12">
                <transition-group name="list-complete" tag="p" class='word'>
                    <span
                        v-for="letter in word"
                        :key="letter"
                        class="list-complete-item letter">
                        <p v-if="letter == ' '">_</p>
                        <p v-else>{{ letter }}</p>
                    </span>
                </transition-group>

                <transition-group name="list-complete" tag="p" class='word mt-6'>
                    <span
                        v-for="(item, index) in maxchar"
                        :key="index"
                        class="list-complete-item letter">
                        The most repeated character is {{ item.char }}, {{ item.max }} times
                    </span>
                </transition-group>
                
                <transition name='show-warning'>
                    <div class="warning" v-if='showWarning' v-bind:class='{ showWarning: showWarning }'>
                        <p>{{ warningMessage }}</p>
                    </div>
                </transition>
            </div>
            
        </div>
    </div>
</template>


<script>

import { ref } from 'vue'

export default {
    setup() {

        // Properties
        const title = 'Max Chars';
        const str = ref('')
        const word = ref([])
        const maxchar = ref([])
        const showWarning = ref(false)
        const warningMessage = ref('')

        // Methods
        const validateStr = () => {
        
            let valid = true
                        
            if (str.value == ' ' || str.value == '') {
                valid = false
                warningMessage.value = 'Enter a word first'
            }
            
            return valid
        }

        const updateWord = () => {
            word.value = str.value.toUpperCase().split('');
            maxchar.value = [];
            showWarning.value = false;
        }

        const findMaxChar = () => {
            if(!validateStr()) {
                showWarning.value = true;
                return;
            }
            
            let charCount = word.value.reduce(function (obj, letter) {
                
                if (!obj[letter])
                    obj[letter] = 1;
                else
                    obj[letter]++;
                
                return obj;
            }, {});
            
            let char = null;
            let max = 0;
            
            for (let letter in charCount) {
                if (charCount[letter] > max) {
                    char = letter;
                    max = charCount[letter];
                }
            }
            
            maxchar.value.push({
                'char': char,
                'max': max
            });
        }

        return {
          title,
          str,
          word,
          maxchar,
          warningMessage,
          updateWord,
          findMaxChar,
        }
    },
}
</script>