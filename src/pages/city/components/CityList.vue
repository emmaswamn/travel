<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">{{currentCity}}</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper"
                        v-for="item of hot"
                        :key="item.id"
                        @click="handleCityClick(item.name)"
                    >
                        <div class="button">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div class="area"
                v-for="(item, key) of cities"
                :key="key"
                :ref="el => { divs[key] = el }"
            >
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list">
                    <div class="item border-bottom"
                        v-for="initem of item"
                        :key="initem.id"
                        @click="handleCityClick(initem.name)"
                    >
                        {{initem.name}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref, reactive,watch, onMounted, computed, defineProps, toRefs} from 'vue'
import { useStore } from 'vuex';
import {useRouter} from 'vue-router';
import BScroll from '@better-scroll/core'
import ObserveDOM from '@better-scroll/observe-dom'
BScroll.use(ObserveDOM)

const router = useRouter();
const store = useStore();

const props = defineProps({
    cities: Object,
    hot:Array,
    letter: String
});

const {cities, hot, letter} = toRefs(props);


const currentCity = computed(() => store.state.city);


const handleCityClick = (name) => {
    store.dispatch('changeCity',name);
    router.push('/');
};

watch([letter], function() {
    if(letter.value) {
        const element = divs[letter.value];
        // const section = element.getBoundingClientRect();
        // console.log(section);
        scroll.scrollToElement(element);
    }
});

const divs = reactive({});
const wrapper = ref('');
let scroll;
onMounted (() => {
    scroll = new BScroll(wrapper.value, {
        click:true,
        observeDOM: true
    });
    console.log(scroll);
    // console.log(divs);
});
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .border-topbottom
        &:before
            border-color: #ccc
        &:after
            border-color: #ccc
    .border-bottom
        &:before
            border-color: #ccc
    .list
        overflow: hidden
        position: absolute
        top: 1.58rem
        left: 0
        right: 0
        bottom: 0
        .title
            line-height: 0.54rem
            background: #eee
            padding-left: 0.2rem
            color: #666
            font-size: 0.26rem
        .button-list
            overflow: hidden
            padding: 0.1rem 0.6rem 0.1rem 0.1rem
            .button-wrapper
                float: left
                width:33.33%
                .button
                    margin: 0.1rem
                    padding: 0.1rem 0
                    text-align: center
                    border: 0.02rem solid #ccc
                    border-radius: 0.06rem
        .item-list
            .item
                line-height: 0.76rem
                padding-left: 0.2remx
</style>