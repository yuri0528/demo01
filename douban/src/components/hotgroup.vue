<template>
  <div class="groupWrap">
    <h4>{{ title }}</h4>
    <div class="item" v-for="(item, index) in listArr" :key="index">
      <img :src="item.img_url" alt="" />
      <span>{{ item.group_name }}</span>
      <span class="fr">{{ item.group_member }}</span>
      <p class="num">{{ item.topic_title }}</p>
    </div>
    <p class="more">更多相关小组</p>
  </div>
</template>

<script>
export default {
  props: ["title", "imgUrl", "name", "listArr"],
};
</script>

<style lang="less">
.groupWrap {
  padding: 0.2rem 0.1rem 0.2rem 0.3rem;
  h4 {
    line-height: 0.5rem;
  }
  .item {
    width: 100%;
    border-bottom: 1px solid #cccccc;
    margin-bottom: 0.25rem;
    img {
      width: 0.8rem;
      float: left;
      margin-right: 0.2rem;
    }
    span {
      width: 0.8rem;
      line-height: 0.8rem;
      font-size: 0.26rem;
    }
    .fr {
      float: right;
      width: 1.3rem;
      color: #666;
      text-align: right;
    }
    .num {
      display: inline-block;
      white-space: nowrap;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 0.5rem;
      font-size: 0.26rem;
    }
  }
  .more {
    text-align: center;
    color: #42bd56;
    font-size: 0.28rem;
  }
}
</style>