import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./plugins/element.js";

import axios from "axios";

import echarts from "echarts";
import store from './store'

Vue.config.productionTip = false;
// 将axios挂载在Vue原型
Vue.prototype.$axios = axios;
// 将echarts挂载在Vue原型
Vue.prototype.$echarts = echarts;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
