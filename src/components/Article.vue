<template>
    <div class="p-[24px] rounded-[15px] w-full h-max bg-foreground-dark shadow-md">
        <div class="w-full flex flex-row justify-between">
            <div class="grid grid-cols-[repeat(2,minmax(0px,max-content))] text-foreground-main gap-x-[8px]">
                <div class="rounded-full w-[48px] aspect-square bg-accent row-span-2 place-items-center content-center">
                    <p class="text-foreground-dark text-[24px] h-min">{{ author.charAt(0) }}</p>
                </div>
                <p class="text-[16px]">{{author}}</p>
                <p class="text-[14px]">{{theme}}</p>
            </div>
            <button class="h-[42px] w-[128px] flex flex-row gap-[4px] rounded-[15px] items-center justify-center bg-accent transition-all">
                <p class="text-foreground-dark text-[16px] font-klein font-bold">Подписаться</p>
            </button>
        </div>
        <div class="w-full flex flex-col mt-[12px] gap-[12px]">
            <p class="text-[24px] text-foreground-main"><span class="text-accent">>> </span>{{headerLabel}}</p>
            <img :src="img" class="w-full h-full min-h-[200px] rounded-[15px]
            inf-sm:max-md:h-[148px] inf-sm:max-md:min-h-[200px]">
            <p class="text-[18px] text-foreground-main leading-[21px]">{{ description }}
                <span class="text-accent cursor-pointer" @click="redirectToFull">Читать далее>></span></p>

            <div class="w-full h-[24px] flex flex-row text-foreground-detail text-[16px] justify-between">
                <div class="w-max h-full flex flex-row gap-[14px]">
                    <div class="flex flex-row gap-[2px] items-center">
                        <img src="../assets/icons/heart-line.svg" class="h-full aspect-square">
                        <p>{{likes}}</p>
                    </div>
                    <div class="flex flex-row gap-[2px] items-center">
                        <img src="../assets/icons/message-2-line.svg" class="aspect-square h-full">
                        <p>{{comments}}</p>
                    </div>
                    <div class="flex flex-row gap-[2px] items-center">
                        <img src="../assets/icons/reply-line.svg" class="aspect-square h-full">
                        <p v-if="replies">{{ replies }}</p>
                    </div>
                </div>
                <div class="w-max h-full flex flex-row gap-[12px]">
                    <p class="text-foreground-main text-[16px]">{{date}}</p>
                    <div class="flex flex-row gap-[2px] items-center">
                        <img src="../assets/icons/eye.svg" class="aspect-square h-full">
                        <p>{{views}}</p>
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

    const {img,headerLabel,description,author,likes,comments,replies='',views,date,theme}=defineProps(['img','headerLabel','description','likes','comments','views','reviews','author','date','theme'])
</script>

<style lang="scss" scoped>

</style>