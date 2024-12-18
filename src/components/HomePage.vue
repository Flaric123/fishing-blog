<template>
    <div class="max-w-[856px] w-full h-full bg-background">
        <RecentNews/>
        <Article></Article>
        <Article></Article>
        <div class="bg-foreground-dark w-full mt-[20px] h-[200px] items-center hidden justify-center
        inf-sm:max-md:flex">
            <p class="w-max text-[24px]">РЕКЛАМА</p>
        </div>
    </div>
</template>

<script setup>
import RecentNews from './RecentNews.vue';
import Article from './Article.vue';
import { useWindowSize } from '@vueuse/core';

    const {width}=useWindowSize();
</script>

<style lang="scss" scoped>

</style>