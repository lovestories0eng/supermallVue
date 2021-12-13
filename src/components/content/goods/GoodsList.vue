<template>
  <div class="goods">
    <goods-list-item v-for="item in goods" :key="item" :goods-item="item"></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "@/components/content/goods/GoodsListItem";
export default {
  name: "GoodsList",
  components: {
    GoodsListItem
  },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.goods {
  display: flex;
  /*根据宽度来显示*/
  flex-wrap: wrap;
  padding: 2px;
  /*均等分*/
  justify-content: space-around;
}

</style>
