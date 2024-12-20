<template>
    <div class="max-w-[856px] flex flex-col w-full h-full bg-background gap-[24px]
    inf-sm:max-md:gap-[12px]">
        <RecentNews/>
        <Article v-for="article in articles" 
        :key="article.id"
        :img="article.img"
        :headerLabel="article.headerLabel"
        :description="article.description"
        :likes="article.likes"
        :comments="article.comments"
        :date="article.date"
        :views="article.views"
        :author="article.author"
        :theme="article.theme"></Article>
        <Ad class="mb-[24px]
        inf-sm:max-md:mb-[12px]"/>
    </div>
</template>

<script setup>
    import RecentNews from './RecentNews.vue';
    import Article from './Article.vue';
    import Ad from './Ad.vue';
    import a1 from '../assets/site-specific/article1.png';
    import a2 from '../assets/site-specific/article2.png';

    const articles=[{
        id:1,
        img:a1,
        headerLabel:'Готовим прикормку на весеннюю укалейку дома',
        description:'Ловля уклейки очень интересна и увлекательна, а если еще использовать прико рмку, то хорошие уловы не заставят себя ждать. Есть два наиболее простых способа приготовить прикорму на уклейку своими руками о них и пойдет речь.',
        likes:'102',
        comments:'11',
        date:'18 февраля 2017',
        views:'2126',
        author:'Admin',
        theme:"Секреты успеха"
    },
    {
        id:2,
        img:a2,
        headerLabel:'Где половить рыбку недалеко от Минска? Водохранилище Дички',
        description:'Дички - малое водохранилище ниже по течению р. Поплав у одноименной древни Дички. Хороший водоем для летней и зимней рыбалки. Наибольшая глубина 3м.',
        likes:'212',
        comments:'12',
        date:'18 февраля 2017',
        views:'13713',
        author:'Virus',
        theme:"Водоемы беларуси"
    },]
</script>

<style lang="scss" scoped>

</style>