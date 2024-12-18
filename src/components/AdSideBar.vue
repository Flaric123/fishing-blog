<template>
    <div class="w-full h-[400px] bg-foreground-dark rounded-[15px] items-center justify-center flex
    inf-sm:max-md:hidden">
        <p class="text-[24px]" :class="route.fullPath=='/video'?'text-[15px]':''">РЕКЛАМА</p>
    </div>
</template>

<script setup>
    import { useRoute } from 'vue-router';

    const route=useRoute();
</script>

<style lang="scss" scoped>

</style>