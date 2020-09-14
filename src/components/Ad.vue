<template>
    <div class="ad">
        <img src="../assets/images/log.jpg" alt="">
        <div class="content">
            <h2>爱上贵州，从黔游开始</h2>
            <span>来贵州，用黔游，自有黔友带你游</span>
        </div>
            <div class="btn">
                <button >打开App</button>
            </div>       
    </div>
</template>
<style lang="scss" scoped>
    .ad{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px; 
        height: 64px;
        box-sizing: border-box;
        z-index: 1;
        background: white;
        img{
            width: 44px;
            height: 44px;
        }
        .content{
            flex: 1;
            margin-left: 5px;
            h2{
                font-size: 17px;
                font-weight: 200;
            }
            span{
                font-size: 12px;
                color:#999;
            }
        }
        .btn{
            width: 80px;
            button{
                border-radius: 5px;
                width: 68px;
                height: 30px;
                background: #8d9196;
                color:white;
                border: none;
                font-size: 13px;
            }
        }
         
    }
</style>