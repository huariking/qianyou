<template>
<div class="content">
    <div class="cityContainer" ref="wrap">
        <section id="city-list" class="city-list-container">
            <!-- <section>
                <div id="locate" class="city-title">
                定位城市
                </div>
                <div class="city-list city-list-inline clearfix">
                <div class="location-city">定位失败，请点击重试</div>
                </div>
            </section> -->
            <section class="history-city-list">
                <div id="history" class="city-title">
                最近访问城市
                </div>
                <div class="city-list city-list-inline clearfix">

                <div class="city-item"  data-id="643">
                    {{$store.state.city.name}}
                </div>
                </div>
            </section>
            <section>
                <div id="hot" class="city-title">
                省内热门城市
                </div>
                <div class="city-list city-list-inline clearfix">
                    <div v-for="city in datalist.hotCities"  @click="selectCity(city)" :key="city.id" class="city-item">
                    {{city.name}}
                    </div>
                </div>
            </section>
            <section>
                <div v-for="(items,key) in datalist.cities" :key="key">
                    <div :id="key" class="city-title city-title-letter" >
                        {{key}}
                    </div>
                    <div class="city-list city-list-block clearfix"  >
                        <div v-for="(city,index) in items"  :key="index" @click="selectCity(city)" class="city-item" >
                        {{city.name}}
                        </div>
                    </div>
                </div>
            </section>

        </section>
    </div>
    <section class="nav">
            <!-- <div class="  nav-item" @click="go('locate')">
            定位
            </div> -->
            <div class="  nav-item" @click="go('history')">
            最近
            </div>
            <div class="  nav-item" @click="go('hot')">
            省内
            </div>
            <div class="nav-letter  nav-item" v-for="l in getLetters" :key="l" :ref="l" @touchmove="move">
            {{l}}
            </div>
    </section>
</div>
</template>

<script>
import BScroll from "@better-scroll/core"
import {get} from '@/api/http'
export default {
    data(){
        return{
            datalist:{                
                hotCities:[],
                cities:[]
            }
        }
    },
    computed:{
        getLetters(){
            return Object.keys(this.datalist.cities) 
        }
    },
    methods:{
        selectCity(city){
            this.$store.commit('setCity',city)
            this.$router.go(-1)
        },
        move(event){
            let currentY = event.touches[0].pageY;
            let aTop = this.$refs.A[0].getBoundingClientRect().top;
            let letterHeight = this.$refs.A[0].getBoundingClientRect().height;
            let span = currentY - aTop;
            let index = Math.floor(span/letterHeight);
            let letter =  this.getLetters[index];
            if(letter){              
                this.bscroll.scrollToElement(document.querySelector('#'+letter),200)
            }
        },
        init(){
            this.bscroll = new BScroll(this.$refs.wrap,{
                scrollY:true,
                click:true
            })
        },
        go(position){
            this.bscroll.scrollToElement(document.querySelector('#'+position),500)
        }
    },
    async created(){
        let rs = await get('/cities.json')
        this.datalist = rs.data
        this.$nextTick(()=>{
            this.init();
        })
    }
}
</script>

<style lang="scss" scoped>

.content{
    height: 100%;
    overflow: hidden;
    .cityContainer{
    height:100%;
    overflow:hidden;
    }
}
    
    .city-list-container {
    background-color: #ebebeb;
    font-size: 14px;
    color: #333;
    width: 100%;
    }

    .clearfix:after {
    content: " ";
    display: table;
    clear: both;
    }

    .city-title {
    padding-left: 15px;
    line-height: 30px;
    }

    .city-title-letter {
    padding-left: 25px;
    }

    .city-list {
    padding-right: 30px;
    }

    .city-list-inline {
    background-color: #f5f5f5;
    padding-bottom: 8px;
    }

    .city-list-inline .city-item,
    .city-list-inline .location-city {
    float: left;
    background: #fff;
    width: 29%;
    height: 33px;
    margin-top: 15px;
    margin-left: 4%;
    padding: 0 4px;
    border: 1px solid #e6e6e6;
    border-radius: 3px;
    line-height: 33px;
    text-align: center;
    box-sizing: border-box;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    }

    .city-list-inline .location-city {
    width: auto;
    min-width: 30%;
    padding: 0 20px;
    }

    .city-list-block {
    background-color: #f5f5f5;
    }

    .city-list-block .city-item {
    height: 44px;
    line-height: 44px;
    margin-left: 15px;
    border-bottom: 1px solid #c8c7cc;
    }

    .city-list-block .city-item:last-child {
    border-bottom: none;
    }

    .nav {
    position: fixed;
    top: 75px;
    top: 11vh;
    right: 0;
    width: 35px;
    z-index: 10;
    text-align: center;
    font-size: 12px;
    }

    .nav .nav-item {
    height: 16px;
    height: 2.8vh;
    }

    .nav .nav-letter {
    width: 15px;
    margin-left: 15px;
    }
</style>