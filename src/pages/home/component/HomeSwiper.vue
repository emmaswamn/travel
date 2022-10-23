<template>
    <div class="wrapper">
        <swiper :pagination="true" :modules="modules" class="mySwiper" :loop="true">
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl" alt="" />
            </swiper-slide>
        </swiper>
    </div>
</template>

<script setup>
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import {defineProps, toRefs} from 'vue'
const props = defineProps({
    swiperList: Array
});

const {swiperList} = toRefs(props);

const modules= [ Pagination];

</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 31.25%
    background: #eee
    .swiper-img
      width: 100%

</style>