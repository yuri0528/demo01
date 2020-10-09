<template>
  <div class="item" @click="fn">
    <template v-if="!flag">
      <slot name="normalImg"></slot>
    </template>
    <template v-if="flag">
      <slot name="activeImg"></slot>
    </template>
    <p :class="{ active: flag }">{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: ["mark", "curr", "text"],
  computed: {
    flag() {
      //如果名字和当前选中的相同，表示被选中了
      if (this.mark == this.curr) {
        return true;
      }
      return false;
    },
  },
  methods: {
    fn() {
      //告诉父组件，当前点击的mark值是多少，让组件更新currnav
      this.$emit("change", this.mark);
      this.$router.push('/' + this.mark);
    },
  },
};
</script>

<style>
.item p {
  color: #898989;
}
.item p.active {
  color: #42bd56;
}
</style>