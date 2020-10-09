<template>
  <nut-swiper
    direction="horizontal"
    :loop="true"
    :canDragging="false"
    :paginationVisible="true"
    ref="demo3"
  >
    <div class="nut-swiper-slide gray">
      <img src="../../assets/images/img/1.jpg" alt="">
    </div>
    <div class="nut-swiper-slide gray_1">
      <img src="../../assets/images/img/2.jpg" alt="">
    </div>
    <div class="nut-swiper-slide gray">
      <img src="../../assets/images/img/3.jpg" alt="">
    </div>
    <div class="nut-swiper-slide gray_1">
      <img src="../../assets/images/img/4.jpg" alt="">
    </div>
    <div class="nut-swiper-slide gray">
      <img src="../../assets/images/img/5.jpg" alt="">
    </div>
    <div class="nut-swiper-slide gray_1">
      <img src="../../assets/images/img/6.jpg" alt="">
    </div>
    <div class="nut-swiper-slide gray">
      <img src="../../assets/images/img/7.jpg" alt="">
    </div>
    <div class="nut-swiper-slide gray_1">
      <img src="../../assets/images/img/8.jpg" alt="">
    </div>
  </nut-swiper>
</template>

<script>
export default {
  data() {
    return {
      dataItem: [],
      dataImgItem: [],
    };
  },
  mounted() {
    setTimeout(() => {
      this.dataItem = [
        {
          name: 1,
        },
        {
          name: 2,
        },
        {
          name: 3,
        },
        {
          name: 4,
        },
        {
          name: 5,
        },
        {
          name: 6,
        },
        {
          name: 7,
        },
        {
          name: 8,
        },
      ];
    }, 300);
  },
};
</script>

<style lang="less">
.nut-swiper-slide{
    width: 100%;
    img{
        width: 100%;
        height: 4rem;
    }
}

</style>