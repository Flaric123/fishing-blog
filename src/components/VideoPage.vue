<template>
    <div class="w-full h-max grid grid-cols-3 rounded-[15px] gap-[24px] mb-[10px] bg-background
    min-[940px]:max-[1250px]:grid-cols-2
    inf-sm:max-[940px]:grid-cols-1">
        <template v-for="(video,index) in videos">
            <Video :author="video.author"
            :header="video.header"
            :theme="video.theme"
            :views="video.views"
            :date="video.date"
            :img="video.img"></Video>
            <Ad v-if="(index+1)%2==0"></Ad>
        </template>
    </div>
</template>

<script setup>
    import Video from './Video.vue';
    import Ad from './Ad.vue'
    import v1 from '../assets/site-specific/video-cover1.png'
    import v2 from '../assets/site-specific/video-cover2.png'
    import v3 from '../assets/site-specific/video-cover3.png'
    import v4 from '../assets/site-specific/video-cover4.png'
    import v5 from '../assets/site-specific/video-cover5.png'

    const videos=[
        {
            author:'Virus',
            header:'Ловля леща р.Неман',
            theme:'Водоемы Беларуси',
            views:'13173',
            date:'18.02.17',
            img:v1,
            time:'00:26:32',
        },
        {
            author:'Virus',
            header:'Плотва по Пероледке. "О рыбалке Всерьез"',
            theme:'Секреты успеха',
            views:'13173',
            date:'18.02.17',
            img:v2,
            time:'00:26:32',
        },
        {
            author:'Virus',
            header:'Сибирская рыбалка - Ловля крупного карася',
            theme:'Летняя рыбалка',
            views:'13173',
            date:'18.02.17',
            img:v3,
            time:'00:26:32',
        },
        {
            author:'Virus',
            header:'Виды и назначения зимных удочек',
            theme:'Зимняя рыбалка',
            views:'13173',
            date:'18.02.17',
            img:v4,
            time:'00:26:32',
        },
        {
            author:'Virus',
            header:'Подводная рыбалка. Часть 1. Фидерная ловля',
            theme:'Записки рыбакаы',
            views:'13173',
            date:'18.02.17',
            img:v5,
            time:'00:26:32',
        },
        {
            author:'Virus',
            header:'Подводная рыбалка. Часть 1. Фидерная ловля',
            theme:'Записки рыбакаы',
            views:'13173',
            date:'18.02.17',
            img:v1,
            time:'00:26:32',
        }
    ]
</script>

<style lang="scss" scoped>

</style>