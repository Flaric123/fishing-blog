<template>
    <div class="hover:cursor-pointer flex flex-row h-[45px] gap-[10px] pl-[7px] relative w-full items-center">
        <input class="peer appearance-none border-[3px] outline-none rounded-[15px] transition-all border-foreground-dark w-full bg-foreground-dark h-full cursor-pointer absolute inset-0 z-10
        checked:border-accent" type="radio" :id="id" :value="value" v-model="model"/>
        <div v-html="icon" class="icon">
        </div>
        <p class="self-center transition-all pointer-events-none z-20 text-foreground-main flex flex-row justify-center items-center outline-none
                    peer-checked:border-accent" >{{value}}</p>
    </div>
</template>

<script setup>
    const model=defineModel();
    const {id='1',value,icon}=defineProps(['id','value','icon'])
</script>

<style lang="scss" scoped>
    .icon{
        width:max-content;
        border-top-left-radius: 15px;
        border-bottom-left-radius: 15px;
        align-content: center;
        pointer-events: none;
        z-index: 20;
    }
    .icon :deep(svg){
        width:24px;
        height:24px;
    }
    .icon :deep(path){
        fill:theme('colors.foreground-main');
    }
</style>