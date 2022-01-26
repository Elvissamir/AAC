<template>
    <div class="preview-section">
        <router-link v-for="(element, i) in elements" :key="i" class="preview-link" :to="{ name: element.routeName }">
            <div class="preview-overlay">
                <p class="preview-text">{{ element.title }}</p>
            </div>
            <img class="preview-image" :src="element.imageUrl" alt="Linked List">
        </router-link>
    </div>
</template>

<script>
export default {
    props: {
        elements: {
            type: Array,
            required: true,
        }
    },
    setup() {
        
    },
}
</script>