<template>
    <home-header></home-header>
    <home-swiper :swiper-list="swiperList"></home-swiper>
    <home-icons :icon-list="iconList"></home-icons>
    <home-recommend :recommend-list="recommendList"></home-recommend>
    <home-weekend :weekend-list="weekendList"></home-weekend>
</template>

<script setup>
import HomeHeader from './component/HomeHeader.vue'
import HomeSwiper from './component/HomeSwiper.vue'
import HomeIcons from './component/HomeIcons.vue'
import HomeRecommend from './component/HomeRecommend.vue'
import HomeWeekend from './component/HomeWeekend.vue'
import axios from 'axios';
import { onMounted, ref } from 'vue';


const swiperList=ref([]);
const iconList=ref([]);
const recommendList=ref([]);
const weekendList=ref([]);

const getHomeInfo = async () => {
    try {
        const {data} = await axios.get('/api/home-list');
        swiperList.value = data.data.swiperList;
        iconList.value = data.data.iconList;
        recommendList.value = data.data.recommendList;
        weekendList.value = data.data.weekendList;
        // console.log(recommendList);
    }catch(error) {
        console.log(error);
    }
}

onMounted(() => {
    getHomeInfo();
})
</script>