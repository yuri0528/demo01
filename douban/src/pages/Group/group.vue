<template>
  <div>
    <div class="audioWrap">
      <p>小组</p>
      <img
        src="../../assets/img/ic_actionbar_search_icon.png"
        class="i_search_green"
      />
      <img src="../../assets/img/ic_chat_green.png" class="i_chat_green" />
    </div>
    <div class="groupBox"></div>
    <Hotgroup
      v-for="(item, index) in groupArr"
      :key="index"
      :title="item.title"
      :listArr="item.group_list"
    ></Hotgroup>
  </div>
</template>

<script>
import Header from "../../components/Header";
import Hotgroup from "../../components/hotgroup";
export default {
  components: {
    Header,
    Hotgroup,
  },
  data() {
    return {
      groupArr: []
    };
  },
  mounted() {
    this.$axios.get("../../../static/data/groupData.json").then((res) => {
      console.log(res.data.group);
      this.groupArr = res.data.group;
    });
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
  position: fixed;
  top: 0;
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
.groupBox{
  margin-top: 1.2rem;
}
</style>