<template>
  <div class="main">
    <div class="back-btn" @click="goBack()">
      На главную
    </div>
    <div class="news-list">
      <div class="news-list__item"
        v-for="item in slicedNews"
        >
        <div class="news-list__head">
          <div class="news-list__title">
            {{item.title}}
          </div>
          <div class="news-list__date">
            {{sliceDate(item.date)}}
          </div>
        </div>
        <div class="news-list__desc">
          {{item.shortDescription}}
        </div>
        <div class="news-list__btn" @click="showNews(item.id)">
          Показать больше...
        </div>
      </div>
      <div class="pagination" v-if="this.pages > 1">
        <div class="pagination__item" v-for="i in this.pages" @click="showPage(i)">
          {{i}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'category',
  data () {
    return {
      news: this.$store.state.categoryNews,
      slicedNews: [],
      newsPerPage: 3,
      pages: 0
    }
  },
  created () {
    this.$store.dispatch('getNews', this.$route.params.id)
    this.buildPagination()
  },
  methods: {
    goBack: function () {
      this.$router.go(-1)
    },
    sliceDate: function (date) {
      let slicedDate = date.slice(0, 10)
      return slicedDate
    },
    buildPagination: function () {
      let newsCount = this.news.length
      this.pages = Math.ceil(newsCount / this.newsPerPage)
      this.slicedNews = this.news.slice(0, this.newsPerPage)
    },
    showPage: function (page) {
      this.slicedNews = this.news.slice(this.newsPerPage * page - this.newsPerPage, this.newsPerPage * page)
    },
    showNews: function (id) {
      this.$store.dispatch('getNewsContent', id)
    }
  }
}
</script>

<style scoped lang="scss">
  .back-btn{
    margin-top: 20px;
    cursor: pointer;
    color: #000;
    transition: 0.3s;
    &:hover{
      color: #96CDFF;
    }
  }
  .news-list{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 50px 0;
    &__item{
      width: 600px;
      margin-bottom: 15px;
      text-align: left;
      background-color: rgba(#D8E1FF, 0.2);
      padding: 15px;
      border-radius: 5px;
    }
    &__head{
      position: relative;
      border-bottom: 1px solid rgba(0,0,0, 0.2);
      // display: flex;
      // justify-content: space-between;
      // align-items: center;
      padding: 15px 0;
      box-sizing: border-box;
    }
    &__title{
      font-size: 14px;
      line-height: 1.4;
      text-transform: uppercase;
      max-width: 480px;
      font-weight: 400;
    }
    &__date{
      position: absolute;
      right: 15px;
      top: 15px;
      font-size: 10px;
      font-weight: 700;
    }
    &__desc{
      margin-top: 20px;
    }
    &__btn{
      margin-top: 30px;
      font-size: 16px;
      cursor: pointer;
      font-weight: 400;
      color: #000;
      transition: 0.3s;
      opacity: 0.7;
      &:hover{
        opacity: 1;
        color: #69DDFF;
      }
    }
  }
  .pagination{
    display: flex;
    justify-content: center;
    align-items: center;
    &__item{
      margin: 10px;
      cursor: pointer;
      &.active{
        font-weight: bold;
      }
    }
  }
</style>
