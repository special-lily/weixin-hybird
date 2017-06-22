import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import store from 'store/index';
import FastClick from 'fastclick';
import routes from 'router/router';
import 'static/js/rem';
// 在pages中单个页面中引入reset
// import 'static/css/reset.css';
import Mint from 'mint-ui';


if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function () {
        FastClick.attach(document.body);
    }, false);
}


Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Mint);


const router = new VueRouter({
    mode: 'history',  // 路由使用history模式
    routes,
    linkActiveClass: 'active' // 设置当前路由的className
});


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {
        App
    }
});
