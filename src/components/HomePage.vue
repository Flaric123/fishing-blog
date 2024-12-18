<template>
    <div class="max-w-[856px] flex flex-col w-full h-full bg-background gap-[24px]
    inf-sm:max-md:gap-[12px]">
        <RecentNews/>
        <Article></Article>
        <Article></Article>
        <Ad class="mb-[24px]
        inf-sm:max-md:mb-[12px]"/>
    </div>
</template>

<script setup>
import RecentNews from './RecentNews.vue';
import Article from './Article.vue';
import Ad from './Ad.vue';
import { useWindowSize } from '@vueuse/core';

    const {width}=useWindowSize();
</script>

<style lang="scss" scoped>

</style>