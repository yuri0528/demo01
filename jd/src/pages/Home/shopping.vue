<template>
  <div class="shopWrap">
    <div class="content">
      <div class="box1">
        <img src="../../assets/images/img/cp1.jpg" alt="" />
      </div>
      <div class="box2">
        <img src="../../assets/images/img/cp2.jpg" alt="" class="shan"/>
        <img src="../../assets/images/img/cp3.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.shopWrap {
  width: 100%;
  padding: 0.1rem;
  box-sizing: border-box;
  overflow: hidden;
  .content {
    border: 1px solid #f3f3f3;
    .box1 {
      width: 50%;
      float: left;
      border-right: 1px solid #cfcfcf;
      box-sizing: border-box;
      img {
        width: 100%;
        float: left;
      }
    }
    .box2 {
      width: 50%;
      float: left;
      img {
        width: 100%;
        float: left;
      }
      :nth-last-child(1){
        border-top: 1px solid #cfcfcf;
        box-sizing: border-box;
      }
    }
  }
}
</style>