<template>
  <div class="box">
    <div class="filmWrap">
      <h4>正在上映的电影-北京</h4>
      <div class="hot" v-for="(item, index) in arr" :key="index">
        <a href="#">
          <img :src="item.cover_url" alt="" />
          <p>{{ item.title }}</p>
          <p>评分：{{ item.score }}</p>
        </a>
      </div>
    </div>
    <div class="filmWrap">
      <h4>即将上映的电影</h4>
      <div class="hot" v-for="(item, index) in arr2" :key="index">
        <a href="#">
          <img :src="item.cover_url" alt="" />
          <p>{{ item.title }}</p>
          <p>评分：{{ item.score }}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [],
      arr2: [],
    };
  },
  mounted() {
    this.$axios.get("../../../static/data/broadcast.json").then((res) => {
      // console.log(res.data.recommend_one);
      this.arr = res.data.recommend_one;
      this.arr2 = res.data.recommend_two;
    });
  },
};
</script>

<style lang="less">
.box {
  width: 100%;
  overflow: auto;
}
.filmWrap {
  h4 {
    padding: 0.3rem;
  }
  .hot {
    width: 12.7rem;
    a {
      float: left;
      display: inline-block;
      width: 2rem;
      margin-left: 0.1rem;
      box-sizing: border-box;
      text-decoration: none;
      text-align: center;
      img {
        width: 100%;
      }
      p {
        font-size: 0.24rem;
        color: #666;
      }
    }
  }
}
</style>