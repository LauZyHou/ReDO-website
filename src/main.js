// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import el from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import './index.css';

import axios from 'axios' // http request
import { Message } from 'element-ui'
Vue.use(Message)
Vue.prototype.$message = Message
Vue.use(el)
axios.defaults.withCredentials = true;
Vue.prototype.$http = axios
Vue.prototype.baseUrl = 'http://localhost:8091/'

Vue.config.productionTip = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});

