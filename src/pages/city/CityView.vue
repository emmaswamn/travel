<template>
    <div>
        <city-header></city-header>
        <city-search :cities="cities"></city-search>
        <city-list :cities="cities" :hot="hotCities" :letter="letter"></city-list>
        <city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>
    </div>
</template>

<script setup>
import CityHeader from './components/CityHeader.vue'
import CitySearch from './components/CitySearch.vue'
import CityList from './components/CityList.vue'
import CityAlphabet from './components/CityAlphabet.vue'
import axios from 'axios';
import { onMounted, ref } from 'vue';

const cities = ref({});
const hotCities = ref([]);
const letter = ref('');

const getCityInfo = async() => {
    const {data} = await axios.get('/api/city-list');
    cities.value = data.data.cities;
    hotCities.value = data.data.hotCities;
};

const handleLetterChange = (word) => {
    // console.log(word);
    letter.value = word;
    console.log(letter.value);
};

onMounted(() => {
    getCityInfo();
})

</script>