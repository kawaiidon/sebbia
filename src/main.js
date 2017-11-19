// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    categorys: [],
    categoryNews: [],
    newsItem: []
  },
  mutations: {
    categoryList (state, amount) {
      state.categorys = amount
    },
    newsList (state, amount) {
      state.categoryNews = amount
    },
    newsContent (state, amount) {
      state.newsItem = amount
    }
  },
  actions: {
    getCategory (context, token) {
      axios.get(`http://testtask.sebbia.com/v1/news/categories`)
      .then(response => {
        // JSON responses are automatically parsed.
        context.commit('categoryList', response.data.list)
        console.log(response.data.list)
      })
      .catch(e => {
        console.log(e)
      })
    },
    getNews (context, token) {
      axios.get(`http://testtask.sebbia.com/v1/news/categories/` + token + `/news`)
      .then(response => {
        context.commit('newsList', response.data.list)
        console.log(response.data.list)
        router.push({name: 'category', params: { id: token }})
      })
      .catch(e => {
        console.log(e)
      })
    },
    getNewsContent (context, token) {
      axios.get(`http://testtask.sebbia.com/v1/news/details?id=` + token + ``)
      .then(response => {
        context.commit('newsContent', response.data.news)
        console.log(response.data.news)
        router.push({name: 'news', params: { id: token }})
      })
      .catch(e => {
        console.log(e)
      })
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
