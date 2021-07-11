<template>
    <div class="home-recommend">
        <ul class="recommend-ul">
            <li v-for="(item, index) in recommends.list" :key="index" class="recommend-li">
                <a :href="item.link">
                    <img :src="item.image" alt="">
                    <div>{{item.title}}</div>
                </a>
                
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'homeRecommend',
    props:{
        recommends:{
            // type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style scoped>
    .home-recommend{
        padding: 10px;
        padding-bottom: 20px;
        border-bottom: 10px solid #eee;
    }
    .recommend-ul{
        display: flex;
        
    }
    .recommend-li{
        flex: 1;
        list-style: none;
        text-align: center;
        margin:3px 3px;
        font-size: 16px;
        
    }
    img{
        width: 100%;
        margin-bottom: 5px;
    }
</style>

