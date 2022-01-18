<template>
     <div class="main-content-wrapper">
        <div class="content">
            <h1 class="title">{{ title }}</h1>
            <div class="explanation">
                <p>
                    A palindrome is a word that reads the same backward as forward, E.g. madam, radar or refer.
                </p>
            </div>
            <div class="form-wrapper flex-col sm:flex-row sm:justify-between sm:items-end">
                <div class="input-form">
                    <div class="form-field sm:w-10/12">
                        <label class="form-label" for="stra">Enter a word</label>
                        <input class="form-input" id="stra" type="text" v-model="inputStr" @keyup='updateWord'>
                    </div>
                </div>
                <button class="button action-button mt-5 md:w-2/12" @click='palindrome'>Check!</button>
            </div>
            
            <div class="actions-container flex-col w-full lg:w-8/12">
                <transition-group name="list-complete" tag="p" class='word'>
                    <span
                        v-for="lettera in worda"
                        :key="lettera"
                        class="list-complete-item letter">
                        {{ lettera }}
                    </span>
                </transition-group>

                <transition-group name="list-complete" tag="p" class='word mt-6'>
                    <span
                        v-for="letterb in wordb"
                        :key="letterb"
                        class="list-complete-item letter">
                        {{ letterb }}
                    </span>
                </transition-group>
          
                <transition name='show-result'>
                    <div class="result" v-if='showResult' v-bind:class='[(!isPalindrome) ? yp : np]'>
                        <p v-if="isPalindrome">YES!!</p>
                        <p v-else>NO, It's Not</p>
                    </div>
                </transition>
                
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
        const title = 'Is Palindrome???'
        const inputStr = ref('')
        const stra = ref('')
        const strb = ref('')
        const worda = ref([])
        const wordb = ref([])
        const isPalindrome = ref(false)
        const showWarning = ref(false)
        const warningMessage = ref('')
        const showResult = ref(false)
        const np = 'yes'
        const yp = 'no'

        // Methods
        const validateStr = () => {
            let valid = false;
                      
            if (inputStr.value == '') {
                warningMessage.value = 'You must enter a word'
                showWarning.value = true
                return valid
            } 
            else if(inputStr.value == ' ') {
                warningMessage.value = 'You must enter a word'
                showWarning.value = true
                return valid
            }
            
            valid = true
            showWarning.value = false
            return valid
        }

        const palindrome = () => {
            if (!validateStr()) {
                showWarning.value = true;
                return;
            }
            
            showResult.value = true;
            isPalindrome.value = (wordb.value.reverse().join("") == stra.value)? true: false; 
            showResult.value = true;
            inputStr.value = '';
        }

        const updateWord = () => {
            
            if(!validateStr()) {
                showWarning.value = false
            }
        
            stra.value = inputStr.value.toUpperCase()
            strb.value = stra.value
            worda.value = stra.value.split('')
            wordb.value = strb.value.split('')
            showResult.value = false
            isPalindrome.value = false
        }

        return {
          title,
          stra,
          inputStr,
          worda,
          wordb,
          palindrome,
          updateWord,
          isPalindrome,
          warningMessage,
          showResult,
          showWarning,
          yp,
          np,
        }
    },
}
</script>