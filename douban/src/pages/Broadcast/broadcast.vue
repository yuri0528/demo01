<template>
  <div>
    <div class="broadcastWrap">
      <p>广播</p>
      <img
        src="../../assets/img/ic_status_search_user.png"
        class="i_search_user"
      />
      <img src="../../assets/img/ic_chat_green.png" class="i_chat_green" />
    </div>
    <Content></Content>
  </div>
</template>

<script>
import Header from "../../components/Header";
import Content from "./sub/content"
export default {
  components: {
    Header,
    Content
  },
};
</script>

<style lang="less">
.broadcastWrap {
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
  .i_search_user {
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
</style>