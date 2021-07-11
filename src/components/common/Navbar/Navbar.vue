<template>
    <div class="navbar">
        <div class="left" ><slot name="left"></slot></div>
        <div class="center" ><slot name="center"></slot></div>
        <div class="right" ><slot name="right"></slot></div>
       
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

    .navbar{
        display: flex;
        height: 44px;
        line-height: 44px;
        text-align: center;
        box-shadow: 1px 1px 5px rgba(0, 0, 0, .1);
    }

    .left{
        width: 60px;
        
    }

    .right{
        width: 60px;
        
    }

    .center{
        flex: 1;
        
    }
</style>