import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import router from './router/index'
import axios from './axios'
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.propotype.$http = axios;
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

//用第三个变量保存axios的返回值
/**
 * var thisVue = this
 * 
 * 
 */