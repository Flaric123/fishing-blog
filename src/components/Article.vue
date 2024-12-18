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

            <div class="w-full h-[24px] flex flex-row text-foreground-detail text-[16px] justify-between">
                <div class="w-max h-full flex flex-row gap-[14px]">
                    <div class="flex flex-row gap-[2px] items-center">
                        <img src="../assets/icons/heart-line.svg" class="h-full aspect-square">
                        <p>102</p>
                    </div>
                    <div class="flex flex-row gap-[2px] items-center">
                        <img src="../assets/icons/message-2-line.svg" class="aspect-square h-full">
                        <p>11</p>
                    </div>
                    <div class="flex flex-row gap-[2px] items-center">
                        <img src="../assets/icons/reply-line.svg" class="aspect-square h-full">
                    </div>
                </div>
                <div class="w-max h-full flex flex-row gap-[12px]">
                    <p class="text-foreground-main text-[16px]">18 февраля 2017 года</p>
                    <div class="flex flex-row gap-[2px] items-center">
                        <img src="../assets/icons/eye.svg" class="aspect-square h-full">
                        <p>2126</p>
                    </div>
                </div>
            </div>
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