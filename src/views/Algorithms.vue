<template>
    <div class="main-content-wrapper">
        <div class="content">
            <h1 class="title">Algorithms</h1>
            <div class="line"></div>

            <!-- Algorithms -->
            <div class="flex flex-col mt-16">
                <PreviewSection :elements="algorithms"></PreviewSection>
            </div>
        </div>
    </div>
</template>

<script>
import PreviewSection from '../components/PreviewSection.vue'

export default {
    components: {
        PreviewSection,
    },
    setup() {
        const algorithms = [
            {routeName: 'BinaryTree', title: 'Binary Tree', imageUrl: 'imgs/binarytree_c.png'},
            {routeName: 'LinkedList', title: 'Linked List', imageUrl: 'imgs/linkedlist_c.png'},
            {routeName: 'SelectionSort', title: 'Selection Sort', imageUrl: 'imgs/selection_c.png'},
            {routeName: 'ShortestPath', title: 'Shortest Path', imageUrl: 'imgs/shortest_c.png'},
        ]

        return {
            algorithms,
        }
    },
}
</script>