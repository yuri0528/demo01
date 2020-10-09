<template>
  <div>
    <ul>
      <li>
        <a href="#"><img src="../../assets/images/icon/nav0.png" alt="" /></a>
        <p>分类查询</p>
      </li>
      <li>
        <a href="#"><img src="../../assets/images/icon/nav1.png" alt="" /></a>
        <p>物流查询</p>
      </li>
      <li>
        <a href="#"><img src="../../assets/images/icon/nav2.png" alt="" /></a>
        <p>购物车</p>
      </li>
      <li>
        <a href="#"><img src="../../assets/images/icon/nav3.png" alt="" /></a>
        <p>我的京东</p>
      </li>
      <li>
        <a href="#"><img src="../../assets/images/icon/nav4.png" alt="" /></a>
        <p>京东生鲜</p>
      </li>
      <li>
        <a href="#"><img src="../../assets/images/icon/nav5.png" alt="" /></a>
        <p>领券中心</p>
      </li>
      <li>
        <a href="#"><img src="../../assets/images/icon/nav6.png" alt="" /></a>
        <p>京东超市</p>
      </li>
      <li>
        <a href="#"><img src="../../assets/images/icon/nav7.png" alt="" /></a>
        <p>我的关注</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
ul {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  text-align: center;
  padding-bottom: .3rem;
  border-bottom: 1px solid #cccccc;
  background-color: #fff;
  li {
    width: 25%;
    a {
      display: inline-block;
      width: 0.8rem;
      height: 0.8rem; 
      img {
        width: 100%;
        vertical-align: middle;
      }
    }
    p {
      font-size: 0.24rem;
    }
  }
}
</style>