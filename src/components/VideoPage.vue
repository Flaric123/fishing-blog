<template>
    <div class="w-full h-max grid grid-cols-3 rounded-[15px] gap-[24px] mb-[10px] bg-background
    min-[940px]:max-[1250px]:grid-cols-2
    inf-sm:max-[940px]:grid-cols-1">
        <Video></Video>
        <Video></Video>
        <Ad></Ad>
        <Video></Video>
        <Video></Video>
        <Ad></Ad>
        <Video></Video>
        <Video></Video>
    </div>
</template>

<script setup>
    import Video from './Video.vue';
    import Ad from './Ad.vue'
</script>

<style lang="scss" scoped>

</style>