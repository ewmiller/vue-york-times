import Vue from 'vue'
import Router from 'vue-router'
import MostPopular from '@/components/MostPopular'
import TopStories from '@/components/TopStories'
import SearchPage from '@/components/SearchPage'
import HomePage from '@/components/HomePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/popular',
      name: 'MostPopular',
      component: MostPopular
    },
    {
      path: '/top',
      name: 'TopStories',
      component: TopStories
    }
  ]
})
