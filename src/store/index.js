import {createStore} from 'vuex';
import state from './states.js';
import actions from './actions.js';
import mutations from './mutations.js';

const store = createStore({
    state,
    mutations,
    actions
});

export default store;