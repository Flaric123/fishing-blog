<template>
    <div class="h-[900px] w-full flex flex-col relative">
        <div class="h-[900px] w-full absolute inset-0 bg-dark-filter z-10 opacity-50"></div>
        <img class="h-[900px] w-full absolute inset-0" src="../assets/site-specific/logo.png">
        <div class="absolute bottom-0 w-full">
            <div class="flex flex-col w-full">
                <div class="flex flex-col h-full font-bold w-max self-center text-foreground-dark text-center z-20">
                    <p class="text-[96px]">RIBAKU.BY</p>
                    <p class="text-[64px]">Всё о рыбалке в Беларуси</p>
                </div>
                <img class="h-[320px] w-full z-20" src="../assets/site-specific/logo-filter.png">
            </div>
        </div>
        <div class="w-full h-[60px] absolute flex flex-row z-20 bottom-0 bg-foreground-dark px-[75px] text-[24px] font-bold gap-[24px] items-center place-content-center" >
            <p class="h-full w-[196px] text-accent text-center content-center">RIBAKU<span class="text-foreground-main">.BY</span></p>
            <NavButton :icon="home" label="Главная"/>
            <NavButton :icon="camera" label="Видео"/>
            <NavButton :icon="message" label="Форум"/>
            <SearchBar class="self-center"/>
            <button class="h-[42px] w-[86px] flex flex-row gap-[4px] items-center justify-center rounded-[15px] border-[2px] border-frame transition-all">
                <div v-html="pen" class="icon">
                </div>
            </button>
            <button class="h-[42px] w-[86px] flex flex-row gap-[4px] rounded-[15px] items-center justify-center bg-accent transition-all">
                <p class="text-foreground-dark text-[16px] font-klein">Войти</p>
            </button>
        </div>
    </div>
</template>

<script setup>
    import home from '../assets/icons/home-line.svg?raw'
    import pen from '../assets/icons/pen.svg?raw'
    import message from '../assets/icons/question-answer-line.svg?raw'
    import camera from '../assets/icons/question-answer-line-1.svg?raw'
    import SearchBar from './SearchBar.vue'
    import NavButton from './NavButton.vue'
</script>

<style lang="css" scoped>
    .icon{
        width:max-content;
    }
    .icon :deep(svg){
        width:24px;
        height:24px;
    }
    .icon :deep(path){
        fill:theme('colors.accent');
    }
</style>