<template>
  <div>
    <div class="audioWrap">
      <p>书影音</p>
      <img
        src="../../assets/img/ic_actionbar_search_icon.png"
        class="i_search_green"
      />
      <img src="../../assets/img/ic_chat_green.png" class="i_chat_green" />
    </div>
    <div class="audioNav">
      <span :class="{active:currId==0}" @click="currId=0">
        <router-link to="/audio/film">电影</router-link>
      </span>
      <span :class="{active:currId==1}" @click="currId=1">
        <router-link to="/audio/read">读书</router-link>
      </span>
      <span :class="{active:currId==2}" @click="currId=2">
        <router-link to="/audio/tv">电视</router-link>
      </span>
      <span :class="{active:currId==3}" @click="currId=3">
        <router-link to="/audio/city">同城</router-link>
      </span>
      <span :class="{active:currId==4}" @click="currId=4">
        <router-link to="/audio/music">音乐</router-link>
      </span>
    </div>
    <!-- 二级路由 -->
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "../../components/Header";
export default {
  components: {
    Header,
  },
  data() {
    return {
      currId:0
    }
  }
};
</script>

<style lang="less">
.audioWrap {
  width: 100%;
  height: 60px;
  background-color: #f7f7f7;
  position: fixed;
  top: 0;
  border-bottom: 1px solid #d9d9d9;
  p {
    text-align: center;
    line-height: 60px;
    font-size: 18px;
    color: #6e6e6e;
  }
  .i_search_green {
    position: absolute;
    width: 30px;
    height: 30px;
    right: 60px;
    top: 50%;
    transform: translateY(-50%);
  }
  .i_chat_green {
    position: absolute;
    width: 30px;
    height: 30px;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
}
.audioNav {
  display: flex;
  text-align: center;
  line-height: 0.6rem;
  border-bottom: 1px solid #cccccc;
  margin-top: 1.2rem;
  span {
    flex: 1;
    a {
      text-decoration: none;
      color: #999;
    }
  }
  .active {
    background-color: #07d614;
    a {
      color: #ffffff;
    }
  }
}
</style>