<template>
    <div class="w-full h-max bg-foreground-dark flex flex-col p-[24px] rounded-[15px]
    inf-sm:max-md:p-[12px]">
        <p class="text-[24px] text-accent w-full
        inf-sm:max-md:text-[20px]">Самое важное</p>
        <div class="grid grid-flow-col grid-cols-[repeat(2,392px)] gap-[24px] w-full h-max overflow-hidden
        inf-sm:max-md:grid-cols-[repeat(2,296px)]">
            <News v-for="article in news" :icon="article.icon" :id="`card_${article.id}`" :desc="article.desc"/>
        </div>
        <div class="flex flex-row gap-[12px] self-center mt-[24px] w-full place-content-center">
            <input type="radio" v-for="option in options" :value=option v-model="newsOption" @change="newsPageChange"
            class="appearance-none w-dvw max-w-[70px] h-[10px] rounded-[100px] bg-foreground-detail checked:bg-accent transition-all cursor-pointer"/>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import News from './News.vue';
    import news1 from '../assets/site-specific/news1.png'
    import news2 from '../assets/site-specific/news2.png'
    import news3 from '../assets/site-specific/news3.jpg'
    import news4 from '../assets/site-specific/news4.jpg'
    import news5 from '../assets/site-specific/news5.jpg'

    const newsOption=ref(1);
    const news=[{
        icon:news1,
        desc:'Нерест щуки! С 1 по 31 марта вступает в силу запрет на лов щуки',
        id:1,
    },
    {
        icon:news2,
        desc:'Весенняя рыбалка. Реки освободились ото льда.',
        id:2,
    },
    {
        icon:news3,
        desc:'Как сохранить мотыля в домашних условиях. Современный подход',
        id:3
    },
    {
        icon:news4,
        desc:'Нерест щуки! С 1 по 31 марта вступает в силу запрет на лов щуки',
        id:4
    },
    {
        icon:news5,
        desc:'Смолевичское - водохранилище в Смолевичском районе Минской области',
        id:5
    },
    ]
    const options=[1,2,3,4,5]

    const newsPageChange=()=>{
        document.getElementById(`card_${newsOption.value}`)?.scrollIntoView({behavior:'smooth',inline:'center',block:'nearest'})
    }
</script>

<style lang="scss" scoped>

</style>