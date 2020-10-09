<template>
  <div class="contentBox">
    <div class="title">
      <h1>登录豆瓣</h1>
      <p>登录注册表示同意 <a href="#">豆瓣使用协议、隐私政策</a></p>
    </div>
    <div class="form">
      <div class="phone">
        <span>+86</span>
        <input type="text" placeholder="手机号" />
      </div>
      <div class="code">
        <input type="text" placeholder="手机验证码" />
        <a href="#">获取验证码</a>
      </div>
      <div class="verify">
        <span>
          <router-link to="login2">账号密码登录</router-link>
        </span>
        <span class="right">
          <a href="#">验证码收不到?</a>
        </span>
      </div>
    </div>
    <div class="footer">
      <p>第三方登录</p>
      <span>
        <a href="#" class="iconfont icon-xinlang xinlang"></a>
      </span>
      <span>
        <a href="#" class="iconfont icon-weixin"></a>
      </span>
    </div>
  </div>
</template>

<script>
import Login2 from './login2';
export default {
  Login2
};
</script>

<style lang="less">
a {
  text-decoration: none;
  color: #39bb4a;
}
.xinlang{
  color: #e84b4e;
}
.contentBox {
  width: 100%;
  .title {
    width: 100%;
    text-align: center;
    margin: 0.8rem 0;
    h1 {
      font-weight: 400;
      font-size: 0.5rem;
    }
    p {
      font-size: 0.26rem;
      color: #999;
    }
  }
  .form {
    width: 100%;
    padding: 0 0.3rem;
    box-sizing: border-box;
    .phone {
      border: 1px solid #ccc;
      height: 0.8rem;
      line-height: 0.8rem;
      width: 100%;
      font-size: 0.28rem;
      span {
        display: inline-block;
        padding: 0 0.2rem;
        border-right: 1px solid #cccccc;
      }
      input {
        border: none;
        height: 0.7rem;
        line-height: 0.7rem;
        width: 4.6rem;
        outline: none;
        text-indent: 0.1rem;
      }
    }
    .code {
      border: 1px solid #ccc;
      height: 0.8rem;
      line-height: 0.8rem;
      width: 100%;
      border-top: none;
      position: relative;
      font-size: 0.28rem;
      input {
        border: none;
        height: 0.7rem;
        line-height: 0.7rem;
        width: 100%;
        outline: none;
        text-indent: 0.2rem;
      }
      a {
        position: absolute;
        right: 0.2rem;
      }
    }
    .verify{
      width: 100%;
      font-size: .28rem;
      line-height: 1rem;
      .right{
        float: right;
        a{
          color: #000;
        }
      }
    }
  }
  .footer{
    width: 100%;
    text-align: center;
    font-size: .28rem;
    color: #999;
    margin-top: 2rem;
    span{
      display: inline-block;
      padding: .1rem;
      border: 1px solid #f2f2f2;
      border-radius: 50%;
      margin: .5rem .25rem;
      a{
        font-size: .6rem;
      }
    }
  }
}
</style>