// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vuetify from '@/plugins/vuetify' // path to vuetify export

import App from './App'
import router from './router'

import _ from 'lodash'
import VueResource from 'vue-resource';

import VueRouter from 'vue-router'
import VuePageTitle from 'vue-page-title'

Vue.use(VuePageTitle, {
  // prefix: 'My App - ',
  suffix: '- Xeelform '
})

Vue.use(VueResource);

Vue.use(VueRouter);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  vuetify,
  _,
  components: { App },
  template: '<App/>'
})
