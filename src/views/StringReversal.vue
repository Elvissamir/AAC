<template>
     <div class="main-content-wrapper">
        <div class="content">
            <h1 class="title">{{ title }}</h1>
            <div class="explanation">
                <p>
                    Write a word and click to reverse it!.
                </p>
            </div>
            <div class="form-wrapper flex-col sm:flex-row sm:justify-between sm:items-end">
                <div class="input-form">
                    <div class="form-field sm:w-10/12">
                        <label class="form-label" for="str">Enter a word</label>
                        <input class="form-input" id="str" type="text" v-model="str" @keyup='updateWord'>
                    </div>
                </div>
                <button class="button action-button mt-5 md:w-2/12" @click='reverseWord'>Reverse</button>
            </div>
            
            <div class="actions-container flex-col w-full lg:w-8/12">
                <transition-group name="list-complete" tag="p" class='word mt-4'>
                    <span
                        v-for="letter in word"
                        :key="letter"
                        class="list-complete-item letter">
                        {{ letter }}
                    </span>
                </transition-group>

                <span class="mt-5 text-center font-black tracking-widest text-indigo-900 bg-white border border-black text-2xl p-4">
                    {{ wordReversed }}
                </span>

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
        const title = 'String Reversal';
        const str = ref('')
        const word = ref([])
        const wordReversed = ref('')
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
            wordReversed.value = ''
        }

        const reverse = (wordarr) => {
            const wr = [];
            
            for (let letter of wordarr) {
                wr.unshift(letter); 
            }
            
            return wr;
        }

        const reverseWord = () => {
            
            if(!validateStr()) {
                showWarning.value = true;
                return;   
            }
            else {
                showWarning.value = false;
            }

            wordReversed.value = reverse(word.value).join('')
        }
       
        return {
          title,
          str,
          word,
          wordReversed,
          reverseWord,
          showWarning,
          warningMessage,
          updateWord,
        }
    },
}
</script>