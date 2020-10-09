<template>
  <div class="homeWrap">
    <div class="autoFucus">
      <nut-textinput
        class="my-input"
        type="search"
        v-model="val"
        placeholder="请输入你要查找的内容"
        ref="myInput"
        @keyup.enter="submit"
      />
      <div class="searchBtn" @click="submit">登录</div>
      <i class="icon_jd"></i>
      <i class="icon_search"></i>
    </div>
    <Swiper></Swiper>
    <Navlist></Navlist>
    <div class="fuli">
      <img src="../../assets/images/img/fuli.jpg" alt="">
    </div>
    <Miaosha></Miaosha>
    <div class="aishenghuo">
      <img src="../../assets/images/img/aishenghuo.jpg" alt="">
    </div>
    <Shopping></Shopping>
    <Recommend></Recommend>
    <Footer></Footer>
  </div>
</template>

<script>
import Swiper from "./swiper";
import Navlist from "./navlist";
import Miaosha from "./miaosha";
import Shopping from "./shopping";
import Recommend from "./recommend";
import Footer from "./footer";
export default {
  components: {
    Swiper,
    Navlist,
    Miaosha,
    Shopping,
    Recommend,
    Footer
  },
  data() {
    return {
      val: "",
    };
  },
  mounted() {
    //设置获取焦点
    this.$nextTick(function () {
      this.$refs.myInput.focus();
    });
  },
  methods: {
    onFocus() {
      console.log("focus事件触发！");
    },
    onBlur() {
      console.log("blur事件触发！");
    },
    submit() {
      //失去焦点
      this.$refs.myInput.blur();
    },
  },
};
</script>

<style lang="less">
.homeWrap{
  width: 100%;
  box-sizing: border-box;
  padding-bottom: 1rem;
  background-color: #f6f6f6;
}
.autoFucus {
  width: 100%;
  position: fixed;
  padding: .2rem;
  box-sizing: border-box;
  z-index: 9;
  .my-input {
    width: 85%;
    input {
      border-radius: 25rem;
      text-indent: 1.3rem;
      font-size: 0.3rem;
    }
  }
  .searchBtn {
    position: absolute;
    font-size: 0.3rem;
    top: 50%;
    right: 0.3rem;
    transform: translateY(-50%);
    color: #fff;
  }
  .icon_jd {
    position: absolute;
    display: inline-block;
    width: 0.65rem;
    height: 0.5rem;
    background: url(../../assets/images/icon/sprites.png) 0 0 no-repeat;
    background-size: 400/64rem;
    top: 50%;
    left: 0.3rem;
    transform: translateY(-50%) scale(0.8, 0.8);
  }
  .icon_search {
    position: absolute;
    display: inline-block;
    width: 0.6rem;
    height: 0.6rem;
    background: url(../../assets/images/icon/sprites.png)-120/64rem -220/64rem no-repeat;
    background-size: 400/64rem;
    top: 50%;
    left: 1rem;
    transform: translateY(-50%) scale(0.8, 0.8);
  }
}
.fuli{
  width: 100%;
  img{
    width: 100%;
  }
}
.aishenghuo{
  width: 100%;
  img{
    width: 100%;
  }
}
</style>