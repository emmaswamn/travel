<template>
    <ul class="list">
        <li class="item"
            v-for="item of letters"
            :key="item"
            :ref="el => { divs[item] = el }"
            @touchstart="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
            @click="handleLetterClick"
        >
            {{item}}
        </li>
    </ul>
</template>

<script setup>
import {defineProps, toRefs,ref, computed, defineEmits, reactive, onUpdated} from 'vue'



const props = defineProps({
    cities: Object
});

const {cities} = toRefs(props);


// Send out click letter
const letters = computed(() => {
    const letter = [];
    for (let i in cities.value) {
        letter.push(i);
    }
    return letter;
});

// console.log(letters, 'letters');
const emit = defineEmits(['change']);
const handleLetterClick = (e) => {
    // console.log('in');
    emit('change', e.target.innerText);
};

const startY = ref(0);
const divs = reactive({});
let touchStatus = false;
let timer = null;

onUpdated(() => {
    startY.value = divs['A'].offsetTop;
    // console.log(startY.value);
    // console.log('divs',divs);
})

const handleTouchStart = () => {
    // console.log('start');
    touchStatus = true;
};

const handleTouchMove = (e) => {
    // console.log('move');
    if(touchStatus) {
        if(timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            const touchY = e.touches[0].clientY - 79;
            // console.log(e.touches[0]);
            const index = Math.floor((touchY - startY.value) / 20);
            if (index >= 0 && index < letters.value.length) {
                // console.log(letters.value[index]);
                emit('change', letters.value[index])
            }
        }, 8);
    }
}

const handleTouchEnd = () => {
    // console.log('end');
    touchStatus = false;
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .list
        display: flex
        flex-direction: column
        justify-content: center
        position: absolute
        top: 1.58rem
        right: 0
        bottom: 0
        width: 0.4rem
        .item
            line-height: 0.4rem
            text-align: center
            color: $bgColor
</style>