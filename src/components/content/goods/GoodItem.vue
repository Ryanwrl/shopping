<template>
    <div class="good-item">
      
        <img v-lazy="showImage" @load="imageLoad" @click="itemClick">
        <p class="intro">{{list.title}}</p>
        <div class="good-item-detail">
            <span class="price">￥{{list.price}}</span>
        
            <span class="collect">{{list.cfav}}</span>
        </div>
     
    </div>
</template>

<script>

export default {
    name:'gooditem',
    props:{
        list:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    computed:{
        showImage(){
            return this.list.image || this.list.show.img
        }
    },

    methods:{
        // 事件总线 记录图片是否加载完成
        imageLoad(){
            this.$bus.$emit('imageLoadDone')
        },

        // 点击图片 进入详情页
        itemClick(){
            this.$router.push("/detail/" + this.list.iid)
        }
    }
}
</script>


<style scoped>

    
    .good-item{
        width: 45%;
        padding-bottom: 25px;
    }

    .good-item img{
        width: 100%;
        border-radius: 10px;
    }

    .intro{
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        margin-bottom: 5px;
    }

    .good-item-detail{
        position: relative;
    }
    .good-item-detail .price{
        position: absolute;
        left: 0;

        color: var(--color-high-text);
    }

    .good-item-detail .collect{
        position: absolute;
        right: 0;
    }

    .good-item-detail .collect::before{
        position: relative;
        right: 0;
        bottom: 2px;
        content: "⭐";
        
        
    }
</style>