<script setup>
  import { onMounted, ref } from 'vue';
  import AdSideBar from './components/AdSideBar.vue';
  import Header from './components/Header.vue';
  import NavSideBar from './components/NavSideBar.vue';
  import { useRoute, useRouter } from 'vue-router';
  import { useWindowSize } from '@vueuse/core';
  import NavButton from './components/NavButton.vue';
  import home from '../src/assets/icons/home-line.svg?raw'
    import message from '../src/assets/icons/question-answer-line.svg?raw'
    import camera from '../src/assets/icons/question-answer-line-1.svg?raw'

  const {width}=useWindowSize();
  const route=useRoute();
  const router=useRouter()
  const isVideoPage=ref(route.fullPath=='/video')
  const currentPage=ref('Главная');

  onMounted(()=>{
    router.push('/home');
    isVideoPage.value=route.fullPath=='/video';
  })
</script>

<template>
  <Header v-model="currentPage"></Header>
  <div class="mt-[24px] h-max w-full grid grid-cols-[minmax(0px,196px)_minmax(0px,856px)_minmax(0px,196px)] gap-[24px] bg-background justify-center"
  :class="{
    'grid-cols-[minmax(0px,196px)_minmax(0px,966px)_minmax(0px,86px)]':route.fullPath!=='/video'&&(width<900&&width>768)||route.fullPath=='/video',
  }">
    <NavSideBar :class="{'hidden':width<768}" v-model="currentPage"/>
    <div class="flex flex-col h-max"
    :class="{'col-span-full':width<768}">
      <div class="w-full h-[200px] bg-foreground-dark hidden items-center justify-center text-[20px] mb-[20px]
      inf-sm:max-md:flex"
      >
        <p>РЕКЛАМА</p> 
      </div>
      <router-view>
      </router-view>
      <div class="w-full h-[40px] flex flex-row justify-evenly bg-foreground-dark shadow-2xl" v-show="width<768">
            <NavButton :icon="home" label="Главная" id="nav_1" v-model="currentPage" link="HomePage" mini="true"/>
            <NavButton :icon="camera" label="Видео" id="nav_2" v-model="currentPage" link="VideoPage" mini="true"/>
            <NavButton :icon="message" label="Форум" id="nav_3" v-model="currentPage" link="HomePage" mini="true"/>
      </div>
    </div>
    <AdSideBar/>
  </div>
  
</template>