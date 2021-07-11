<template>
    <div class="detail">
        <!-- navbar -->
        <detail-nav-bar class="detail-nav-bar" @NavIndex = "getIndex" ref="detailNav"></detail-nav-bar>

        <scroll class="content"
                ref="scrolll"
                @scroll = "ContentScroll"
                :probe-type = 3
                >
            <!-- 轮播图 -->
            <detail-swiper :images = topImages ></detail-swiper>
                    
            <!-- 商品基本信息 -->
            <detail-base-info :goods = goods></detail-base-info>

            <!-- 商家信息 -->
            <detail-shop-info :shop = shop></detail-shop-info>

            <!-- 商品图片 -->
            <detail-goods-info :detailinfo = detailinfo @DetailImgLoad = "DetailImgLoad"></detail-goods-info>

            <!-- 参数 -->
            <detail-param-info :paramInfo = detailparam ref="param"></detail-param-info>

            <!-- 商品评论 -->
            <detail-comment-info :commentInfo = detailcomment ref="comment"></detail-comment-info>

            <!-- 商品推荐 -->
            <good-list :goods = recommend ref="recommend"></good-list>

        </scroll>

            <!-- 底部 -->
            <detail-bottom-bar class="detail-bottom-nav" @addToCart = "addToCart"></detail-bottom-bar>

            <!-- backtop -->
            <back-top @click.native="backTop" v-show="isShow"></back-top>

            
    </div>
</template>

<script>
import DetailNavBar from './childComp/DetailNavBar.vue';
import DetailSwiper from './childComp/DetailSwiper.vue';
import DetailBaseInfo from './childComp/DetailBaseInfo.vue';
import DetailShopInfo from './childComp/DetailShopInfo.vue';
import DetailGoodsInfo from './childComp/DetailGoodsInfo.vue';
import DetailParamInfo from './childComp/DetailParamInfo.vue';
import DetailCommentInfo from './childComp/DetailCommentInfo.vue';
import DetailBottomBar from './childComp/DetailBottomBar.vue';

import Scroll from "components/common/Scroll/Scroll.vue"
import GoodList from 'components/content/goods/GoodList.vue';
import BackTop from 'components/content/backTop/BackTop.vue';

import {debounce} from 'common/utils.js'

import {getDetail,Goods,Shop,GoodsParam,getRecommend} from 'network/detail.js'




export default {
    name:'detail',
    components: { DetailNavBar, DetailSwiper, DetailBaseInfo, DetailShopInfo, Scroll, DetailGoodsInfo, DetailParamInfo, DetailCommentInfo, GoodList, DetailBottomBar, BackTop },
    data(){
        return{
            iid:null,
            topImages:[],
			goods:{},
            shop:{},
            detailinfo:{},
            detailparam:{},
            detailcomment:{},
            recommend:[],
            themeTopYs:[],
            getThemeTopYs:null,
            imageRefresh:null,
            currentIndex:0,
            isShow:false,

        }
    },

    created(){
        // 获得id
        this.iid = this.$route.params.iid;

        // 根据id请求数据
        getDetail(this.iid).then(res => {
            // console.log(res);

            //获得轮播图图片
            this.topImages = res.result.itemInfo.topImages;
						
            //获取商品基本信息
            this.goods = new Goods(res.result.itemInfo, res.result.columns, res.result.shopInfo.services)

            // 获取商家信息
            this.shop = new Shop(res.result.shopInfo)

            // 商品图片
            this.detailinfo = res.result.detailInfo

            // 商品尺码
            this.detailparam = new GoodsParam(res.result.itemParams.info,res.result.itemParams.rule)

            // 商品评论
            if(res.result.rate.cRate !== 0)
            {
                this.detailcomment = res.result.rate.list[0]
            }

        })			
        ,

        // 请求recommend
        getRecommend().then(res =>{
            // console.log(res);
            this.recommend = res.data.list

        }),

        //坐标防抖
        this.getThemeTopYs = debounce(() =>{
                this.themeTopYs = []
                this.themeTopYs.push(0)
                this.themeTopYs.push(this.$refs.param.$el.offsetTop)
                this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
                this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
                this.themeTopYs.push(Number.MAX_SAFE_INTEGER)
                // console.log(this.themeTopYs);
            },100)

        //图片刷新防抖
        this.imageRefresh = debounce(()=>{
                this.$refs.scrolll.refresh();   
            },100)

    },

    methods:{
        DetailImgLoad(){
            // console.log('1');
            this.imageRefresh()
        
            this.getThemeTopYs()

        },
        getIndex(index){

            this.$refs.scrolll.scroll.scrollTo(0,-this.themeTopYs[index],300)
        },
        
        ContentScroll(position)
        {
            // backtop是否显示
           this.isShow = (-position.y) > 1000;

            let positionY = -position.y
            
            for (let i = 0; i < (this.themeTopYs.length - 1); i++) {
                if(this.currentIndex !== i && (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1]))
                {
                    this.currentIndex = i;
                    this.$refs.detailNav.currentIndex = this.currentIndex;
                }
            }
        },

        // 回到顶部
        backTop(){
            this.$refs.scrolll.scroll.scrollTo(0,0,500)
        },

        // 加入购物车
        addToCart(){
            const product = {
                image : this.topImages[0],
                title : this.goods.title,
                price : this.goods.nowPrice,
                desc : this.goods.desc,
                iid : this.iid,
            }

            this.$store.dispatch("setCateGoryData", product);

            // console.log(this.$store.state.cartList);
        }
    }
}
</script>

<style scoped>
    .detail{
        position: relative;
        z-index: 1;
        background-color: #fff;
        height: 100vh;
    }

    .detail-nav-bar{
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 99;
        background-color: #fff;
        
    }

    .content{
        position: absolute;
        top: 44px;
        bottom: 60px;
    }

     

   
</style>