<template>
     <div class="main-content-wrapper">
        <div class="content">
            <h1 class="title">{{ title }}</h1>
            <div class="explanation">
                <p>
                    This program sorts the array of numbers using the selection sort algorithm.
                </p>
            </div>
            <div class="form-wrapper flex-col sm:flex-row sm:justify-between sm:items-end">
                <div class="input-form">
                    <div class="form-field sm:w-10/12">
                        <label class="form-label" for="numInput">Enter a number</label>
                        <input class="form-input" id="numInput" type="text" v-model="numStr" @keyup='updateWord'>
                    </div>
                </div>
                <div class="buttons flex flex-col mt-5 sm:flex-row sm:items-center lg:items-end">
                    <button class="button action-button" @click="add">Add</button>
                    <button class="button action-button mt-2 sm:mt-0 sm:ml-2" @click="remove">Remove</button>
                    <button class="button action-button mt-2 sm:mt-0 sm:ml-2" @click="sort">Sort</button>
                    <button class="button action-button mt-2 sm:mt-0 sm:ml-2" @click="reset">Reset</button>
                </div>
            </div>
            
            <div class="actions-container flex-col w-full lg:w-8/12">
                 <transition-group name="list-complete" tag="p" class='word'>
                    <span
                    v-for="(numa, idxa) in arra"
                    :key="idxa"
                    class="list-complete-item letter">
                    {{ numa }}
                    </span>
                </transition-group>
                
                <div>
                    <p class="text-center">Click Sort to sort the array</p>
                    <h2 class="result-title" v-if='sorted'>Result:</h2>
                    <transition-group name="list-complete" tag="p" class='word'>
                        <span
                        v-for="(numb, idxb) in arrb"
                        :key="idxb"
                        class="list-complete-item letter">
                        {{ numb }}
                        </span>
                    </transition-group>
                </div>
                
                <div>
                    <h2 class="steps-title" v-if='sorted'>Steps:</h2>
                    <div v-for="step in steps" :key="step">
                        <span
                        v-for="num in step"
                        :key="num"
                        class="list-complete-item letter">
                        {{ num }}
                        </span>
                    </div>
                </div>
                
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
        const title = 'Selection Sort'
        const arra = ref([100,20,10,5,3,9,8,0,1,2])
        const arrb = ref([])
        const steps = ref([])
        const numStr = ref('')
        const num = ref(null)
        const showWarning = ref(false)
        const warningMessage = ref('')
        const sorted = ref(false)
        const current = ref(null)

        // Methods
        const validateNumStr = () => {
            if (isNaN(num.value)) {
                return false;
            }
            
            return true;
        }

        const add = () =>  {
            num.value = parseInt(numStr.value);
            
            if (!validateNumStr()) {
                warningMessage.value = 'You must enter only numbers';
                showWarning.value = true;
                numStr.value = '';
                return;
            }
        
            showWarning.value = false;
            
            arra.value.push(num.value);
            numStr.value = '';
        }
    
        const remove = () => {
            if (arra.value.length > 0) {
                arra.value.pop();
            }
        }

        const reset = () => {
            numStr.value = '';
            num.value = null;
            arra.value = [];
            arrb.value = [];
            steps.value = [];
        }
    
        const recordStep = (arr) => {
            let stp = [];
            
            for (let num of arr) {
                stp.push(num);
            }
            
            steps.value.push(stp);
        }

        const sort = () => {
        
            if (arra.value.lenght == 0) {
                warningMessage.value = 'You havent numbes to the array.';
                showWarning.value = true;
                return;
            }
            
            sorted.value = false;
            
            arrb.value = [];
            
            for (let num of arra.value) {
                arrb.value.push(num);
            }
            
            let arr = arrb.value;
        
            recordStep(arr);
            
            let len = arr.length;
            for (let i = 0; i < len; i++) {
                let min = i;
                for (let j = i + 1; j < len; j++) {
                    if (arr[min] > arr[j]) {
                        min = j;
                    }
                }
                if (min !== i) {
                    swap(arr, i, min);
                    recordStep(arr);
                }
            }
            
            recordStep(arr);
            arrb.value = arr;
            
            sorted.value = true;
        }

        const swap = (arr, x, y, n) => {
            let temp = arr[x];
        
            arr.splice(x, 1, arr[y]);
            arr.splice(y, 1, temp);
        }
       
        return {
          title,
          current,
          arra,
          arrb,
          steps,
          numStr,
          sorted,
          add,
          sort,
          reset,
          remove,
          showWarning,
          warningMessage,
        }
    },
}
</script>