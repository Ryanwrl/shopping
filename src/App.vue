<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
    
    <main-tabbar></main-tabbar>
  </div>
</template>

<script>
import MainTabbar from './components/content/MainTabbar.vue'

export default {
  components: { MainTabbar },
  name:'App',
  component:{
    MainTabbar
  }
}


</script>


<style>
  @import "./assets/css/base.css"
</style>
