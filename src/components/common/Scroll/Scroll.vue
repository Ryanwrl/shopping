<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import BScroll from "better-scroll"
import Pullup from '@better-scroll/pull-up'
import ObserveDOM from '@better-scroll/observe-dom'
BScroll.use(ObserveDOM)
BScroll.use(Pullup)

export default {
    name:'scroll',
    data(){
        return{
            scroll : null
        }
    },

    props:{
        probeType:{
            type:Number,
            default:0
        },

        pullingUpLoad:{
            type:Boolean,
            default:false
        }
    },

    mounted(){
        this.initBscroll();
        
    },

    methods:{
        refresh()
        {
            // console.log('refresh');
            this.scroll.refresh()
        },

        initBscroll(){
            if (!this.$refs.wrapper) return
            this.scroll = new BScroll(this.$refs.wrapper,{
                click:true,
                observeDOM:true,
                mouseWheel:true,
                probeType:this.probeType,
                pullUpLoad:true,
                stopPropagation: true
            })

            this.scroll.on('scroll',position=>{
                this.$emit('scroll',position)
            })


            this.scroll.on('pullingUp',()=>{
                // console.log('pull');
                this.$emit('pullingUp')
            })
            
           
        }
    }

}
</script>

<style scoped>

</style>