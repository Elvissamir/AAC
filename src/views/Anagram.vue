<template>
    <div class="main-content-wrapper">
        <div class="content">
            <h1 class="title">{{ title }}</h1>
            <div class="explanation">
                <p>
                    An Anagram is a word, phrase, or name formed by rearranging the letters of another.
                </p>
                <p class="mt-2">E.g: Cinema, formed from iceman</p>
            </div>
            <div class="form-wrapper flex-col md:flex-row md:justify-between md:items-end">
                <div class="input-form">
                    <div class="form-field sm:w-5/12 sm:mr-auto md:mr-5">
                        <label class="form-label" for="stra">First Word </label>
                        <input class="form-input" id="stra" type="text" v-model="stra" @keyup='updateWord'>
                    </div>

                    <div class="form-field sm:w-5/12">
                        <label class="form-label" for="strb">Second Word </label>
                        <input class="form-input" id="strb" type="text" v-model="strb" @keyup='updateWord'>
                    </div>
                </div>
                <button class="button action-button mt-5 md:w-2/12" @click='anagram'>Go!</button>
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
                    <div class="result" v-if='showResult' v-bind:class='[(isAnagram)? ya : na]'>
                        <p v-if="isAnagram">YES!!</p>
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
        const title = 'Is Anagram???';
        const stra = ref('')
        const strb = ref('')
        const worda = ref([])
        const wordb = ref([])
        const isAnagram = ref(false)
        const showWarning = ref(false)
        const warningMessage = ref('')
        const showResult = ref(false)
        const na = 'no'
        const ya ='yes' 

        // Methods
        const validateStr = () => {
        
            let valid = false;
                        
            if (stra.value == '' || strb.value == '') {
                warningMessage.value = 'You must enter a word';
                showWarning.value = true;
                return valid;
            } 
            else if(stra.value == ' ' || strb.value == ' ') {
                warningMessage.value = 'You must enter a word';
                showWarning.value = true;
                return valid;
            }
            
            valid = true;        
            showWarning.value = false;
            return valid;
        }

        const checkIfAnagram = (stra, strb) => {

            if (stra.length != strb.length) 
                return false

            let fw = stra.toLowerCase().split("")
            let sw = strb.toLowerCase().split("")
            let pos = 0;
            let temparr = sw.map((item) => item)

            for (let letter of fw) {
                pos = temparr.indexOf(letter)

                if (pos != -1)
                    temparr.splice(pos, 1)
                else 
                    break
            }

            return (temparr.length == 0)? true : false
        }

        const anagram = () => {
            if (!validateStr()) {
                showWarning.value = true;
                showResult.value = false;
                return;
            }

            isAnagram.value = checkIfAnagram(stra.value, strb.value);
            showResult.value = true;

            stra.value = '';
            strb.value = '';
        }

        const updateWord = () => {
            if(!validateStr()) {
                showWarning.value = false;
            }
        
            worda.value = stra.value.toUpperCase().split('');
            wordb.value = strb.value.toUpperCase().split('');
            showResult.value = false;
            isAnagram.value = false;
        }

        return {
            title,
            stra,
            strb,
            worda,
            wordb,
            isAnagram,
            showWarning,
            warningMessage,
            showResult,
            na,
            ya,
            validateStr,
            anagram,
            updateWord,
        }
    },
}
</script>