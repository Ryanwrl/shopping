<template>
    <div class="detail-shop-info" v-if="Object.keys(shop).length !== 0">
        <div class="shop-info-base">
            <img :src="shop.logo" alt="">
            <span class="shop-name">{{shop.name}}</span>
        </div>

        <div class="shop-info-about">
            <div class="shop-sell">
                <div class="total-sell">
                    <div>{{shop.sells | sellsCount}}</div>
                    总销量
                </div>
                <div class="total-goods">
                    <div>{{shop.goodsCount}}</div>
                    全部宝贝
                </div>
            </div>
            <div class="shop-score">
                <table>
                    <tr v-for="(item, index) in shop.score" :key="index">
                        <td>{{item.name}}</td>
                        <td class="low" :class="{'high': item.isBetter}">{{item.score}}</td>
                        <td class="lowlogo" :class="{'highlogo': item.isBetter}"><span>{{item.isBetter ? '高':'低'}}</span></td>
                    </tr>
                </table>
            </div>
        </div>

        <div class="shop-info-come">
            进店逛逛
        </div>
    </div>
</template>

<script>
export default {
    name:'detail-shop-info',
    props:{
        shop:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    filters:{
        sellsCount:function(value){
            if (value < 10000) return value;
            return (value / 10000).toFixed(1) + "万"
        }
    }
}
</script>

<style scoped>
    .detail-shop-info{
        border-bottom: 1px solid rgba(0, 0, 0, .1);
    }

    .shop-info-base{
        padding: 15px;
        margin-top: 10px;
    }

    .shop-info-base img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 1px solid #ccc;
        vertical-align:middle;
    }
    
    .shop-name{
        margin-left: 15px;
        font-size: 16px;
        
    }

    .shop-info-about{
        display: flex;
        height: 100px;
        width: 100%;
        text-align: center;
    }
    
    .shop-sell{
        flex: 1;
        position: relative;
        display: flex;
    }

    .shop-sell::after{
        content: "";
        position: absolute;
        right: 0;
        height: 50%;
        width: 1px;
        background-color: rgba(0, 0, 0, .1);
    }
    
    .total-sell,
    .total-goods{
        flex: 1;
        color: black;
    }

    .total-sell div,
    .total-goods div{
        font-size: 20px;
        font-weight: 600;
        padding: 10px;
    }

    .shop-score{
        flex: 1; 
        margin-left: 15px;
        
    }
    
    .shop-score table{
        border-spacing: 5px;
    }

    .shop-score table td
    {
        padding: 3px;
    }

    .low{
        color: limegreen;
    }

    .high{
        color: red;
    }

    .shop-score table .lowlogo{
        background-color: limegreen;
        color: #fff;
        padding: 0;
    }
    
    .shop-score table .highlogo{
        background-color: red;
    }
    
    .shop-info-come{
        margin: 0 auto;
        width: 150px;
        height: 50px;
        line-height: 50px;
        background-color: rgb(245, 238, 238);
        text-align: center;
        border-radius: 20px;
        margin-bottom: 20px;
    }
</style>