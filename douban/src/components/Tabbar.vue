<template>
  <div class="tabbarWrap">
    <Item class="itemWrap" mark="home" :curr="currnav" @change="getVal" text="首页">
      <template #normalImg>
        <img src="../assets/img/ic_tab_home_normal.png" alt="" />
      </template>
      <template #activeImg>
        <img src="../assets/img/ic_tab_home_active.png" alt="" />
      </template>
    </Item>
    <Item class="itemWrap" mark="audio" :curr="currnav" @change="getVal" text="书影音">
      <template #normalImg>
        <img src="../assets/img/ic_tab_subject_normal.png" alt="" />
      </template>
      <template #activeImg>
        <img src="../assets/img/ic_tab_subject_active.png" alt="" />
      </template>
    </Item>
    <Item class="itemWrap" mark="broadcast" :curr="currnav" @change="getVal" text="广播">
      <template #normalImg>
        <img src="../assets/img/ic_tab_status_normal.png" alt="" />
      </template>
      <template #activeImg>
        <img src="../assets/img/ic_tab_status_active.png" alt="" />
      </template>
    </Item>
    <Item class="itemWrap" mark="group" :curr="currnav" @change="getVal" text="小组">
      <template #normalImg>
        <img src="../assets/img/ic_tab_subject_normal.png" alt="" />
      </template>
      <template #activeImg>
        <img src="../assets/img/ic_tab_subject_active.png" alt="" />
      </template>
    </Item>
    <Item class="itemWrap" mark="mine" :curr="currnav" @change="getVal" text="我的">
      <template #normalImg>
        <img src="../assets/img/ic_tab_profile_normal.png" alt="" />
      </template>
      <template #activeImg>
        <img src="../assets/img/ic_tab_profile_active.png" alt="" />
      </template>
    </Item>
  </div>
</template>

<script>
import Item from "./Item";
export default {
  components: {
    Item,
  },
  data() {
    return {
      currnav: "nav1",
    };
  },
  methods: {
    getVal(inmark) {
      this.currnav = inmark;
    }
  },
};
</script>

<style lang="less">
.tabbarWrap {
  width: 100%;
  height: 1.3rem;
  border-top: 1px solid #cccccc;
  position: fixed;
  bottom: 0;
  display: flex;
  text-align: center;
  background-color: #ffffff;
  .itemWrap {
    flex: 1;
    img {
      width: 0.7rem;
      height: 0.7rem;
    }
  }
}
</style>