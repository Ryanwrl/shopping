<template>
  <div class="cart">
    
    <!-- 导航 -->
    <navbar class="nav-bar">
      <div slot="center">
        购物车(
        <span>{{ cartLength }}</span>
        )
      </div>
    </navbar>

    <!-- 购物车列表 -->
    <cart-list />

    
  </div>
</template>

<script>
import Navbar from 'components/common/Navbar/Navbar.vue';
import CartList from "./children/CartList";
import { mapGetters } from "vuex";


export default {
  name: "Cart",
  computed: {
    // 对象写法可以自己命名
    ...mapGetters({
      cartLength: "cartListLength"
    })
  },
  components: { CartList, Navbar }
};
</script>

<style scoped>
.nav-bar {
  font-weight: 600;
  color: white;
  background-color: #ff8198;
}
</style>
