<template>
    <div class="p-[24px] mt-[24px] rounded-[15px] w-full h-max bg-foreground-dark">
        <div class="w-full flex flex-row justify-between">
            <div class="grid grid-cols-[repeat(2,minmax(0px,max-content))] text-foreground-main gap-x-[8px]">
                <div class="rounded-full w-[48px] aspect-square bg-accent row-span-2 place-items-center content-center">
                    <p class="text-foreground-dark text-[24px] h-min">A</p>
                </div>
                <p class="text-[16px]">Admin</p>
                <p class="text-[14px]">Секреты успеха</p>
            </div>
            <button class="h-[42px] w-[128px] flex flex-row gap-[4px] rounded-[15px] items-center justify-center bg-accent transition-all">
                <p class="text-foreground-dark text-[16px] font-klein font-bold">Подписаться</p>
            </button>
        </div>
        <div class="w-full flex flex-col mt-[12px] gap-[12px]">
            <p class="text-[24px] text-foreground-main"><span class="text-accent">>> </span>Готовим прикормку на весеннюю уклейку дома</p>
            <img src="../assets/site-specific/article1.png" class="w-full h-[404px] rounded-[15px]">
            <p class="text-[18px] text-foreground-main leading-[21px]">Ловля уклейки очень интересна и увлекательна, а если еще использовать прико рмку, то хорошие уловы не заставят себя ждать. Есть два наиболее простых способа приготовить прикорму на уклейку своими руками о них и пойдет речь.
                <span class="text-accent cursor-pointer" @click="redirectToFull">Читать далее>></span></p>
        </div>
    </div>
</template>

<script setup>
    const redirectToFull=()=>{
        console.log('redirected');
    }
</script>

<style lang="scss" scoped>

</style>