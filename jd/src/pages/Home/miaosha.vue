<template>
  <div class="miaoWrap">
    <div class="content">
      <div class="title">
        <i></i>
        <span class="text">掌上秒杀</span>
        <span class="date">06:58:39</span>
        <span class="right">京选轮番秒</span>
      </div>
      <div class="img">
        <a href="#">
          <img src="../../assets/images/img/pro01.jpg" alt="" />
          <p>￥80</p>
          <p class="del">￥150</p>
        </a>
        <a href="#">
          <img src="../../assets/images/img/pro02.jpg" alt="" />
          <p>￥10</p>
          <p class="del">￥30</p>
        </a>
        <a href="#">
          <img src="../../assets/images/img/pro03.jpg" alt="" />
          <p>￥40</p>
          <p class="del">￥100</p>
        </a>
        <a href="#">
          <img src="../../assets/images/img/pro04.jpg" alt="" />
          <p>￥80</p>
          <p class="del">￥140</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="less">
.miaoWrap {
  width: 100%;
  padding: 0.2rem 0.1rem;
  box-sizing: border-box;
  .content {
    width: 100%;
    padding: 0.2rem;
    box-sizing: border-box;
    background-color: #ffffff;
    .title {
      font-size: 0.35rem;
      position: relative;
      span {
        display: inline-block;
      }
      .text {
        color: #d95865;
        margin-left: 0.8rem;
      }
      .right {
        float: right;
        font-size: 0.3rem;
        color: #f23839;
      }
      i {
        display: inline-block;
        width: 0.8rem;
        height: 1rem;
        background: url(../../assets/images/img/seckill-icon.png) center center
          no-repeat;
        background-size: 40/64rem 50/64rem;
        transform: scale(0.5, 0.5);
        position: absolute;
        top: 0;
      }
    }
    .img {
      width: 100%;
      display: flex;
      padding: .3rem 0;
      a {
        display: inline-block;
        flex: 1;
        img {
          width: 100%;
        }
        p{
            font-size: .26rem;
            text-align: center;
            color: #d8505c;
            font-weight: bold;
        }
        .del{
            font-weight: 400;
            color: #666666;
            text-decoration: line-through;
        }
      }
    }
  }
}
</style>