import Vue from 'vue'
import vueRouter from 'vue-router'
import App from './App.vue'
import router from './js/router.js'
import Axios from 'axios'
import mui from './js/mui.min.js'
import  './assets/css/cssreset.css'
import  './assets/css/mui.min.css'


Vue.use(vueRouter);
Vue.prototype.$axios=Axios;
Vue.prototype.mui=mui;


new Vue({
  el: '#app',
  render: h => h(App),
  router:router
})
