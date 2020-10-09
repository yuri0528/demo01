<template>
  <div>
    <div class="homeWrap">
      <input type="text" placeholder="影视 图书 唱片 小组等" />
      <img src="../../assets/img/ic_group_search_small.png" class="i_search" />
      <img src="../../assets/img/ic_scan_gray.png" class="i_scan" />
      <img src="../../assets/img/ic_chat_white.png" class="i_chat" />
    </div>
    <div class="main">
      <Banner swiperID="swiperID1" paginationtype="bullets" effect="coverflow">
        <template #swiper-slide>
          <div class="swiper-slide">
            <img src="../../assets/轮播/01.jpg" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="../../assets/轮播/02.jpg" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="../../assets/轮播/03.jpg" alt="" />
          </div>
        </template>
      </Banner>
      <NewsList
        v-for="(item, index) in arr"
        :key="index"
        :imgSrc="item.target.cover_url"
        :title="item.title" :text="item.target.desc" :name="item.target.author.name"
      >
      </NewsList>
    </div>
  </div>
</template>

<script>
import Header from "../../components/Header";
import Banner from "../../components/banner";
import NewsList from "../../components/newslist";
export default {
  components: {
    Header,
    Banner,
    NewsList,
  },
  data() {
    return {
      arr: [],
    };
  },
  mounted() {
    this.$axios.get("../../../static/data/homeData.json").then((res) => {
      // console.log(res.data.recommend_feeds);
      this.arr = res.data.recommend_feeds;
    });
  },
};
</script>

<style lang="less">
.main {
  margin-top: 1.2rem;
}
.homeWrap {
  width: 100%;
  height: 1.2rem;
  background-color: #48bd5a;
  position: fixed;
  top: 0;
  z-index: 10;
  input {
    position: absolute;
    width: 80%;
    height: .8rem;
    top: 50%;
    left: .2rem;
    transform: translateY(-50%);
    border: none;
    border-radius: 5px;
    text-indent: 1rem;
    font-size: .32rem;
  }
  .i_search {
    position: absolute;
    width: .5rem;
    height: .5rem;
    top: 50%;
    left: .4rem;
    transform: translateY(-50%);
  }
  .i_scan {
    position: absolute;
    width: .5rem;
    height: .5rem;
    top: 50%;
    right: 1.3rem;
    transform: translateY(-50%);
  }
  .i_chat {
    position: absolute;
    width: .6rem;
    height: .6rem;
    top: 50%;
    right: .4rem;
    transform: translateY(-50%);
  }
}
</style>