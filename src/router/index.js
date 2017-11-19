import Vue from 'vue'
import Router from 'vue-router'
import mainPage from '@/components/mainPage'
import category from '@/components/category'
import news from '@/components/news'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'mainPage',
      component: mainPage
    },
    { path: '/category/:id',
      name: 'category',
      component: category
    },
    { path: '/news/:id',
      name: 'news',
      component: news
    }
  ]
})
