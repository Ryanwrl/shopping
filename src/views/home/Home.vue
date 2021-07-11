<template>
    <div id="home">
        <!-- 顶部组件 -->
        <navbar class="home-nav">
            <div slot="center">购物街</div>
        </navbar>

        <!-- tabControl 复制一份隐藏在脱标的轮播图下，到达位置时显示-->
        <tab-control :title = "['流行', '新款', '精选']" 
                        @tabClick = "tabClick" 
                        ref="TabControlclone"
                        class="tab-control-show"
                        v-show="isTabfixed">
        </tab-control>

        <!--Better-scroll插件  -->
        <scroll class="content" 
                ref="scroll" 
                :probe-type = 3 
                :pulling-up-load = "true" 
                @scroll = "scrollContent"
                @pullingUp = "LoadMore">
            <!-- 轮播图 -->
            <home-swiper :banners="banners" @SwiperimgLoad = "SwiperimgLoad"></home-swiper>

            <!-- 推荐 -->
            <home-recommend :recommends = "recommends"></home-recommend>

            <!-- 本周流行 -->
            <feature-view></feature-view>
            
            <!-- tabControl -->
            <tab-control :title = "['流行', '新款', '精选']" 
                         @tabClick = "tabClick" 
                         ref="TabControl">
            </tab-control>
            
            <!-- 商品信息 -->
            <good-list :goods = "goods[currentType].list"></good-list>
        </scroll>
       
       <!-- backTop -->
       <back-top @click.native="backTop" v-show="isShow"></back-top>

    </div>
</template>

<script>
import {getHomeMultidata, getHomeData} from "network/home"

import HomeSwiper from './childComp/HomeSwiper.vue'
import HomeRecommend from "./childComp/HomeRecommend.vue"
import FeatureView from "./childComp/FeatureView.vue"

import Navbar from "components/common/Navbar/Navbar.vue"
import Scroll from "components/common/Scroll/Scroll.vue"
import TabControl from "components/content/tabControl/TabControl.vue"
import GoodList from "components/content/goods/GoodList.vue"
import BackTop from "components/content/backTop/BackTop.vue"

import {debounce} from "common/utils.js"

export default {
    name:'Home',
    components:{
        Navbar,
        HomeSwiper,
        HomeRecommend,
        FeatureView,
        TabControl,
        GoodList,
        Scroll,   
        BackTop,
        
    },

    data(){
        return{
            // result:null,
            banners:[],
            recommends:[],
            goods:{
                'pop': {page:0, list:[]},
                'new': {page:0, list:[]},
                'sell': {page:0, list:[]}
            },
            currentType: "pop",
            isShow:false,
            tabOffsetTop:0,
            isTabfixed:false,
            saveY:0
        }
    },

    created(){
        // 尽量只写业务逻辑，方法抽出到methods中
        // 请求多个数据
        this.getHomeMultidata()

        // 请求商品数据
        this.getHomeData('pop');
        this.getHomeData('new');
        this.getHomeData('sell');
    },

    mounted(){
        // 防抖措施，以免refresh频繁调用
        const refresh = debounce(this.$refs.scroll.refresh, 200)

         // 事件总线 图片加载完成
        this.$bus.$on('imageLoadDone',()=>{
            // 每张图片加载完，都refresh一次，以解决better-scroll的滚动bug 
            refresh()
        })

        
    },
    methods:{
        
        /*事件监听 */
        tabClick(index){
          switch (index) {
              case  0:
                  this.currentType = 'pop'
                  break;
          
              case  1:
                  this.currentType = 'new'
                  break;
            
              case  2:
                  this.currentType = 'sell'
                  break;
          }
          this.$refs.TabControlclone.currentIndex = index;
          this.$refs.TabControl.currentIndex = index;
          
        },


        /*网络请求 */
        getHomeMultidata(){
            getHomeMultidata().then(res =>{
            // console.log(res);
            // this.result = res;
            this.banners = res.data.banner;
            this.recommends = res.data.recommend;
        })
        },

        getHomeData(type){
            const page = this.goods[type].page + 1;
            getHomeData(type,page).then(res=>{
                // for(let item of res.data.list){
                //     this.goods[type].list.push(item)
                // }
                this.goods[type].list.push(...res.data.list);
                
                this.goods[type].page += 1;

                // 上拉finish
                this.$refs.scroll.scroll.finishPullUp()
        })
        },

        // 回到顶部
        backTop(){
            // console.log(this.$refs.scroll.scroll);
            this.$refs.scroll.scroll.scrollTo(0,0,500)
        },

        //监听滚动坐标
        scrollContent(position){
            // backtop是否显示
           this.isShow = (-position.y) > 1000;

            // tabcontrol是否fixed
           this.isTabfixed = (-position.y) > this.tabOffsetTop
        },

        // 上拉加载更多
        LoadMore(){
            // console.log(pullup);
            this.getHomeData(this.currentType)
        },

        // 轮播图的img加载完毕
        SwiperimgLoad(){
            this.tabOffsetTop = this.$refs.TabControl.$el.offsetTop;
        }
    },

    activated(){
        this.$refs.scroll.scroll.refresh();
        this.$refs.scroll.scroll.scrollTo(0,this.saveY,0);
    },

    deactivated(){
        this.saveY = this.$refs.scroll.scroll.y;
    }
    
}
</script>

<style scoped>
    #home{
        position: relative;
        
        height: 100vh;
    }
    .home-nav{
        position: relative;
        z-index: 99;
        background-color: var(--color-tint);
        color: #fff;
    }

    .tab-control-show{
        position: relative;
        z-index: 99;
    }

    .content{
        position: absolute;
        top: 44px;
        bottom: 44px;
        left: 0;
        right: 0;
    }
</style>