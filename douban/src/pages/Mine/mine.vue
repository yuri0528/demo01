<template>
  <div>
    <div class="audioWrap">
      <p>我的</p>
      <img src="../../assets/img/ic_settings.png" class="ic_settings" />
    </div>
    <Minelist></Minelist>
  </div>
</template>

<script>
import Header from "../../components/Header";
import Minelist from "../../components/minelist";
export default {
  components: {
    Header,
    Minelist,
  },
};
</script>

<style lang="less">
.audioWrap {
  width: 100%;
  height: 60px;
  background-color: #f7f7f7;
  position: relative;
  border-bottom: 1px solid #d9d9d9;
  position: relative;
  p {
    text-align: center;
    line-height: 60px;
    font-size: 18px;
    color: #6e6e6e;
  }
  .ic_settings {
    position: absolute;
    width: 30px;
    height: 30px;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>