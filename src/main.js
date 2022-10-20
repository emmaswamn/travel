import { createApp } from "vue";
import App from './App.vue';
import router from './router.js';
import store from './store/index';

import  'styles/reset.css'
import  'styles/border.css'
import 'styles/iconfont.css'


const app = createApp(App);

app.use(router);
app.use(store);

app.mount('#root');