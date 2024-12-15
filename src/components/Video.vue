<template>
    <div class="w-[306px] h-max bg-foreground-dark rounded-[15px] shadow-lg">
        <div class="w-full h-[172px] rounded-tr-[15px] rounded-tl-[15px] relative">
            <img src="../assets/site-specific/video-cover1.png" class="w-full h-full rounded-tr-[15px] rounded-tl-[15px]">
            <p class="bg-dark-filter bg-opacity-50 rounded-[5px] h-max w-max text-foreground-dark absolute bottom-[6px] right-[6px]">00:26:32</p>
        </div>

        <div class="w-full h-max p-[12px] flex flex-col">
            <p class="text-[18px] text-foreground h-[42px] w-full">Ловля леща на р.Неман</p>
            <div class="w-full h-max flex flex-row text-[14px] text-foreground-detail items-center gap-[6px]">
                <div class="rounded-full w-[48px] aspect-square bg-accent row-span-2 place-items-center content-center">
                        <p class="text-foreground-dark text-[24px] h-min">A</p>
                </div>
                <p>Virus • Водоёмы Беларуси</p>
            </div>
            <div class="w-full h-[20px] flex flex-row mt-[12px] text-[14px] text-foreground-detail">
                <img src="../assets/icons/eye.svg" class="h-full w-[20px]"/>
                <p class="ml-[2px] w-full">13173 • 18.02.17</p>
                <div v-html="more" class="more-btn w-full justify-items-end cursor-pointer h-full"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import more from '../assets/icons/more-horiz.svg?raw'
</script>

<style lang="scss" scoped>
    .more-btn :deep(svg){
        width: 20px;
        height: 100%;
    }
</style>