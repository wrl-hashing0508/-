import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//引入 antd vue版
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

//引入 axios封装的文件
import axios from './utils/axios'

Vue.prototype.app=axios;

//在整个原型上 添加方法


Vue.use(Antd);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
