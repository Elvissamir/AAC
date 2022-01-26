<template>
    <div class="preview-section">
        <div v-for="(element, i) in elements" :key="i" class="preview-link">
            <div class="preview-overlay">
                <p class="preview-text">{{ element.title }}</p>
                <router-link :to="{ name: element.routeName }" class="button action-button mt-3">Visit</router-link>
            </div>
            <img class="preview-image" :src="element.imageUrl" alt="Linked List">
        </div>
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