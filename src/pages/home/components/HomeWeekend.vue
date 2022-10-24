<template>
    <div>
        <div class="title">周末去哪儿</div>
        <ul>
            <li  v-for="item of weekendList"
               :key="item.id"
                class="item border-bottom"
            >
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl" />
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>       
            </li>
        </ul>
    </div>
</template>

<script setup>
import {defineProps, toRefs} from 'vue'
const props = defineProps({
    weekendList: Array
});

const {weekendList} = toRefs(props);
</script>

<style lang="stylus" scoped>
    @import '~styles/mixins.styl'
    .title
        line-height: 0.8rem
        background: #eee
        text-indent: 0.2rem
    .item-img-wrapper
        overflow: hidden
        height: 0
        padding-bottom: 37.09%
        .item-img
            width: 100%
    .item-info
        padding: 0.1rem
        .item-title
            line-height: 0.54rem
            font-size: 0.32rem
            ellipsis()
        .item-desc
            line-height: 0.4rem
            color: #ccc
            ellipsis()
</style>