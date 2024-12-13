<template>
    <div class="w-full h-max bg-foreground-dark flex flex-col p-[24px]  rounded-[15px]">
        <p class="text-[24px] text-accent w-full">Самое важное</p>
        <div class="grid grid-flow-col grid-cols-[repeat(2,392px)] gap-[24px] w-full h-max overflow-hidden">
            <News v-for="article in news" :icon="makeURL(article.icon)" :id="`card_${article.id}`" :desc="article.desc"/>
        </div>
        <div class="flex flex-row gap-[12px] self-center mt-[24px]">
            <input type="radio" v-for="option in options" :value=option v-model="newsOption" @change="newsPageChange"
            class="appearance-none w-[70px] h-[10px] rounded-[100px] bg-foreground-detail checked:bg-accent transition-all cursor-pointer"/>
        </div>
    </div>
</template>

<script setup>
    import { ref, computed } from 'vue';
    import News from './News.vue';

    const newsOption=ref(1);
    const news=[{
        icon:'../assets/site-specific/news1.png',
        desc:'Нерест щуки! С 1 по 31 марта вступает в силу запрет на лов щуки',
        id:1,
    },
    {
        icon:'../assets/site-specific/news2.png',
        desc:'Весенняя рыбалка. Реки освободились ото льда.',
        id:2,
    },
    {
        icon:'../assets/site-specific/news3.jpg',
        desc:'Как сохранить мотыля в домашних условиях. Современный подход',
        id:3
    },
    {
        icon:'../assets/site-specific/news4.jpg',
        desc:'Нерест щуки! С 1 по 31 марта вступает в силу запрет на лов щуки',
        id:4
    },
    {
        icon:'../assets/site-specific/news5.jpg',
        desc:'Смолевичское - водохранилище в Смолевичском районе Минской области',
        id:5
    },
    ]
    const options=[1,2,3,4,5]

    const makeURL=(icon)=>{
        return new URL(icon,import.meta.url).href
    }

    const newsPageChange=()=>{
        document.getElementById(`card_${newsOption.value}`)?.scrollIntoView({behavior:'smooth',inline:'center'})
    }
</script>

<style lang="scss" scoped>

</style>