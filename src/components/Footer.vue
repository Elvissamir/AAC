<template>
      <footer class="bg-gray-800 w-full ml-auto mb-14 lg:mb-0 2xl:w-9/12">
        <div class="flex font-lora flex-col w-10/12 mx-auto py-8 text-white">

            <!-- LINKS -->
            <div class="flex flex-col mx-auto">
                <div class=" flex w-full mb-1 justify-center">
                    <p class="font-bold text-lg sm:text-xl">My Social Networks:</p>
                </div>

                <div class="flex">
                    <div class="flex items-baseline font-bold">
                        <p class="flex items-center text-lg sm:text-xl">
                            <font-awesome-icon :icon="['fas', 'envelope']" class="mr-2"/>
                            Elvissamir18@gmail.com
                        </p>
                    </div>
                </div>

                <div class="flex justify-between mt-2 mx-auto text-lg font-black sm:text-2xl">
                    <div class="flex">
                        <a href="">
                            <font-awesome-icon :icon="['fas', 'globe']" size="lg"/>
                        </a>
                    </div>
                        
                    <div class="flex ml-3">
                        <a href="https://github.com/Elvissamir">
                            <font-awesome-icon :icon="['fab', 'github']" size="lg" />
                        </a>
                    </div>

                    <div class="flex ml-3">
                        <a class="ml-2" href="">
                            <font-awesome-icon :icon="['fab', 'linkedin']" size="lg" />
                        </a>
                    </div>
                </div>
            </div>

            <!-- INFO -->
            <div class="flex flex-col mt-4 mx-auto items-center text-center text-lg sm:text-xl">
                <div class="flex flex-wrap justify-center font-bold">
                    <div class="flex flex-wrap items-baseline">
                        <font-awesome-icon :icon="['fas', 'cog']" size="lg" class="my-auto"/>
                        <p class="ml-1">Designed</p>
                        <p class="ml-1">&</p>
                        <p class="ml-1">Developed</p>
                    </div>
                    <p class="ml-1">by</p>
                    <p class="ml-1">Elvis Carrasco</p>
                </div>
                <p class="font-bold mt-2">
                    AAC - Algorithms And Challenges
                </p>
                <p class="font-bold">
                    2022
                </p>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    setup() {
        
    },
}
</script>