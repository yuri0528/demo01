<template>
  <div class="recomWrap">
    <div class="title">
      <p><i></i>&nbsp;&nbsp;为您推荐</p>
    </div>
    <div class="pic">
      <ul>
        <li class="even">
          <a href="#">
            <img src="../../assets/images/img/item01.jpg" alt="" />
            <div class="text">
              <h6>晋腾家用不锈钢手动压面机手摇多功能面条机水果榨汁机</h6>
              <p>￥99</p>
              <span>好评率94%</span>
              <span class="right">看相似</span>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../../assets/images/img/item02.jpg" alt="" />
            <div class="text">
              <h6>品柜 连衣裙长袖2018春装新款韩版时尚女装修身显瘦</h6>
              <p>￥198</p>
              <span>好评率99%</span>
              <span class="right">看相似</span>
            </div>
          </a>
        </li>
        <li class="even">
          <a href="#">
            <img src="../../assets/images/img/item03.jpg" alt="" />
            <div class="text">
              <h6>LG 29WK600-W 29英寸 21:9 超宽屏 FHD freeSyn</h6>
              <p>￥1988.0</p>
              <span>好评率99%</span>
              <span class="right">看相似</span>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../../assets/images/img/item04.jpg" alt="" />
            <div class="text">
              <h6>劲仔小鱼 鱼干鱼仔 零食 香辣味 15g*20包/盒</h6>
              <p>￥99</p>
              <span>好评率94%</span>
              <span class="right">看相似</span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.recomWrap {
  width: 100%;
  .title {
    width: 100%;
    text-align: center;
    p {
      font-size: 0.3rem;
      display: inline-block;
      color: #a2a4a7;
      i {
        display: inline-block;
        width: 0.35rem;
        height: 0.35rem;
        background: url(../../assets/images/icon/upload.png) center center
          no-repeat;
        background-size: 21/64rem;
        vertical-align: middle;
      }
    }
  }
  .pic {
    width: 100%;
    ul {
      width: 100%;
      background-color: #f6f6f6;
      padding-bottom: 0;
      li {
        width: 50%;
        padding-bottom: .1rem;
        a {
          display: inline-block;
          width: 100%;
          height: 100%;
          border: 1px solid #c3c3c4;
          box-sizing: border-box;
          img {
            width: 100%;
          }
          .text {
              padding: .1rem;
            h6 {
              font-size: 0.26rem;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              color: #443f40;
            }
            p {
              font-size: 0.3rem;
              font-weight: bold;
              color: #f23046;
              text-align: left;
              padding: .1rem 0;
            }
            span {
              font-size: 0.26rem;
              float: left;
              color: #aeadad;
              padding-bottom:.2rem;
            }
            .right{
                float: right;
                padding: 0 .1rem;
                border: 1px solid #c3c3c4;
                border-radius: 5px;
                color: #747576;
            }
          }
        }
      }
      .even{
          padding-right: .1rem;
          box-sizing: border-box;
      }
    }
  }
}

</style>