<template>
    <div class="main-content-wrapper">
        <div class="content">
            <h1 class="title">{{ title }}</h1>
            <div class="explanation">
                <p>
                   This program finds the distance between the starting point (from) to the end (to).
                </p>
            </div>
            <div class="form-wrapper flex-col md:flex-row md:justify-between md:items-end">
                <div class="input-form">
                    <div class="form-field sm:w-5/12 sm:mr-auto md:mr-5">
                        <label class="form-label" for="start">From </label>
                        <div class="relative">
                            <select class="form-input" name="start" id="start" v-model="from">
                                <option 
                                v-for="(na, ia) in optionsa" 
                                :key="ia" 
                                :value="na"
                                :disabled="(na == to) ? true : false">
                                        {{ na }}
                                </option>
                            </select>

                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                    </div>

                    <div class="form-field sm:w-5/12">
                        <label class="form-label" for="end">To </label>
                        <div class="relative">
                            <select class="form-input" name="end" id="end" v-model="to">
                                <option 
                                v-for="(nb, ib) in optionsb" 
                                :key="ib" 
                                :value="nb"
                                :disabled="(nb == from) ? true : false">
                                        {{ nb }}
                                </option>
                            </select>

                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="button action-button mt-5 md:w-2/12" @click='search'>Find!</button>
            </div>
            
            <div class="actions-container flex-col w-full lg:w-8/12">
                <transition-group name="list-complete" tag="div" class="grid-container">
                    <div
                        v-for="(item, index) in list"
                        :key="index"
                        class="list-complete-item square">
                        
                            <div 
                            v-if="infoLinks[item]" 
                            class="link"
                            :class="(selectedLinks.includes(item)) ? 'selected' : 'info-link'">
                                {{ infoLinks[item] }}
                            </div>
                            
                            
                            <div 
                            v-else-if="nodesPosition[item] && selectedLinks.includes(item)" 
                            class="lttr"
                            :class="(from == nodesPosition[item] || 
                                        to == nodesPosition[item])? 'from' : 'selected'">
                                {{ nodesPosition[item] }}
                            </div>
                            
                            <div 
                            v-else-if="nodesPosition[item]" 
                            class="lttr"
                            :class="(from == nodesPosition[item] || 
                                        to == nodesPosition[item])? 'from' : 'un-selected'">
                                {{ nodesPosition[item] }}
                            </div>
                            
                            <div 
                            v-else-if="linksPosition.includes(item)" 
                            class="link"
                            :class="(selectedLinks.includes(item)) ? 'selected' : 'simple-link'">
            
                            </div>        
                    </div>
                </transition-group>
                
                <transition name='show-result'>
                    <div class="result" v-if='showResult' v-bind:class='{ showResult: showResult }'>
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

import { onMounted, ref } from 'vue'
import Dsp from '../algorithms/DShortestPath'

export default {
    setup() {

        // Properties
        const title = 'Shortest Path';
        const graph = {
            A: {B: 3, C: 4, D: 2},
            B: {A: 3, D: 6, E: 1},
            C: {A: 4, D: 1, F: 3},
            D: {A: 2, B: 6, C: 1, E: 5},
            E: {B: 1, D: 5, J: 1},
            F: {C: 3, G: 2, J: 5},
            G: {F: 2, H: 1, I: 3},
            H: {G: 1, I: 1, X: 2},
            I: {G: 3, H: 1, X: 8},
            J: {E: 1, F: 5, X: 6},
            X: {H: 2, I: 8, J: 6},
        }
        const linksPosition = ref([
            2,4,8,12,22,9,25,26,28,30,32,
            42,56,44,45,47,48,50,57,63,64,70,77,72,74, 84, 88, 90
        ])
        const nodesPosition = ref({
            1: 'A',
            5: 'B',
            21: 'E',
            29: 'C',
            33: 'D',
            43: 'F',
            49: 'J',
            71: 'G',
            75: 'H',
            87: 'I', 
            91: 'X',
        })
        const infoLinks = ref({
            3: 3,
            13: 1,
            27: 5,
            19: 6,
            31: 1,
            15: 4,
            17: 2,
            36: 3,
            46: 5,
            35: 1,
            57: 2,
            70: 6,
            83: 2,
            89: 8,
            81: 1,
            79: 3,
            73: 1,
        })
        const squaresCount = 91
        const dsp = new Dsp()
        const from = ref('')
        const to = ref('')
        const selectedLinks = ref([])
        const list = ref([])
        const optionsa = ref([])
        const optionsb = ref([])
        const result = ref('')
        const showResult = ref(false)
        const warningMessage = ref('')
        const showWarning = ref(false)

        // Mounted
        onMounted(() => {
            let availableOptions = Object.keys(graph)

            optionsa.value = availableOptions.map((item) => item)
            optionsb.value = availableOptions.map((item) => item)

            let max = squaresCount

            function generateSquares(max, arr) {
                let i = 1;

                (function nextIteration() {
                    if (i <= max) {
                        arr.push(i);
                        i++;
                        setTimeout(nextIteration, 1);
                    }
                })(); 
            }

            generateSquares(max, list.value);
        })

        // Methods
        const search = () => {
            
            if (!validateInput())
                return;
            
            clearOutput();
                    
            let path = {};
            
            path = dsp.findsp(graph, from.value, to.value);

            drawPath(path['nodes']);
            printResult(path['distance']);
        }

        const drawPath = (nodes) => {
        
            let squares = [];
            
            for (let i = 0; i < nodes.length - 1; i++) {
                
                if (nodes[i] == 'A' && nodes[i+1] == "B") {
                    squares = squares.concat([1, 2, 3, 4, 5]);
                }
                
                else if (nodes[i] == 'B' && nodes[i+1] == "A") {
                    squares = squares.concat([1, 2, 3, 4, 5].reverse());
                }
                
                else if (nodes[i] == 'A' && nodes[i+1] == "C") {
                    squares = squares.concat([1, 8, 15, 22]);
                }
                
                else if (nodes[i] == 'C' && nodes[i+1] == "A") {
                    squares = squares.concat([1, 8, 15, 22].reverse());
                }
                
                else if (nodes[i] == 'A' && nodes[i+1] == "D") {
                    squares = squares.concat([1, 9, 17, 25, 33]);
                }
            
                else if (nodes[i] == 'D' && nodes[i+1] == "A") {
                    squares = squares.concat([1, 9, 17, 25, 33].reverse());
                }
                
                else if (nodes[i] == 'B' && nodes[i+1] == "D") {
                    squares = squares.concat([5, 12, 19, 26]);
                }
                
                else if (nodes[i] == 'D' && nodes[i+1] == "B") {
                    squares = squares.concat([5, 12, 19, 26].reverse());
                }
                
                else if (nodes[i] == 'B' && nodes[i+1] == "E") {
                    squares = squares.concat([5, 13]);
                }
                
                else if (nodes[i] == 'E' && nodes[i+1] == "B") {
                    squares = squares.concat([5, 13].reverse());
                }
                
                else if (nodes[i] == 'C' && nodes[i+1] == "D") {
                    squares = squares.concat([29, 30, 31, 32, 33]);
                }
                
                else if (nodes[i] == 'D' && nodes[i+1] == "C") {
                    squares = squares.concat([29, 30, 31, 32, 33].reverse());
                }
                
                else if (nodes[i] == 'C' && nodes[i+1] == "F") {
                    squares = squares.concat([36, 43]);
                }
                
                else if (nodes[i] == 'F' && nodes[i+1] == "C") {
                    squares = squares.concat([36, 43].reverse());
                }
                
                else if (nodes[i] == 'D' && nodes[i+1] == "E") {
                    squares = squares.concat([27]);
                }
                
                else if (nodes[i] == 'E' && nodes[i+1] == "D") {
                    squares = squares.concat([27].reverse());
                }
                
                else if (nodes[i] == 'E' && nodes[i+1] == "J") {
                    squares = squares.concat([21, 28, 35, 42, 49]);
                }
                
                else if (nodes[i] == 'J' && nodes[i+1] == "E") {
                    squares = squares.concat([21, 28, 35, 42, 49].reverse());
                }
                
                else if (nodes[i] == 'F' && nodes[i+1] == "J") {
                    squares = squares.concat([44, 45, 46, 47, 48]);
                }
                
                else if (nodes[i] == 'J' && nodes[i+1] == "F") {
                    squares = squares.concat([44, 45, 46, 47, 48].reverse());
                }
                
                else if (nodes[i] == 'F' && nodes[i+1] == "G") {
                    squares = squares.concat([43, 50, 57, 64, 71]);
                }
                
                else if (nodes[i] == 'G' && nodes[i+1] == "F") {
                    squares = squares.concat([43, 50, 57, 64, 71].reverse());
                }
                
                else if (nodes[i] == 'G' && nodes[i+1] == "H") {
                    squares = squares.concat([71, 72, 73, 74, 75]);
                }
                
                else if (nodes[i] == 'H' && nodes[i+1] == "G") {
                    squares = squares.concat([71, 72, 73, 74, 75].reverse());
                }
                
                else if (nodes[i] == 'G' && nodes[i+1] == "I") {
                    squares = squares.concat([79]);
                }
                
                else if (nodes[i] == 'I' && nodes[i+1] == "G") {
                    squares = squares.concat([79].reverse());
                }
                
                else if (nodes[i] == 'H' && nodes[i+1] == "I") {
                    squares = squares.concat([75, 81, 87]);
                }
                
                else if (nodes[i] == 'I' && nodes[i+1] == "H") {
                    squares = squares.concat([75, 81, 87].reverse());
                }
                
                else if (nodes[i] == 'H' && nodes[i+1] == "X") {
                    squares = squares.concat([75, 83, 91]);
                }
                
                else if (nodes[i] == 'X' && nodes[i+1] == "H") {
                    squares = squares.concat([75, 83, 91].reverse());
                }
                
                else if (nodes[i] == 'I' && nodes[i+1] == "X") {
                    squares = squares.concat([87, 88, 89, 90, 91]);
                }
                
                else if (nodes[i] == 'X' && nodes[i+1] == "I") {
                    squares = squares.concat([87, 88, 89, 90, 91].reverse());
                }
                
                else if (nodes[i] == 'X' && nodes[i+1] == "J") {
                    squares = squares.concat([49, 56, 63, 70, 77, 84, 91].reverse());
                }
                
                else if (nodes[i] == 'J' && nodes[i+1] == "X") {
                    squares = squares.concat([49, 56, 63, 70, 77, 84, 91]);
                }
            }
                    
            function addSelectedLinks(squares, sl) {
                (function nextIteration() {

                    if (squares.length > 0) {
                        sl.push(squares[0]);
                        squares.shift();
                        setTimeout(nextIteration, 250);
                    }
                })(); 
            }

            console.log(squares)

            addSelectedLinks(squares, selectedLinks.value);   
        }

        const printResult = (distance) => {
            result.value = 'The distance from: '+from.value+' '+'to '+to.value+' is: '+distance;
            showResult.value = true;

            clearInput()
        } 

        const clearOutput = () => {
            showResult.value = false;
            showWarning.value = false;
            selectedLinks.value = [];
        }

        const validateInput = () => {
            let valid = true;
            
            clearOutput();
            
            if (from.value == '' || to.value == '') {
                warning('Select the start and end node.');
                valid = false;
            }
            return valid;
        }

        const clearInput = () => {
            from.value = '';
            to.value = '';
        }

        const warning = (message) => {
            warningMessage.value = message;
            showWarning.value = true;
        }

        return {
            title,
            search,
            from,
            to,
            selectedLinks,
            list,
            optionsa,
            optionsb,
            result,
            showResult,
            showWarning,
            warningMessage,
            nodesPosition,
            linksPosition,
            infoLinks,
        }
    },
}
</script>