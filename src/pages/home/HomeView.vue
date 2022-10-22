<template>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <div>{{result}}</div>
</template>

<script setup>
import HomeHeader from './component/HomeHeader.vue'
import HomeSwiper from './component/HomeSwiper.vue'
import HomeIcons from './component/HomeIcons.vue'
import HomeRecommend from './component/HomeRecommend.vue'
import axios from 'axios';
import { onMounted } from 'vue'

const fetchData = async () => {
    try {
        const {data} = await axios.get('/api/hello');
        const result = data;
    }catch(error) {
        console.log(error);
    }
}

onMounted(() => {
    fetchData();
})
</script>