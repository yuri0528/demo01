<template>
  <div class="footerWrap">
    <div class="box1">
      <ul class="nav">
        <li>登录</li>
        <li>注册</li>
        <li>反馈</li>
        <li class="last">返回顶部</li>
      </ul>
    </div>
    <div class="box2">
      <ul>
        <li>
          <i class="app"></i>
          <p>客户端</p>
        </li>
        <li>
          <i class="phone"></i>
          <p>触屏版</p>
        </li>
        <li>
          <i class="pc"></i>
          <p>电脑端</p>
        </li>
      </ul>
    </div>
    <div class="box3">
        <p>Copyright &copy; 2004-2018 京东JD.com 版权所有</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.footerWrap {
  width: 100%;
  .box1 {  
    .nav {
      display: flex;
      padding: 0.2rem 0;
      background-color: #f6f6f6;
      li {
        flex: 1;
        text-align: center;
        font-size: 0.26rem;
        border-right: 1px solid #dcdcdc;
        color: #8e9092;
      }
      .last {
        border-right: none;
      }
    }
  }
  .box2 {
    ul {
      width: 100%;
      display: flex;
      padding: .2rem 0;
      background-color: #f6f6f6;
      li {
        flex: 1;
        text-align: center;
        i {
          display: inline-block;
          width: 1.1rem;
          height: 1.1rem;
       
        }
        .app {
          background: url(../../assets/images/img/sprites.png)-238/64rem -138/64rem no-repeat;
          background-size: 400/64rem;
        }
        .phone{
          background: url(../../assets/images/img/sprites.png)-78/64rem -138/64rem no-repeat;
          background-size: 400/64rem;
        }
        .pc{
          background: url(../../assets/images/img/sprites.png)-158/64rem -138/64rem no-repeat;
          background-size: 400/64rem;
        }
        p {
          font-size: 0.3rem;
          color: #797979;
        }
      }
    }
  }
  .box3{
      width: 100%;
      padding: .1rem 0;
      p{
          font-size: .26rem;
          text-align: center;
          color: #797979;
      }
  }
}
</style>