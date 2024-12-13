<template>
    <div class="w-[196px] h-max">
        <div class="w-full h-max flex flex-col gap-[10px]">
            <SideBarButton id="pop" :icon="fire" value="Популярное" v-model="currentCategorie"/>
            <SideBarButton id="new" :icon="clock" value="Новое" v-model="currentCategorie"/>
            <SideBarButton id="subs" :icon="heart" value="Подписки" v-model="currentCategorie"/>
        </div>
        <div class="w-[196px] h-max flex flex-col gap-[10px] mt-[23px]">
            <p class="ml-[14px] text-accent text-[16px]">Темы</p>
            <SideBarButton id="t1" :icon="fire" value="Записки рыбака" v-model="currentCategorie"/>
            <SideBarButton id="t2" :icon="clock" value="Водоемы Беларуси" v-model="currentCategorie"/>
            <SideBarButton id="t3" :icon="heart" value="Секреты успеха" v-model="currentCategorie"/>
            <SideBarButton id="t4" :icon="clock" value="Летняя рыбалка" v-model="currentCategorie"/>
            <SideBarButton id="t5" :icon="heart" value="Зимняя рыбалка" v-model="currentCategorie"/>
        </div>
        <div class="w-[196px] h-max flex flex-col gap-[10px] mt-[23px]">
            <p class="ml-[14px] text-accent text-[16px]">Темы</p>
            <SideBarButton id="contacts" :icon="contacts" value="Контакты" v-model="currentCategorie"/>
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
import { ref } from 'vue';

const currentCategorie=ref('');
</script>

<style lang="scss" scoped>

</style>