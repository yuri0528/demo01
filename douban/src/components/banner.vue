<template>
  <div class="swiper-container" :class="swiperID">
    <div class="swiper-wrapper">
      <slot name="swiper-slide"></slot>
    </div>
    <!-- 如果需要分页器 -->
    <div :class="{'swiper-pagination':paginationshow,['swiper-pagination'+swiperID]:paginationshow}"></div>
    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
    <!-- 如果需要滚动条 -->
    <div class="swiper-scrollbar"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
export default {
    props:{
        swiperID:{type:String,default:''},
        //是否显示分页器
        paginationshow:{type:Boolean,default:true},
        //设置轮播图样式
        effect:{type:String,default:'silde'},
        //分页器类型
        paginationtype:{type:String,default:'bullets'}
    },
  mounted() {
    new Swiper("."+this.swiperID, {
      autoplay:true,//自动切换
      loop: true, // 循环模式选项
      effect:this.effect,
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"+this.swiperID,
        type:this.paginationtype
      },
      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }
    });
  },
};
</script>

<style lang="less">
.swiper-container {
  img {
    width: 100%;
  }
  .swiper-pagination{
     text-align: right; 
  }
}
</style>