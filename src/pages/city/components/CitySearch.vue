<template>
    <div>
        <div class="search">
            <input type="text" v-model="keyword" class="search-input" placeholder="输入城市名或拼音">
        </div>
        <div class="search-content" v-show="keyword" ref="search">
            <ul>
                <li class="search-item border-bottom"
                    v-for="item of list"
                    :key="item.id"
                    @click="handleCityClick(item.name)"
                >
                    {{item.name}}
                </li>
                <li class="search-item border-bottom" v-show="hasNoData">
                    没有找到匹配数据
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import {ref, computed,defineProps, toRefs, watch, onMounted } from 'vue'
import BScroll from '@better-scroll/core'
import { useStore } from 'vuex';
import {useRouter} from 'vue-router';

const store = useStore();
const router = useRouter();

const props = defineProps({
    cities: Object
});

const {cities} = toRefs(props);

const keyword = ref('');
const list = ref([]);
const timer = ref(null);

const hasNoData = computed(() => {
    return !list.value.length;
})

const handleCityClick = (name) => {
    // console.log(name);
    store.commit('changeCity',name);
    router.push('/');
    // console.log(store.state.city);
};

watch([keyword], function(){
    if(timer.value) {
        clearTimeout(timer.value);
    }
    if(!keyword.value) {
        list.value = [];
        return;
    }
    timer.value = setTimeout(() => {
        const result = [];
        for (let i in cities.value) {
            cities.value[i].forEach((value) => {
                if(value.spell.indexOf(keyword.value) > -1 || value.name.indexOf(keyword.value) > -1) {
                    // console.log(value);
                    result.push(value);
                }
            })
        }
        list.value = result;
    }, 300)
});

const search = ref('');

onMounted(() => {
    // console.log(search.value);
    const scroll = new BScroll(search.value, {
        click:true
    });
})

</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .search
        height: 0.72rem
        padding: 0 0.1rem
        background: $bgColor
        .search-input
            box-sizing: border-box
            width: 100%
            height: 0.62rem
            padding: 0 0.1rem
            line-height: 0.62rem
            text-align: center
            border-radius: 0.06rem
            color: #666
    .search-content
        z-index:1
        overflow: hidden
        position: absolute
        top: 1.58rem
        left: 0
        right: 0
        bottom: 0
        background: #eee
        .search-item
            line-height: 0.62rem
            padding-left: 0.2rem
            background: #fff
            color: #666
</style>