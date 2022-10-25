<template>
    <detail-banner></detail-banner>
    <div>detail</div>
</template>

<script setup>
import DetailBanner from './components/DetailBanner.vue'
import axios from 'axios'
import {useRoute} from 'vue-router'
import {onMounted} from 'vue'

const route = useRoute();

const getDetailInfo = async() => {
    const {data} = await axios.get('/api/detail', {
        params:{
            id: route.params.id
        }
    });
    console.log(data);
};

onMounted(() => {
    getDetailInfo();
});

</script>