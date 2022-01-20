<template>
     <div class="main-content-wrapper">
        <div class="content">
            <h1 class="title">{{ title }}</h1>
            <div class="explanation">
                <p>
                    This program prints the numbers from start to end. For multiples of 3 prints “Fizz” instead of the number and for the multiples of 5 prints “Buzz”. 
                </p>
            </div>
            <div class="form-wrapper flex-col md:flex-row md:justify-between md:items-end">
                <div class="input-form">
                    <div class="form-field sm:w-5/12 sm:mr-auto md:mr-5">
                        <label class="form-label" for="numa">Start</label>
                        <input class="form-input" id="numa" type="text" v-model="numa" @keyup='updateWord'>
                    </div>

                     <div class="form-field sm:w-5/12">
                        <label class="form-label" for="numb">End</label>
                        <input class="form-input" id="numb" type="text" v-model="numb" @keyup='updateWord'>
                    </div>
                </div>
                <button class="button action-button mt-5 md:w-2/12" @click='fizzbuzz'>Go!</button>
            </div>
            
            <div class="actions-container flex-col w-full">
                <transition-group class='result-list flex flex-wrap w-10/12' name="result-list" tag="ul">
                    <li
                    v-for="(item, index) in result"
                    :key="index"
                    class="result-list-item" 
                    :class='item.class'>
                    {{ item.val }}
                    </li>
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
        const title = ref('Fizz Buzz')
        const numa = ref(null)
        const numb = ref(null)
        const result = ref([])
        const showWarning = ref(false)
        const warningMessage = ref('')

        // Methods
        const validateInput = () => {
          
            let valid = false;
                        
            if (isNaN(parseInt(numa.value)) || isNaN(parseInt(numb.value)))  {
                warningMessage.value = 'You must enter two numbers';
                showWarning.value = true;
                return valid;
            } 
            else if(numa.value == ' ' || numb.value == ' ') {
                warningMessage.value = 'You must enter two numbers';
                showWarning.value = true;
                return valid;
            }
            else if (parseInt(numb.value) < parseInt(numa.value)){
                warningMessage.value = 'The second number must be higher thant the first';
                showWarning.value = true;
                return valid;
            }
            
            numa.value = parseInt(numa.value);
            numb.value = parseInt(numb.value);
            
            valid = true;        
            showWarning.value = false;
            return valid;
        }

        const fizzbuzz = () => {
        
            if (!validateInput())
                return;

            result.value = [];
            
            let fn = numa.value;
            let ln = numb.value;
            let item = null;
            let delay = 0;
            
            let addItem = function (arr, item) {
                setTimeout(function () {
                    arr.push(item);
                }, delay);   
            };
            
            for (let n = fn; n <= ln; n++) {
                
                delay = n*200;
                
                //If number is multiple of 3 and 5
                if (n % 3 == 0 && n % 5 == 0) {
                    item = {val: 'FizzBuzz', class: 'fizzbuzz'};
                    addItem(result.value, item);      
                }
                //If number is multiple of 3
                else if (n % 3 == 0) {
                    item = {val: 'Fizz', class: 'fizz'};
                    addItem(result.value, item);      
                }
                //If number is multiple of 5
                else if (n % 5 == 0) {
                    item = {val: 'Buzz', class: 'buzz'};
                    addItem(result.value, item);      
                }
                //Else 
                else {
                    item = {val: n, class: 'number'};
                    addItem(result.value, item);   
                }
            }
        }

        return {
          title,
          numa,
          numb,
          result,
          showWarning,
          warningMessage,
          fizzbuzz,
        }
    },
}
</script>