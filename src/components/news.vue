<template>
  <div class="main">
    <div class="news-item">
      <div class="news-item__head">
        <div class="news-item__title">
          {{$store.state.newsItem.title}}
        </div>
        <div class="news-item__date">
          {{sliceDate($store.state.newsItem.date)}}
        </div>
      </div>
      <div class="news-item__content" v-html="$store.state.newsItem.fullDescription">

      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'news',
  data () {
    return {
      news: []
    }
  },
  created () {
    this.$store.dispatch('getNewsContent', this.$route.params.id)
  },
  methods: {
    sliceDate: function (date) {
      let slicedDate = date.slice(0, 10)
      return slicedDate
    }
  }
}
</script>

<style scoped lang="scss">

</style>
