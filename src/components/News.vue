<template>
    <div class="w-[392px] h-[282px] flex flex-col rounded-15px relative rounded-[15px] border-frame border" :id="id">
        <img :src=icon alt="news"
        class="w-full h-[212px] z-10 rounded-[15px]"/>
        <p class="text-[20px] text-foreground-main p-[12px] pt-[6px]">{{ desc }}</p>
    </div>
</template>

<script setup>
    const {icon='',desc='some desc',id='card_1'}=defineProps(['icon','desc','id'])
</script>

<style lang="scss" scoped>
    
</style>