<template>
  <div class="box">
    <div class="login">
      <img src="../../../assets/img/user_normal.jpg" alt="" />
      <router-link to="login">
        <span>登录发广播</span>
      </router-link>
    </div>
    <div class="content" v-for="(item, index) in arr" :key="index">
        <span class="iconfont icon-douban"></span>
      <div class="title">
        <p><span class="db">豆瓣</span> <span>写了日记</span></p>
        <p>{{ item.date }}</p>
      </div>
      <div class="text">
        <h4>{{ item.title }}</h4>
        <p>{{ item.text }}</p>
      </div>
      <div class="icon">
        <span class="iconfont icon-zan">{{ item.zan }}</span>
        <span class="iconfont icon-pinglun">{{ item.msg }}</span>
        <span class="iconfont icon-fenxiang">{{ item.zhuan }}</span>
        <span class="iconfont icon-shenglve"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        {
          date: "2018-05-23 10:39:23",
          title: "5月24日凌晨3:00~6:00豆瓣停机维护",
          text:
            "因业务发展需要，豆瓣计划与5月24日(星期四)凌晨3:00~6:00对服务器进行机房迁移，迁移期间全部豆瓣相关迁移期间全部豆瓣相关",
          zan: "29",
          msg: "14",
          zhuan: "25",
        },
        {
          date: "2018-05-23 10:39:23",
          title: "北京时间3月28日19点19分，豆瓣首部破百万评分人数电影诞生",
          text:
            "因业务发展需要，豆瓣计划与5月24日(星期四)凌晨3:00~6:00对服务器进行机房迁移，迁移期间全部豆瓣相关迁移期间全部豆瓣相关",
          zan: "66",
          msg: "55",
          zhuan: "33",
        },
      ],
    };
  },
};
</script>

<style lang="less">
.box {
  overflow: hidden;
  margin-top: 1.2rem;
}
.login {
  width: 100%;
  overflow: hidden;
  border-bottom: 1px solid #cccccc;
  img {
    width: 0.8rem;
    border-radius: 50%;
    float: left;
    margin: 0.2rem;
  }
  span {
    font-size: 0.28rem;
    color: #999;
    float: left;
    display: inline-block;
    line-height: 0.8rem;
    margin: 0.2rem 0;
  }
}
.content {
  width: 100%;
  padding: 0 0.3rem;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  .title {
    font-size: 0.28rem;
    padding-left: 1rem;
    line-height: 0.4rem;
    color: #999;
    margin-top: 0.3rem;
    .db {
      color: #000;
      font-weight: bold;
    }
  }
  .text {
    width: 75%;
    background-color: #f9f9f9;
    float: right;
    padding: 0.2rem;
    overflow: hidden;
    margin: 0.2rem 0;
    h4 {
      font-size: 0.3rem;
    }
    p {
      font-size: 0.26rem;
      padding-top: 0.2rem;
      color: #666;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3; //需要控制的文本行数
      overflow: hidden;
    }
  }
  .icon {
    width: 80%;
    float: right;
    margin-bottom: 0.3rem;
    .iconfont {
      color: #ccc;
      font-size: 0.3rem;
      margin-right: 0.5rem;
    }
  }
}
.icon-douban {
  font-size: 0.7rem;
  color: #05c212;
  position: absolute;
  top: .3rem;
}
</style>