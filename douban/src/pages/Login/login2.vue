<template>
  <div class="contentBox">
    <div class="title">
      <h1>登录豆瓣</h1>
      <p>登录注册表示同意 <a href="#">豆瓣使用协议、隐私政策</a></p>
    </div>
    <div class="form">
      <div class="phone">
        <input type="text" placeholder="手机号 / 邮箱" />
      </div>
      <div class="code">
        <input type="password" placeholder="密码" />
      </div>
      <div class="verify">
        <span class="first">
          <router-link to="login">免密码登录</router-link>
        </span>
        <span>
          <a href="#">海外手机登录</a>
        </span>
        <span class="right">
          <a href="#">找回密码</a>
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
export default {};
</script>

<style lang="less">
a {
  text-decoration: none;
  color: #39bb4a;
}
.xinlang {
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
      input {
        border: none;
        height: 0.7rem;
        line-height: 0.7rem;
        width: 100%;
        outline: none;
        text-indent: 0.2rem;
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
    }
    .verify {
      width: 100%;
      font-size: 0.28rem;
      line-height: 1rem;
      .first{
        margin-right: .3rem;
      }
      .right {
        float: right;
        a {
          color: #000;
        }
      }
    }
  }
  .footer {
    width: 100%;
    text-align: center;
    font-size: 0.28rem;
    color: #999;
    margin-top: 2rem;
    span {
      display: inline-block;
      padding: 0.1rem;
      border: 1px solid #f2f2f2;
      border-radius: 50%;
      margin: 0.5rem 0.25rem;
      a {
        font-size: 0.6rem;
      }
    }
  }
}
</style>