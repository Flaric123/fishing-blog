<template>
    <div class="w-full h-max flex flex-col relative">
        <p class="w-full text-[18px] text-foreground-main">{{ label }}<span class="text-required" v-if="required">*</span></p>
        <textarea v-if="expandable" v-model="model" class="t-area w-full rounded-[15px] border-[2px] pl-[10px] py-[5px] border-frame outline-none text-[18px] text-foreground-main font-roboto transition-all"/>
        <input v-else type="text" class="w-full rounded-[15px] border-[2px] pl-[10px] py-[5px] border-frame outline-none text-[18px] text-foreground-main font-roboto" v-model="model"/>
    </div>
</template>

<script setup>
    const {label,required=false,expandable=false}=defineProps(['label','required','expandable']);
    const model=defineModel();
</script>

<style lang="scss" scoped>
    .t-area{
        field-sizing: content;
        position: relative;
    }
    ::-webkit-resizer{
        background-image: url('../assets/icons/resize-handle.svg');
        background-size: 16px;
        background-repeat: no-repeat;
        position: absolute;
        width: 20px;
        height: 20px;
        bottom:0px;
        right:0px;
        pointer-events: none;
    }
</style>