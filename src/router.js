import { createRouter,createWebHistory } from 'vue-router';
import HomeView from './pages/home/HomeView.vue';

const router = createRouter({
    history:createWebHistory(),
    routes: [
        {path: '/', component: HomeView}
    ]
});

export default router;