import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import searchResult from './views/searchResult.vue'
import Detail from './views/Detail.vue'

Vue.use(Router)
import {mapState, mapActions} from 'vuex'
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/search',
      name: 'search',
      component: searchResult
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    }
  ]
})
