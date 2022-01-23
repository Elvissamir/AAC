<template>
    <div class="main-content-wrapper">
        <div class="content">
            <h1 class="title">{{ title }}</h1>
            <div class="explanation">
                <p class="text-center">
                    Add nodes to the linked list, remove them or search for values!.
                </p>
            </div>
            <div class="form-wrapper flex-col">
                <div class="input-form">
                    <div class="form-field sm:w-5/12 sm:mr-auto md:mr-5">
                        <label class="form-label" for="numInput">Enter a number</label>
                        <input class="form-input" id="numInput" type="text" v-model="numStr" @keyup.enter="addLast">
                    </div>

                    <div class="form-field sm:w-5/12">
                        <label class="form-label" for="numIndex">Enter an Index</label>
                        <input class="form-input" id="numIndex" type="text" v-model="indexStr">
                    </div>
                </div>

                <div class="buttons flex flex-col flex-wrap justify-center mt-5 sm:justify-start sm:flex-row sm:items-end">
                    <button class="button action-button mt-2 sm:mr-2 sm:mt-0" @click="addFirst">Add at Start</button>
                    <button class="button action-button mt-2 sm:mr-2 sm:mt-0" @click="addLast">Add at End</button>
                    <button class="button action-button mt-2 sm:mr-2 sm:mt-0" @click="indexOf">Index oF</button>
                    <button class="button action-button mt-2 sm:mr-2 md:mt-0" @click="removeFirst">Remove First</button>
                    <button class="button action-button mt-2 sm:mr-2 md:mt-0" @click="removeLast">Remove Last</button>
                    <button class="button action-button mt-2" @click="contains">Contains Number</button>
                </div>

                <p class="text mt-5">These actions require the index field.</p>
                <div class="buttons justify-center flex flex-col mt-2 sm:justify-start sm:flex-row sm:items-end">
                    <button class="button action-button sm:mr-2" @click="add">Add at Position</button>
                    <button class="button action-button mt-2 sm:mt-0" @click="remove">Remove</button>
                </div>
            </div>
            
            <div class="actions-container flex-col w-full lg:w-8/12">
               <transition-group name="list-complete" tag="p" class='word'>
                    <span
                    v-for="(node, idxa) in llgraph"
                    :key="idxa"
                    class="list-complete-item item">
                    {{ node }}
                    </span>
                </transition-group>
                
                <transition name='show-result'>
                    <div class="result text-center" v-if='showResult' v-bind:class='{ showResult: showResult }'>
                        <p>{{ result }}</p>
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
import LinkedList from '../algorithms/LinkedList'

export default {
    setup() {

        // Properties
        const title = 'Linked List';
        const numStr = ref('')
        const num = ref(null)
        const indexStr = ref('')
        const index = ref(null)
        const llgraph = ref([])
        const showWarning = ref(false)
        const warningMessage = ref('')
        const result = ref(null)
        const showResult = ref(false)
        const linkedList = new LinkedList()

        const clearOutput = () => {
            showResult.value = false;
            showWarning.value = false;
        }

        const validateInput = (options) => {
            let valid = true;
            
            clearOutput();
        
            for (let option of options) {
                if (option == 'num') {
                    if (!validateNumStr()) {
                        warning('You must enter only numbers');
                        numStr.value = '';
                        valid = false;
                    }
                }
                else if (option == 'index') {
                    if (!validateIndexStr()) {
                        warning('You must enter only numbers');
                        indexStr.value = '';
                        valid = false;
                    }
                }
            }
            return valid;
        }

        const validateNumStr = () => {
            num.value = parseInt(numStr.value);
            
            if (isNaN(num.value)) {
                return false;
            }
            
            return true;
        }

        const validateIndexStr = () => {
            index.value = parseInt(indexStr.value);
            
            if (isNaN(index.value)) {
                return false;
            }

            return true;
        }

        const indexOf = () => {
            if (!validateInput(['num']))
                return;
            
            showWarning.value = false;
            
            result.value = linkedList.indexOf(num.value);
            clearStrInput();
            
            showResult.value = true;
        }
        
        const addFirst = () => {
            if (!validateInput(['num']))
                return;
            
            showWarning.value = false;
            
            linkedList.addFirst(num.value);
            drawList(linkedList.generateArr());
            clearStrInput();
        }

        const addLast = () => {
            if (!validateInput(['num']))
                return;
            
            showWarning.value = false;
            
            linkedList.addLast(num.value);
            drawList(linkedList.generateArr());
            clearStrInput();
        }

        const add = () => {
            if (!validateInput(['num', 'index']))
                return;
            
            showWarning.value = false;
            
            linkedList.add(num.value, index.value);
            drawList(linkedList.generateArr());
            clearStrInput();
        }

        const remove = () => {
            if (!validateInput(['num']))
                return;

            if (linkedList.length == 0) {
                warning('There are no nodes left to remove');   
                return;
            }
            
            showWarning.value = false;
            
            linkedList.remove(num.value);
            drawList(linkedList.generateArr());
            clearStrInput();
        }

        const removeFirst = () => {
            if (linkedList.length == 0) {
                warning('There are no nodes left to remove');   
                return;
            }
            
            showWarning.value = false;
            
            linkedList.removeFirst();
            drawList(linkedList.generateArr());
            clearStrInput();
        }

        const removeLast = () => {
            if (linkedList.length == 0) {
                warning('There are no nodes left to remove');   
                return;
            }
            
            showWarning.value = false;
            
            linkedList.removeLast();
            drawList(linkedList.generateArr());
            clearStrInput();
        }

        const contains = () => {
            if (!validateInput(['num']))
                return;
            
            showWarning.value = false;
            
            result.value = linkedList.contains(num.value);
            clearStrInput();
            
            showResult.value = true;
        }

        const reset = () => {
            numStr.value = '';
            num.value = null;
            numStr.value = '';
            num.value = null;
            linkedList = new LinkedList()
        }

        const drawList = (arr) => {
            llgraph.value = [];
            
            for (let i = 0; i <= arr.length - 1; i++) {
                if (i == arr.length - 1 || arr.length == 1) {
                    llgraph.value.push(arr[i]);
                }
                else {
                    llgraph.value.push(arr[i]);
                    llgraph.value.push('-');
                }
            }
        
        }

        const clearStrInput = () => {
            numStr.value = '';
            indexStr.value = '';
        }

        const warning = (message) => {
            warningMessage.value = message;
            showWarning.value = true;
        }

        return {
            title,
            numStr,
            num,
            indexStr,
            index,
            llgraph,
            showWarning,
            warningMessage,
            result,
            showResult,
            remove,
            removeFirst,
            removeLast,
            add,
            addFirst,
            addLast,
            contains,
            reset,
            indexOf,
        }
    },
}
</script>