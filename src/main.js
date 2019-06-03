// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
/*-----css导入----*/
//css---导入
import './assets/css/hero-slider-style.css'
import './assets/css/magnific-popup.css'
import './assets/css/templatemo-style.css'
//js ---引入

// import './assets/js/bootstrap.min.js'
import './assets/js/hero-slider-main.js'
import './assets/js/jquery.magnific-popup.min.js'

import './assets/js/tether.min.js'
// import './assets/js/new_file.js'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
