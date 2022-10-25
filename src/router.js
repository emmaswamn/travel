import { createRouter,createWebHistory } from 'vue-router';
import HomeView from './pages/home/HomeView.vue';
import CityView from './pages/city/CityView.vue'
import DetailView from './pages/detail/DetailView.vue'

const router = createRouter({
    history:createWebHistory(),
    routes: [
        {path: '/', component: HomeView},
        {path: '/city', component: CityView},
        {path: '/detail/:id', component: DetailView},
    ]
});

export default router;