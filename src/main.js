// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import jQuery from 'jquery'
import 'bootstrap'
import VeeValidate from 'vee-validate'

// import bootstrap from 'bootstrap'

import 'bootstrap/dist/css/bootstrap.css'
global.jQuery = jQuery
global.$ = jQuery

// Vue.use(bootstrap)
Vue.use(VeeValidate, { inject: false })
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
