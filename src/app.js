import Vue from 'vue';
import MyPlugin from './my-vue-plugin.js';

// use a specific plugin
Vue.use( MyPlugin );

import 'bootstrap/dist/css/bootstrap.min.css';

// components:
import App from './App.vue';

new Vue({
    el: "#app",
    render: h => h(App)
});