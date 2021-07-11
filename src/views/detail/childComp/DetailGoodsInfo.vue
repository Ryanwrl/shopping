<template>
    <div class="detail-goods-info" v-if="Object.keys(detailinfo).length !== 0">
        <div class="start"></div>
        <div class="goods-desc">{{detailinfo.desc}}</div>
        <div class="end"></div>

        <div class="goods-key">{{detailinfo.detailImage[0].key}}</div>

        <div class="goods-image">
            <div v-for="item in detailinfo.detailImage[0].list" :key="item" class="goods-image-item">
                <img :src="item" alt="" @load="DetailImgLoad">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'detail-goods-info',
    props:{
        detailinfo:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    data(){
        return{
            count:0,
        }
    },
    methods:{
        DetailImgLoad(){
            this.$emit('DetailImgLoad')
        }
    }

}
</script>

<style scoped>
    .goods-desc{
        padding: 25px;
    }

    .start,
    .end{
        width: 90px;
        height: 1px;
        background-color: #a3a3a5;
        position: relative;
    }

    .start{
        float: left;
    }

    .end{
        float: right;
    }

    .start::before,
    .end::after{
        content: '';
        position: absolute;
        width: 5px;
        height: 5px;
        background-color: #333;
        bottom: 0;
    }

     .end::after{
         right: 0;
     }

    .goods-key{
        margin: 10px 0;
        text-align: center;
        font-size: 16px;
        color: #333;
        
    }

    .goods-image-item{
        width: 100%;
    }

    .goods-image-item img{
        width: 100%;
        height: 100%;
    }
</style>