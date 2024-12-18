<template>
    <div class="w-svw max-w-[392px] h-full max-h-[282px] flex flex-col rounded-15px relative rounded-[15px] border-frame border
    inf-sm:max-md:w-[296px] inf-sm:max-md:h-[240px]" :id="id">
        <img :src=icon alt="news"
        class="w-full h-[212px] z-10 rounded-[15px]
        inf-sm:max-md:h-[180px]"/>
        <p class="text-[20px] text-foreground-main p-[12px] pt-[6px]
        inf-sm:max-md:text-[16px]">{{ desc }}</p>
    </div>
</template>

<script setup>
    const {icon='',desc='some desc',id='card_1'}=defineProps(['icon','desc','id'])
</script>

<style lang="scss" scoped>
    
</style>