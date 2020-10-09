<template>
  <div class="listWrap">
    <div class="text">
      <h4>{{ title }}</h4>
      <p>{{ text }}</p>
      <span>作者：{{ name }}</span>
    </div>
    <div class="img">
        <img :src="imgSrc" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["imgSrc", "title", "text", "name"],
};
</script>

<style lang="less">
.listWrap{
    display: flex;
    padding: 0.5rem 0.2rem;
    border-bottom: 1px solid #cccccc;
    .text{
        flex: 2;
        h4{
            font-size: 0.3rem;
            color: #666e77;
        }
        p{
            font-size: 0.3rem;
            padding: .1rem 0;
            color: #999;
        }
        span{
            font-size: 0.14rem;
            color: #c9c9c9;
        }
    }
    .img{
        flex: 1;
        img{
            width: 100%;
        }
    }
}

</style>