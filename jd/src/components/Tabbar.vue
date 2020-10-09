<template>
  <div class="tabbarWrap">
    <Item
      class="itemWrap"
      mark="home"
      :curr="currnav"
      @change="getVal"
      text="首页"
    >
      <template #normalImg>
        <img src="../assets/images/icon/icon-home.png" alt="" />
      </template>
      <template #activeImg>
        <img src="../assets/images/icon/icon-home-active.png" alt="" />
      </template>
    </Item>
    <Item
      class="itemWrap"
      mark="classify"
      :curr="currnav"
      @change="getVal"
      text="发现"
    >
      <template #normalImg>
        <img src="../assets/images/icon/icon-catergry.png" alt="" />
      </template>
      <template #activeImg>
        <img src="../assets/images/icon/icon-catergry-active.png" alt="" />
      </template>
    </Item>
    <Item
      class="itemWrap"
      mark="discover"
      :curr="currnav"
      @change="getVal"
      text="发现"
    >
      <template #normalImg>
        <img src="../assets/images/icon/icon-find.png" alt="" />
      </template>
      <template #activeImg>
        <img src="../assets/images/icon/icon-find-active.png" alt="" />
      </template>
    </Item>
    <Item
      class="itemWrap"
      mark="cart"
      :curr="currnav"
      @change="getVal"
      text="购物车"
    >
      <template #normalImg>
        <img src="../assets/images/icon/icon-cart.png" alt="" />
      </template>
      <template #activeImg>
        <img src="../assets/images/icon/icon-cart.png" alt="" />
      </template>
    </Item>
    <Item
      class="itemWrap"
      mark="mine"
      :curr="currnav"
      @change="getVal"
      text="我的"
    >
      <template #normalImg>
        <img src="../assets/images/icon/icon-me.png" alt="" />
      </template>
      <template #activeImg>
        <img src="../assets/images/icon/icon-me-active.png" alt="" />
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
    },
  },
};
</script>

<style lang="less">
.tabbarWrap {
  width: 100%;
  height: 1rem;
  border-top: 1px solid #cccccc;
  position: fixed;
  bottom: 0;
  display: flex;
  text-align: center;
  background-color: #ffffff;
  .itemWrap {
    flex: 1;
    img {
      width: 1rem;
      height: 1rem;
    }
  }
}
</style>