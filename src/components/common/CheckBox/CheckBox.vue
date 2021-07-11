<template>
    <div class="check-box" :class="{check:this.$store.state.cartList[0].check}" @click="clickCheck">
        <img src="~assets/img/cart/tick.svg" alt="">
    </div>
</template>

<script>
export default {
    name:'check-box',
    props:{
        product:{
            type:Object,
            default(){
                return {}
            }
        },
    },
    data(){
        return{
            info:this.product,
        }
    },

    watch:{
        product(newvalue)
        {
            this.info = newvalue
        }
    },

    methods:{
        clickCheck(){
            console.log(this.info.check);
            // console.log(this.$store.state.cartList[0].check);
        
            this.$store.commit("checkToggle",this.info.iid)

            // this.isActive = !this.isActive

        }
    },
   

}
</script>

<style scoped>
    .check-box{
        border-radius: 50%;
        border: 2px solid #ccc;
    }

    .check{
        background-color: var(--color-tint);
    }
</style>