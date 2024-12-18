<template>
    <div class="inf-sm:max-md:max-h-[240px] max-h-[900px] h-lvh w-full flex flex-col relative">
        <div class="h-full w-full absolute inset-0 bg-dark-filter z-10 opacity-50"></div>
        <img class="h-full w-full absolute inset-0" src="../assets/site-specific/logo.png">
        <div class="flex flex-col h-full font-bold w-max self-center text-foreground-dark text-center z-20 place-content-center transition-all
        inf-sm:max-md:mb-[60px]">
                    <p class="text-[96px] inf-sm:max-md:text-[36px]">RIBAKU.BY</p>
                    <p class="text-[64px] inf-sm:max-md:text-[20px]">Всё о рыбалке в Беларуси</p>
        </div>
        <div class="absolute bottom-0 w-full inf-sm:max-md:opacity-0 transition-all">
            <div class="flex flex-col w-full">
                <img class="h-[320px] w-full z-20" src="../assets/site-specific/logo-filter.png">
            </div>
        </div>
        <div v-show="width>768" class="w-full h-[60px] flex flex-row z-20 bg-foreground-dark px-[75px] text-[24px] font-bold gap-[24px] items-center place-content-center" >
            <p class="h-full w-[196px] text-accent text-center content-center">RIBAKU<span class="text-foreground-main">.BY</span></p>
            <NavButton :icon="home" label="Главная" id="nav_1" v-model="currentPage" link="HomePage"/>
            <NavButton :icon="camera" label="Видео" id="nav_2" v-model="currentPage" link="VideoPage"/>
            <NavButton :icon="message" label="Форум" id="nav_3" v-model="currentPage" link="HomePage"/>
            <SearchBar class="self-center"/>
            <button class="h-[42px] min-w-[86px] flex flex-row gap-[4px] items-center justify-center rounded-[15px] border-[2px] border-frame transition-all">
                <div v-html="pen" class="icon">
                </div>
            </button>
            <button class="h-[42px] min-w-[86px] flex flex-row gap-[4px] rounded-[15px] items-center justify-center bg-accent transition-all">
                <p class="text-foreground-dark text-[16px] font-klein">Войти</p>
            </button>
        </div>
        <div v-show="width<=768" class="w-full h-full max-h-[40px] flex flex-row z-20 bg-foreground-dark justify-center items-center gap-[12px] transition-all">
            <NavButton :icon="magGlass" label="shit" id="search" v-model="currentPage" mini="true"/>
            <p class="text-accent text-[18px] font-bold">RIBAKU<span class="text-foreground-main">.BY</span></p>
            <NavButton :icon="person" label="shit" id="search" v-model="currentPage" mini="true"/>
        </div>
        <div v-show="width<768" class="w-full h-full max-h-[40px] flex flex-row bg-foreground-dark justify-center items-center z-20 gap-[10px] font-bold">
            <NavButton :icon="home" label="Главная" id="nav_1" v-model="currentPage" link="HomePage"/>
            <NavButton :icon="camera" label="Видео" id="nav_2" v-model="currentPage" link="VideoPage"/>
            <NavButton :icon="message" label="Форум" id="nav_3" v-model="currentPage" link="HomePage"/>
        </div>
    </div>
</template>

<script setup>
    import home from '../assets/icons/home-line.svg?raw'
    import pen from '../assets/icons/pen.svg?raw'
    import message from '../assets/icons/question-answer-line.svg?raw'
    import camera from '../assets/icons/question-answer-line-1.svg?raw'
    import magGlass from '../assets/icons/search.svg?raw'
    import person from '../assets/icons/person.svg?raw'
    import SearchBar from './SearchBar.vue'
    import NavButton from './NavButton.vue'
    import { ref } from 'vue'
    import { useWindowSize } from '@vueuse/core'

    const currentPage=ref('Главная');
    const {width}=useWindowSize();
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