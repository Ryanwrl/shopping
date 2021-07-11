<template>
    <swiper>
        <swiper-item v-for="(item,index) in banners.list" :key="index">
            <a :href="item.link">
                <img :src="item.image" alt="" @load="imageLoad">
            </a>
        </swiper-item>
    </swiper>
</template>

<script>

import Swiper from 'components/common/swiper/Swiper.vue'
import SwiperItem from 'components/common/swiper/SwiperItem.vue'

export default {
    name:'HomeSwiper',
    components:{
        Swiper,
        SwiperItem
    },

    props:{
        banners:{
            // type:Array,
            default(){
                return []
            }
        }
    },
    
    data(){
        return {
            isLoad:false
        }
    },

    methods:{
        imageLoad(){
            if(!this.isLoad)
            {
                this.$emit("SwiperimgLoad");
                this.isLoad = true;
            }
        }
    }
    
}
</script>

<style scoped>
    
</style>