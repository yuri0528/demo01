<template>
  <div>
    <ul class="list01">
      <li>
        <span class="iconfont icon-mimaguanli"></span>
        <p>密码管理</p>
      </li>
      <li>
        <span class="iconfont icon-yinhangqia"></span>
        <p>银行卡管理</p>
      </li>
    </ul>
    <ul class="list02">
      <li>
        <span class="iconfont icon-tiweipinggu"></span>
        <span>风险承受能力评估</span>
        <span class="iconfont icon-dayu"></span>
      </li>
      <li>
        <span class="iconfont icon-anquanbaozhang"></span>
        <span>安全保障</span>
        <span class="iconfont icon-dayu"></span>
      </li>
      <li>
        <span class="iconfont icon-Userpersonalinform"></span>
        <span>我的关注</span>
        <span class="iconfont icon-dayu"></span>
      </li>
      <li>
        <span class="iconfont icon-bangzhuzhongxin"></span>
        <span>帮助中心</span>
        <span class="iconfont icon-dayu"></span>
      </li>
      <li>
        <span class="iconfont icon-Userpersonalinform"></span>
        <span>关于我们</span>
        <span class="iconfont icon-dayu"></span>
      </li>
      <li>
        <span class="iconfont icon-jiancha"></span>
        <span>检查更新</span>
        <span class="iconfont icon-dayu"></span>
      </li>
      <li>
        <span class="iconfont icon-lianxikefu"></span>
        <span>联系客服</span>
        <span class="iconfont icon-dayu"></span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.list01 {
  display: flex;
  text-align: center;
  padding: 0.3rem 0;
  border-bottom: 1px solid #cccccc;
  li {
    flex: 1;
    list-style: none;
    .iconfont {
      color: #42bd56;
      font-size: 0.5rem;
    }
    p {
      padding-top: 0.1rem;
    }
  }
}
.list02 {
  li {
      line-height: .9rem;
      border-bottom: 1px solid #cccccc;
    .iconfont {
      color: #42bd56;
      font-size: 0.4rem;
      padding: 0 .2rem;
    }
    .icon-dayu{
        float: right;
    }
  }
}
</style>