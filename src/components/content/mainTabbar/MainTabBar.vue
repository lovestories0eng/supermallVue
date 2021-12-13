<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="red">
      <template v-slot:item-icon>
        <img src="@/assets/img/tabbar/home.svg" alt="" style="">
      </template>
      <template v-slot:item-icon-active>
        <img src="@/assets/img/tabbar/home_active.svg" alt="">
      </template>
      <template v-slot:item-text>
        <i>首页</i>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="red">
      <template v-slot:item-icon>
        <img src="@/assets/img/tabbar/category.svg" alt="">
      </template>
      <template v-slot:item-icon-active>
        <img src="@/assets/img/tabbar/category_active.svg" alt="">
      </template>
      <template v-slot:item-text>
        <i>分类</i>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="red">
      <template v-slot:item-icon>
        <img src="@/assets/img/tabbar/shopcart.svg" alt="">
      </template>
      <template v-slot:item-icon-active>
        <img src="@/assets/img/tabbar/shopcart_active.svg" alt="">
      </template>
      <template v-slot:item-text>
        <i>购物车</i>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="red">
      <template v-slot:item-icon>
        <img src="@/assets/img/tabbar/profile.svg" alt="">
      </template>
      <template v-slot:item-icon-active>
        <img src="@/assets/img/tabbar/profile_active.svg" alt="">
      </template>
      <template v-slot:item-text>
        <i>我的</i>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar  from "@/components/common/tabbar/TabBar";
import TabBarItem from "@/components/common/tabbar/TabBarItem";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>
