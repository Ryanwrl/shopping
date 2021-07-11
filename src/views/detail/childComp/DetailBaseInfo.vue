<template>
    <div class="detail-base-info" v-if="Object.keys(goods).length !== 0">
        <div class="info-title">{{goods.title}}</div>
        <div class="info-price">
            <span class="nowPrice">￥{{goods.nowPrice}}</span>
            <span class="oldPrice">{{goods.oldPrice}}</span>
            <span class="discount" v-if="goods.discount">{{goods.discount}}</span>
        </div>
        <div class="info-about">
            <span>{{goods.columns[0]}}</span>
            <span>{{goods.columns[1]}}</span>
            <span>{{goods.services[goods.services.length - 1].name}}</span>
        </div>
        <div class="info-service">
            <span v-for="index in goods.services.length - 1" :key="index" class="info-service-body">
                <img :src="goods.services[index-1].icon" alt="">
                <span>{{goods.services[index-1].name}}</span>
            </span>
        </div>
        
        
    </div>
</template>

<script>
export default {
    name:'detail-base-info',
    props:{
        goods:{
            type:Object,
            default(){
                return {}
            }
        }
    }
}
</script>

<style scoped>
    .detail-base-info{
        border-bottom: 1px solid rgba(0, 0, 0, .1);
    }

    .info-title{
        padding: 10px;
        font-size: 18px;
        font-weight: 800;
        text-align: left;
    }
    .info-price{
        padding: 5px;
    }
    .nowPrice{
        font-size: 24px;
        color: var(--color-high-text);
        margin-right: 15px;
    }
    .oldPrice{
        font-size: 14px;
        text-decoration: line-through;
        color: #999;
        margin-right: 10px;
    }
    .discount{
        position: relative;
        top: -5px;
        background-color: var(--color-high-text);
        color: #fff;
        border-radius: 10px;
        padding: 5px;
    }
    .info-about{
        display: flex;
        justify-content: space-between;
        padding: 10px;
        
    }
    .info-about span{
        flex: 1; 
        color: #999;
    }
    
    .info-about :nth-child(2)
    {
        text-align: center;
    }

    .info-about :nth-child(3)
    {
        text-align: right;
    }

    .info-service{
        display: flex;
        justify-content: space-between;
        text-align: center;
        margin: 15px 0;
    }

    .info-service-body{
        flex: 1;
    }
    
     .info-service-body img{
        width: 15px;
        height: 15px;
    }

     .info-service-body span{
        margin-left: 5px;   
        color: #000;
        font-size: 14px;
    }

</style>