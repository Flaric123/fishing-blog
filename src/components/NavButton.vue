<template>
    <button class="h-full w-[86px] flex flex-row border-foreground-dark border-b-[3px] gap-[4px] items-center transition-all">
        <div v-html="icon" class="icon">
        </div>
        <p class="text-[16px]  text-foreground-main font-klein">{{label}}</p>
    </button>
</template>

<script setup>
    const {icon='',label=''}=defineProps(['icon','label']);
</script>

<style lang="css" scoped>
    .icon{
        width:100%;
    }
    .icon :deep(svg){
        width:24px;
        height:24px;
    }
    .icon :deep(path){
        fill:theme('colors.foreground-main');
    }
</style>