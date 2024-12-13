<template>
    <div class="hover:cursor-pointer flex h-[45px] relative w-full">
        <input class="peer appearance-none hidden" type="radio" :id="id" :value="value" v-model="model"/>
        <div v-html="icon" class="icon">
        </div>
        <label class="bg-foreground-dark border-[3px] border-foreground-dark h-full self-center w-full rounded-[15px] transition-all text-foreground-main flex flex-row justify-center items-center outline-none
                    peer-checked:border-accent" 
                    :for="id" tabindex="0">{{value}}</label>
    </div>
</template>

<script setup>
    const model=defineModel();
    const {id='1',value,icon}=defineProps(['id','value','icon'])
</script>

<style lang="scss" scoped>
    .icon{
        width:100%;
        position:absolute;
        padding-left:10px;
        inset:0;
        align-content: center;
        pointer-events: none;
    }
    .icon :deep(svg){
        width:24px;
        height:24px;
    }
    .icon :deep(path){
        fill:theme('colors.foreground-main');
    }
</style>