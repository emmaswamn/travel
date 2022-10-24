<template>
    <div class="icons">
        <swiper :autoplay="false">
            <swiper-slide v-for="(page,index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-img">
                        <img :src="item.imgUrl" alt="" class="icon-img-content">
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { computed } from 'vue';
import {defineProps, toRefs} from 'vue'
const props = defineProps({
    iconList: Array
});

const {iconList} = toRefs(props);

const pages = computed(() => {
    const pages = [];
    iconList.value.forEach((item,index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
            pages[page] = [];
        }
        pages[page].push(item);
    })
    return pages;
})

</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icon >>> .swiper-container
    height: 0
    padding-bottom: 50%
  .icons
    margin-top: 0.1rem
    .icon
      position: relative
      overflow: hidden
      float: left
      width: 25%
      height: 0
      padding-bottom: 25%
      .icon-img
        position: absolute
        top:0
        left: 0
        right: 0
        bottom: 0.44rem
        box-sizing: border-box
        padding: 0.1rem
        .icon-img-content
          display: block
          margin: 0 auto
          height: 100%
      .icon-desc
        position: absolute
        left: 0
        right: 0
        bottom: 0
        height: 0.44rem
        line-height: 0.44rem
        text-align: center
        color: $darkTextColor
        ellispsis()
</style>