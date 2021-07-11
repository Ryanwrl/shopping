<template>
    <div class="tab-control">
        <div class="tab-control-item" v-for="(item ,index) in title" :key="index" @click="changeIndex(index)" :class="{active:index == currentIndex}">
            <span>
                {{item}}
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name:'tabControl',

    props:{
        title:{
            type:Array,
            default(){
                return []
            }
        }
    },

    data(){
        return{
            currentIndex:0,
            isActive:false
        }
    },

    methods:{
        changeIndex(index){
            this.currentIndex = index
            this.$emit("tabClick",index)
        }
    }
}
</script>

<style scoped>
    .tab-control{
        display: flex;
        background-color: #fff;
    }
    .tab-control-item{
        flex: 1;
        text-align: center;
        height: 44px;
        line-height: 44px;
    }

    .active{
        color: var(--color-high-text);
      
    }

    .active span{
        padding-bottom: 3px;
        border-bottom: 3px solid var(--color-high-text);
    }
</style>