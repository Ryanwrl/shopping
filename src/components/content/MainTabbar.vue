<template>
    <tabbar>
        <tabbar-item path='/home' activeColor='red'>
            <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
            <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt="">
            <div slot="item-text">首页</div>
         </tabbar-item>
        <tabbar-item path='/category' activeColor='red'>
            <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="">
            <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" alt="">
            <div slot="item-text">分类</div></tabbar-item>
        <tabbar-item path='/shopcar' activeColor='red'>
            <img slot="item-icon" src="~assets/img/tabbar/cart.svg" alt="">
            <img slot="item-icon-active" src="~assets/img/tabbar/cart_active.svg" alt="">
            <div slot="item-text">购物车</div></tabbar-item>
        <tabbar-item path='/profile' activeColor='red'>
            <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="">
            <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" alt="">
            <div slot="item-text">我的</div></tabbar-item>
    </tabbar>
    
</template>

<script>

import Tabbar from '../common/Tabbar/Tabbar';
import TabbarItem from '../common/Tabbar/TabbarItem';
export default {
    components:{
        Tabbar,
        TabbarItem
    }
}
</script>

<style scoped>

</style>