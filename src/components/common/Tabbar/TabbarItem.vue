<template>
    <div class="tab-bar-item" @click="itemClick">
        <!-- <img src="../../assets/img/tabbar/shouye.svg" alt="">
        <div>首页</div> -->
        <!-- 用div包裹，以免内部slot被替换，使v-if v-bind被替换 -->
        <div v-if="!isActive"><slot name="item-icon"></slot></div>
        <div v-else><slot name="item-icon-active" ></slot></div>
        <div :style="activeStyle"><slot name="item-text" ></slot></div>
        
    </div> 
</template>

<script>
export default {
    name:'TabbarItem',
    data(){
        return {
            // isActive:false,
        }
    },
    props:{
        path:String,
        activeColor:{
            type:String,
            default:'red'
        }
    },
    computed:{
        isActive(){
            // if(this.$route.path == this.path)
            //     return true;
            // else
            //     return false;

            return this.$route.path.indexOf(this.path) != -1;
        },
        activeStyle(){
            return this.isActive?{color:this.activeColor}:{}
        }
    },
    methods:{
        itemClick(){
            this.$router.replace(this.path).catch(err=>err)
            
        }
    }
}
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tab-bar-item img{
      width: 24px;
      height: 24px;
      margin-top: 3px;
      vertical-align: middle;
      margin-bottom: 2px;
  }

  
</style>