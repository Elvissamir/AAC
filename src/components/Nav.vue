<template>
    <nav class="bg-white w-full nav transform transition-all" :class="[(show)? 'translate-x-0' : '-translate-x-full']">
        <div class="flex flex-col w-full h-screen lg:flex-row lg:h-auto lg:py-2 lg:px-4 lg:justify-around">
            <!-- GITHUB LINK -->
            <div class="flex text-indigo-900 font-bold mx-auto justify-center mt-8 lg:mx-0 lg:mt-3">
                <a class="flex flex-col font-black items-baseline" href="https://github.com/Elvissamir">
                    <p class="text-5xl text-center mx-auto w-12 h-8 lg:text-4xl">
                        <font-awesome-icon :icon="['fab', 'github-square']" />
                    </p>
                    <p class="text-lg sm:text-blue-300 md:text-blue-600 lg:text-blue-800 xl:text-green-900 2xl:text-red-900 mt-3 lg:mt-1 lg:text-xl">Check my Github</p>
                </a>
            </div>

            <!-- MENU LINKS -->
            <div class="flex flex-col justify-center items-center mt-3 w-6/12 mx-auto lg:flex-row lg:mx-0 lg:w-8/12 lg:justify-between lg:max-w-screen-md lg:mt-2 2xl:flex-col 2xl:mx-auto">
                <router-link class="nav-link" :to="{ name: 'Home' }">Home</router-link>
                
                <!-- Algorithm routes --> 
                <router-link class="nav-link" :to="{ name: 'Algorithms' }">Algorithms</router-link>
                <router-link class="nav-link" :to="{ name: 'Anagram' }">Anagram</router-link>

                <!-- Challenges routes --> 
                <router-link class="nav-link" :to="{ name: 'Challenges' }">Challenges</router-link>
                <router-link class="nav-link" :to="{ name: 'About' }">About</router-link>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    props: {
        show: {
            required: true,
            type: Boolean,
        }
    },
    setup(props) {
    },
}
</script>
