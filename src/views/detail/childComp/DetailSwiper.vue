<template>
    <swiper class="detail-swiper">
        <swiper-item v-for="item in images" :key="item">
            <img :src="item" alt="">
        </swiper-item>
    </swiper>
</template>

<script>
import Swiper from 'components/common/swiper/Swiper.vue'
import SwiperItem from 'components/common/swiper/SwiperItem.vue'

export default {
    name:"detailSwiper",
    components:{
        Swiper,
        SwiperItem
    },
    props:{
        images:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style scoped>
    .detail-swiper{
        height: 450px;
        overflow: hidden;
    }
    .detail-swiper img{
        width: 100%;
        height: 100%;
    }
</style>