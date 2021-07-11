<template>
   <div class="good-list">
       <good-item v-for="(item,index) in goods" :key="index" :list = "item"></good-item>
   </div>
</template>

<script>
import GoodItem from './GoodItem.vue'

export default {
    name:'goodlist',
    components:{
        GoodItem
    },
    props:{
        
        goods:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style scoped>
    .good-list{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
</style>