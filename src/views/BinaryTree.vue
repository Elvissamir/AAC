<template>
    <div class="main-content-wrapper">
        <div class="content">
            <h1 class="title">{{ title }}</h1>
            <div class="explanation">
                <p>
                    Enter the value of the node and decide if you want to add it to the tree or remove it. (Click the Reset button to start over)
                </p>
            </div>
            <div class="form-wrapper flex-col sm:justify-between lg:flex-row">
                <div class="input-form">
                    <div class="form-field sm:w-10/12">
                        <label class="form-label" for="numInput">Enter a number</label>
                        <input class="form-input" id="numInput" type="text" v-model="numStr" @keyup.enter='insert'>
                    </div>
                </div>
                <div class="buttons flex flex-col mt-5 sm:flex-row sm:items-center lg:items-end">
                    <button class="button action-button" @click="insert">Insert</button>
                    <button class="button action-button mt-2 sm:mt-0 sm:ml-2" @click="remove">Remove</button>
                    <button class="button action-button mt-2 sm:mt-0 sm:ml-2" @click="reset">Reset</button>
                </div>
            </div>
            
            <div class="actions-container flex-col w-full lg:w-8/12">
                <div class="treec" id="treec">
                    <transition-group name="list-complete" tag="div">
                        <div
                        v-for="(level, idxb) in tree"
                        :key="idxb"
                        class="list-complete-item level">
                            <div class="flex" v-for="(item, i) in level" :key="i">
                                <div class="empty" v-if="item == '-'"></div>
                                <div class="node" v-else>{{ item }}</div>
                            </div>
                        </div>
                    </transition-group>
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
import BinarySearchTree from '../algorithms/BinarySearchTree'

export default {
    setup() {

        const title = ref('Binary Search Tree')
        const numStr = ref('')
        const showWarning = ref(false)
        const warningMessage = ref('')
        const tree = ref([])
        const maxLevels = 5
        let levelCount = 0
        let num = null
        let bst = new BinarySearchTree()

        // Functions
        const clearOutput = () => {
            showWarning.value = false
        }

        const validateInput = (options) => {
            let valid = true

            clearOutput()

            for (let option of options) {
                if (option == 'num') {
                    if (!validateNumStr()) {
                        warning('You must enter only numbers');
                        numStr.value = '';
                        valid = false;
                    }
                }
            }
            return valid;
        }

        const validateNumStr = () => {
            num = parseInt(numStr.value);
        
            if (isNaN(num)) {
                return false;
            }
            
            return true;
        }

        const insert = () => {
            if (!validateInput(['num']))
                return;

            if (num > 99 || num < -99) {
                warning('Add numbers between -99 to 99 so it looks nice ;)')
                return
            }
        
            showWarning.value = false;
            
            bst.insertChild(num);
            draw();
            clearStrInput();
        }

        const remove = () => {
            if (!validateInput(['num']))
                return;

            if (tree.value.length == 0) {
                warning('There are no nodes left to remove');
                return;
            }
            
            showWarning.value = false;
            
            bst.remove(num);
            draw();
            clearStrInput();
        }

        const reset = () => {
            numStr.value = '';
            num = null;
            numStr.value = '';
            tree.value = [];
            bst = new BinarySearchTree();
        }

        const draw = () => {
            tree.value = [];
            let levels = bst.draw();
            
            for (let level of levels) {
                tree.value.push(level);
            }    
        }

        const clearStrInput = () => {
            numStr.value = '';
        }

        const warning = (message) => {
            warningMessage.value = message;
            showWarning.value = true;
        }

        return {
            title, 
            numStr,
            showWarning,
            warningMessage,
            tree,
            insert,
            remove,
            reset,
        }
    },
}
</script>