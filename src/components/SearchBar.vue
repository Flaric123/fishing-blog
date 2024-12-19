<template>
    <div class="relative h-[42px] w-[526px] items-center">
        <input type="text" placeholder="Поиск" class="h-full w-full bg-transparent border-[2px] border-frame rounded-[15px] pl-[47px] outline-none font-klein text-[16px] font-bold"></input>
        <button v-html="search" class="search absolute inset-0 px-[15px] w-max">
        </button>
    </div>
    
</template>

<script setup>
    import search from '../assets/icons/search.svg?raw'
</script>

<style lang="css" scoped>
    .search :deep(svg){
        width:24px;
        height:24px;
    }
</style>