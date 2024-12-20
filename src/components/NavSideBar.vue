<template>
    <div class='nav w-[196px] h-max'>
        <div class="w-full h-max flex flex-col gap-[10px]">
            <SideBarButton id="pop" :icon="fire" value="Популярное" v-model="currentCategorie"/>
            <SideBarButton id="new" :icon="clock" value="Новое" v-model="currentCategorie"/>
            <SideBarButton id="subs" :icon="heart" value="Подписки" v-model="currentCategorie"/>
        </div>
        <div class="w-[196px] h-max flex flex-col gap-[10px] mt-[23px]">
            <p class="ml-[14px] text-accent text-[16px]">Темы</p>
            <SideBarButton id="t1" :icon="fisher" value="Записки рыбака" v-model="currentCategorie"/>
            <SideBarButton id="t2" :icon="belarus" value="Водоемы Беларуси" v-model="currentCategorie"/>
            <SideBarButton id="t3" :icon="secret" value="Секреты успеха" v-model="currentCategorie"/>
            <SideBarButton id="t4" :icon="summer" value="Летняя рыбалка" v-model="currentCategorie"/>
            <SideBarButton id="t5" :icon="winter" value="Зимняя рыбалка" v-model="currentCategorie"/>
        </div>
        <div class="w-[196px] h-max flex flex-col gap-[10px] mt-[23px]">
            <p class="ml-[14px] text-accent text-[16px]">Темы</p>
            <SideBarButton id="contacts" :icon="contacts" value="Контакты" v-model="currentCategorie" link="ContactPage"/>
            <SideBarButton id="rules" :icon="report" value="Правила" v-model="currentCategorie"/>
        </div>       
    </div>
</template>

<script setup>
    import SideBarButton from './SideBarButton.vue';
    import fire from '../assets/icons/fire-line.svg?raw'
    import clock from '../assets/icons/heart-line.svg?raw'
    import heart from '../assets/icons/home-line.svg?raw'
    import contacts from '../assets/icons/contacts-book-2-line.svg?raw'
    import report from '../assets/icons/report.svg?raw'
    import fisher from '../assets/icons/fishersdiary.svg?raw'
    import belarus from '../assets/icons/belarus.svg?raw'
    import secret from '../assets/icons/secret.svg?raw'
    import summer from '../assets/icons/summer.svg?raw'
    import winter from '../assets/icons/winter.svg?raw'
    import { ref } from 'vue';

    const currentCategorie=defineModel();
</script>

<style lang="scss" scoped>

</style>