// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// import './assets/css/main.css'
// import './assets/css/blue.css'
// import './assets/css/owl.carousel.css'
// import './assets/css/owl.transitions.css'
// import './assets/css/animate.min.css'
// import './assets/css/rateit.css'
// import './assets/css/bootstrap-select.min.css'
// import './assets/css/font-awesome.css'

import './assets/js/jquery-1.11.1.min'
import './assets/js/bootstrap.min'

import './assets/js/bootstrap.min'
import './assets/js/bootstrap-hover-dropdown.min'
import './assets/js/owl.carousel.min'
import './assets/js/echo.min'
import './assets/js/jquery.easing-1.3.min'
import './assets/js/bootstrap-slider.min'
import './assets/js/jquery.rateit.min'
import './assets/js/lightbox.min'
import './assets/js/bootstrap-select.min'
import './assets/js/wow.min'
import './assets/js/scripts'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
