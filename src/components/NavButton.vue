<template>
    <div class="hover:cursor-pointer h-full w-[86px] relative flex flex-row gap-[4px] items-center justify-center">
        <input class="peer appearance-none w-full h-full cursor-pointer transition-all absolute inset-0 border-b-[3px] border-foreground-dark
        checked:border-accent" type="radio" :id="id" :value="label" v-model="model" @change="doSome"/>
        <div v-html="icon" class="icon">
        </div>
        <p v-if="!mini" class="bg-foreground-dark text-[16px] transition-all text-foreground-main font-klein h-max self-center w-full flex justify-center items-center outline-none
            peer-checked:text-accent">{{label}}</p>
    </div>
</template>

<script setup>
    const model=defineModel()
    const {icon='',label='',id='',link='/',mini=false}=defineProps(['icon','label','id','link','mini']);
    import { useRouter } from 'vue-router';

    const router=useRouter();

    const doSome=()=>{
        if (router.hasRoute(link)){
            router.push({name:link})
        }
    }
</script>

<style lang="css" scoped>
    .icon{
        width:max-content;
        background-color:theme('colors.foreground-dark');
        border-color:theme('colors.foreground-main');
    }
    .icon :deep(svg){
        width:24px;
        height:24px;
    }
    .icon :deep(path){
        fill:theme('colors.foreground-main');
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
    }
    .peer:checked~.icon :deep(path){
        fill: theme('colors.accent');
    }
</style>