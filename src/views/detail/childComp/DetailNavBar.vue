<template>
    <div class="detail-nav-bar">
        <navbar>
            <div slot="left" class="back" @click="backToHome">
                <img src="~assets/img/common/back.svg" alt="">
            </div>


            <div slot="center" class="detail-center">
                <div v-for="(item,index) in title" 
                    :key="item" class="detail-center-item" 
                    @click="changeIndex(index)" 
                    :class="{active:(index == currentIndex)}">{{item}}</div>
            </div>
        </navbar>
    </div>
</template>

<script>
import Navbar from 'components/common/Navbar/Navbar.vue'


export default {
    components: { Navbar },
    data(){
        return{
            title:['商品','参数','评论','推荐'],
            currentIndex:0
        }
    },
    methods:{
        changeIndex(index)
        {
            this.currentIndex = index;
            this.$emit('NavIndex',index)
        },
        backToHome(){
            this.$router.back();
        }
    }
}
</script>

<style scoped>
    .detail-center{
        display: flex;
    }

    .detail-center-item{
        flex: 1;
        font-size: 16px;
    }

    .back{
        margin-top: 5px;
    }

    .active{
        color: var(--color-tint);
    }
</style>