import Vue from 'vue';
import VueX from 'vuex';
import mutations from './mutations';

Vue.use(VueX);

const state = {};

export default new VueX.Store({
    state,
    mutations
});
