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
        <div v-if="width>768" class="w-full h-[60px] flex flex-row z-20 bg-foreground-dark px-[75px] text-[24px] font-bold gap-[24px] items-center place-content-center
            md:max-[950px]:grid-cols-[repeat(6,max-content)] md:max-[950px]:grid-rows-2 md:max-[950px]:grid md:max-[950px]:h-[120px] md:max-[950px]:gap-y-0">
            <p class="h-full w-[196px] text-accent text-center content-center">RIBAKU<span class="text-foreground-main">.BY</span></p>
            <NavButton :icon="home" label="Главная" id="nav_1" v-model="currentPage" link="HomePage"/>
            <NavButton :icon="camera" label="Видео" id="nav_2" v-model="currentPage" link="VideoPage"/>
            <NavButton :icon="message" label="Форум" id="nav_3" v-model="currentPage" link="HomePage"/>
            <SearchBar class="self-center
            md:max-[950px]:col-start-1 md:max-[950px]:row-start-2 md:max-[950px]:col-span-full md:max-[950px]:w-full"/>
            <button class="h-[42px] min-w-[86px] flex flex-row gap-[4px] items-center justify-center rounded-[15px] border-[2px] border-frame transition-all">
                <div v-html="pen" class="icon">
                </div>
            </button>
            <button class="h-[42px] min-w-[86px] flex flex-row gap-[4px] rounded-[15px] items-center justify-center bg-accent transition-all">
                <p class="text-foreground-dark text-[16px] font-klein">Войти</p>
            </button>
        </div>
        <div v-if="width<=768" class="w-full h-full max-h-[40px] flex flex-row z-20 bg-foreground-dark justify-center items-center gap-[12px] transition-all"
        :class="isSticky?'fixed':''">
            <div class="hover:cursor-pointer h-full w-[86px] relative flex flex-row gap-[4px] items-center justify-center"
            ref="ignoreElRef">
                    <input class="peer appearance-none w-full h-full cursor-pointer transition-all absolute inset-0 border-b-[3px] border-foreground-dark
                    checked:border-accent" type="radio" v-model="mobileMenu" value="Search"/>
                    <div v-html="magGlass" class="icon">
                    </div>
            </div>
            <p class="text-accent text-[18px] font-bold">RIBAKU<span class="text-foreground-main">.BY</span></p>
            <div class="hover:cursor-pointer h-full w-[86px] relative flex flex-row gap-[4px] items-center justify-center"
            ref="ignoreElRef2">
                    <input class="peer appearance-none w-full h-full cursor-pointer transition-all absolute inset-0 border-b-[3px] border-foreground-dark
                    checked:border-accent" type="radio" v-model="mobileMenu" value="About"/>
                    <div v-html="person" class="icon">
                    </div>
            </div>
        </div>
        <div v-if="width<768" class="w-full h-full max-h-[40px] flex flex-row bg-foreground-dark justify-center items-center z-20 gap-[10px] font-bold">
            <NavButton :icon="fire" class="w-max" label="Популярное" id="nav_1" v-model="currentPage"/>
            <NavButton :icon="clock" class="w-max" label="Новое" id="nav_2" v-model="currentPage"/>
            <NavButton :icon="heart" class="w-max" label="Подписки" id="nav_3" v-model="currentPage"/>
        </div>
        <div class="w-full gap-[12px] h-max items-center flex flex-col bg-background inset-y-[200px] z-20 transition-all"
        :class="{'hidden':mobileMenu=='','fixed inset-y-[40px]':isSticky,'absolute':!isSticky}"
        v-on-click-outside="onMobileMenuClickOutside">
            <div class="flex flex-col gap-[12px] items-center w-full bg-background p-[12px] shadow-md"
            v-if="mobileMenu=='Search'">
                <SearchBar/>
                <p> Истории поиска пока нет</p>
                <div class="bg-frame h-[1px] w-full"></div>
                <p class="text-left text-accent w-full text-[16px]">Темы</p>
                <SideBarButton id="t1" :icon="fisher" value="Записки рыбака" v-model="currentTheme"/>
                <SideBarButton id="t2" :icon="belarus" value="Водоемы Беларуси" v-model="currentTheme"/>
                <SideBarButton id="t3" :icon="secret" value="Секреты успеха" v-model="currentTheme"/>
                <SideBarButton id="t4" :icon="summer" value="Летняя рыбалка" v-model="currentTheme"/>
                <SideBarButton id="t5" :icon="winter" value="Зимняя рыбалка" v-model="currentTheme"/>
            </div>

            <div class="flex flex-col gap-[12px] items-center w-full bg-background p-[12px] shadow-md"
            v-else>
                <button class="h-[42px] w-full flex flex-row gap-[4px] font-bold rounded-[15px] items-center justify-center bg-accent transition-all">
                    <p class="text-foreground-dark text-[16px] font-klein">Вход и регистрация</p>
                </button>
                <p class="text-accent text-left text-[16px] w-full">О RIBAKU.BY</p>
                <SideBarButton id="contacts" :icon="contacts" value="Контакты" v-model="currentPage" link="ContactPage"/>
                <SideBarButton id="rules" :icon="report" value="Правила" v-model="currentPage"/>
            </div>
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
    import contacts from '../assets/icons/contacts-book-2-line.svg?raw'
    import report from '../assets/icons/report.svg?raw'
    import { onMounted, ref } from 'vue'
    import { useWindowSize } from '@vueuse/core'
    import { vOnClickOutside } from '@vueuse/components'
    import SideBarButton from './SideBarButton.vue'
    import fisher from '../assets/icons/fishersdiary.svg?raw'
    import belarus from '../assets/icons/belarus.svg?raw'
    import secret from '../assets/icons/secret.svg?raw'
    import summer from '../assets/icons/summer.svg?raw'
    import winter from '../assets/icons/winter.svg?raw'
    import fire from '../assets/icons/fire-line.svg?raw'
    import clock from '../assets/icons/heart-line.svg?raw'
    import heart from '../assets/icons/home-line.svg?raw'
    import { useWindowScroll } from '@vueuse/core';

    const currentPage=defineModel();
    const currentTheme=ref();
    const mobileMenu=ref('');
    const ignoreElRef=ref();
    const ignoreElRef2=ref();
    const isSticky=ref(false);
    const {width}=useWindowSize();
    const {y}=useWindowScroll();

    onMounted(()=>{
        window.addEventListener('scroll',onScrollChange)
    })

    const closeMobileMenu=()=>{
        if (mobileMenu.value!='')
            mobileMenu.value='';
    }

    const onMobileMenuClickOutside=[
        (ev)=>{
            closeMobileMenu();
        },
        {ignore:[ignoreElRef,ignoreElRef2]}
    ]

    const onScrollChange=()=>{
        if (y.value>165&&width.value)
            isSticky.value=true
        else
            isSticky.value=false
    }

</script>

<style lang="css" scoped>
    .icon{
        width:max-content;
    }
    .icon :deep(svg){
        width:24px;
        height:24px;
    }
    .peer:checked~.icon :deep(path){
        fill: theme('colors.accent');
    }
</style>