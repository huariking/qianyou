<template>
    <div class="heard">        
        <span>
      <slot name="back"></slot>
    </span>
            <h2>黔游网</h2>
            <span class="iconfont">&#xe64f;</span>      
    </div>
</template>
<script>
import "@/assets/iconfont/iconfont.css";
export default {
    
}
</script>
<style lang="scss" scoped>
.heard{
     height: 40.5px;
    // background: #8d9196; 
    background: #888;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
     h2{
            font-size:18px;
            font-weight: 200;
            flex: 1;
            text-align: center;     
        }
        span{
            width: 40px;
        }
       
}
</style>