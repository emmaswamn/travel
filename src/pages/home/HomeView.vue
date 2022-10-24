<template>
    <div>
        <home-header></home-header>
        <home-swiper :swiper-list="swiperList"></home-swiper>
        <home-icons :icon-list="iconList"></home-icons>
        <home-recommend :recommend-list="recommendList"></home-recommend>
        <home-weekend :weekend-list="weekendList"></home-weekend>
    </div>
</template>

<script setup>
import HomeHeader from './components/HomeHeader.vue'
import HomeSwiper from './components/HomeSwiper.vue'
import HomeIcons from './components/HomeIcons.vue'
import HomeRecommend from './components/HomeRecommend.vue'
import HomeWeekend from './components/HomeWeekend.vue'
import axios from 'axios';
import { onMounted, ref, computed, onActivated } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const city = computed(() => store.state.city);

const swiperList=ref([]);
const iconList=ref([]);
const recommendList=ref([]);
const weekendList=ref([]);
const lastCity=ref('');

const getHomeInfo = async () => {
    try {
        const {data} = await axios.get(`/api/home-list?city=${city.value}`);
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
    lastCity.value = city.value;
    // console.log('onmount');
    getHomeInfo();
});

onActivated(() => {
    if (lastCity.value !== city.value) {
        lastCity.value = city.value;
        getHomeInfo();
    }
    // console.log('onActivated');
});
</script>