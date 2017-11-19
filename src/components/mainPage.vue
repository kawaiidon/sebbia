<template>
  <div class="main">
    <ul class="category-list">
      <li class="category-list__item"
        v-for="item in $store.state.categorys"
        @click="showCategory(item.id)"
        >
        {{item.name}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'mainPage',
  data () {
    return {
      category: [],
      errors: [],
      news: []
    }
  },
  created () {
    this.$store.dispatch('getCategory')
  },
  methods: {
    showCategory: function (id) {
      this.$store.dispatch('getNews', id)
    }
  }
}
</script>

<style scoped lang="scss">
  .category-list{
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0;
    padding: 0;
    &__item{
      margin: 10px 0;
      list-style-type: none;
      cursor: pointer;
      transition: 0.3s;
      color: #000;
      &:hover{
        color: #96CDFF;
      }
    }
  }
</style>
