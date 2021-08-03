import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Flightdetail from '@/components/Flightdetail'

Vue.use(Router)
Vue.filter('truncate', function (value, limit) {
  if (value) {
    if (value.length > limit) {
        value = value.substring(0, (limit - 3)) + '...';
    }
    return value

  }


})

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/flight/:idflight',
      name: 'Flightdetail',
      component: Flightdetail,
      props: true
    },

  ]
})
