<script setup>
  import AdSideBar from './components/AdSideBar.vue';
  import Header from './components/Header.vue';
  import NavSideBar from './components/NavSideBar.vue';
</script>

<template>
  <Header></Header>
  <div class="mt-[24px] h-full max-w-max w-full grid grid-cols-[minmax(0px,196px)_minmax(0px,856px)_minmax(0px,196px)] gap-[24px] bg-background place-self-center">
    <NavSideBar/>
    <router-view></router-view>
    <AdSideBar/>
  </div>
</template>
