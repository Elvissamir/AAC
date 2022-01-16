<template>
    <div class="bg-indigo-900 mobile-menu-container lg:hidden">
        <div class="mobile-menu">
            <div class="flex justify-center items-center w-6/12">
                <button class="flex items-center" @click="toggleNavbar">
                    <p class="text-white text-base font-black">Menu</p>
                    <p class="text-3xl ml-3">
                        <font-awesome-icon :icon="['fas', 'bars']" />
                    </p>
                </button>
            </div>

            <div class="bg-white mobile-menu-line"></div>

            <div class="flex justify-center w-6/12">
                <a class="flex items-center" href="https://github.com/Elvissamir">
                    <p class="text-white">My Github</p>
                    <p class="text-white text-4xl ml-2">
                        <font-awesome-icon :icon="['fab', 'github-square']" />
                    </p>
                </a>
            </div>
        </div>
    </div>
</template>

<script>

import { ref } from 'vue'

export default {
    setup(props, context) {
        
        const showNav = ref(false);

        const toggleNavbar = () => {   

            if (showNav.value == false)
                showNav.value = true;
            else 
                showNav.value = false;

            context.emit('toggle-navbar', showNav.value);
        }

        return {
            toggleNavbar,
        }
    },
}
</script>