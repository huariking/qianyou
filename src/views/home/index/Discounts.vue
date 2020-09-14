<template>
  <div class="baoguo" ref="warp">
    <div class="discounts">
      <h3></h3>
      <swiper class="swiper" :options="swiperOption" :autoplay="3000">
          <swiper-slide>
          <img class="img" src="@/assets/images/12.jpg" alt />
        </swiper-slide>
        <swiper-slide>
          <img class="img" src="@/assets/images/10.jpg" alt />
        </swiper-slide>
        <swiper-slide>
          <img class="img" src="@/assets/images/1.jpg" alt />
        </swiper-slide>

        <swiper-slide>
          <img class="img" src="@/assets/images/11.jpg" alt />
        </swiper-slide>
      
        <swiper-slide>
          <img class="img" src="@/assets/images/13.jpg" alt />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <h2>特价推荐</h2>
      <div class="train">
        <div class="ad" v-for="(item,index) in recomlist" :key="index">
          <div class="tj">
            <img class="tp" @click="toDetail(item)" :src="item.img" alt />
            <div class="tag">观光游</div>
            <div class="tag-dep">贵阳出发</div>
          </div>
          <div class="des">
            <p>{{item.nm}}</p>
            <span>{{item.time}}</span>
            <span>
              <span>{{item.day}}</span>
              <span class="price">￥{{item.price}}起</span>
              <span>{{item.fell}}满意</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import "../../../../public/swiper-bundle.min.js";
import "../../../../public/swiper-bundle.min.css";
import BScroll from "@better-scroll/core";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { get } from "@/api/http";
export default {
  name: "swiper-example-pagination",
  title: "Pagination",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      recomlist: [],
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
        },
      },
    };
  },
  methods: {
    toDetail(item) {
      this.$router.push({ path: "/detail", query: item });
    },
    init() {
      this.bscroll = new BScroll(this.$refs.warp, {
        scrollY: true,
        click: true,
      });
    },
  },
  async created() {
    let rs = await get("/recommend.json");
    this.recomlist = rs.data.recomlist;
    // console.log(this.recomlist);
    this.$nextTick(() => {
      this.init();
    });
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/mixin.scss";
.baoguo {
  flex: 1;
  height: 100%;
  overflow: hidden;
  .discounts {
    overflow: hidden;
    .swiper {
      padding: 5px 0;
      // @include border1px(rgb(207, 202, 202));
    }
    .img {
      height: 180px;
      width: 370px;
      background-size: cover;
      img {
        height: 100%;
        width: 100%;
      }
    }
    h2 {
      font-size: 18px;
      padding: 5px;
    }

    .train {
      flex: 1;
      height: 100%;
      overflow: hidden;
      top: 3px;
      @include border1px(rgb(207, 202, 202));
      .ad {
        padding: 5px;
        @include border1px(rgb(207, 202, 202));
        display: flex;
        justify-content: center;
        .tj {
          height: 100px;
          width: 160px;
          background-size: cover;
          position: relative;
          .tp {
            height: 100px;
            width: 110px;
            position: relative;
            img {
              height: 100%;
              width: 100%;
            }
          }
          .tag {
            color: #fff;
            font-size: 12px;
            position: absolute;
            top: 0;
            line-height: 17px;
          }
          .tag-dep {
            bottom: 0;
            color: #fff;
            text-align: center;
            font-size: 12px;
            line-height: 18px;
            width: 80px;
            height: 18px;
            position: absolute;
            background-color: #c96;
          }
        }
        .des {
          padding: 8px;
          display: flex;
          // @include border1px(rgb(207, 202, 202));
          bottom:0;
          flex-direction: column;
    //        &::before {
    //   top: auto !important;
    //   bottom: 4px;
    // }
          p {
            margin-bottom: 8px;
            height: 40px;
            display: -webkit-box;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            font-size: 15px;
            line-height: 20px;
            font-weight: 700;
            color: #333;
          }
          span {
            margin-bottom: 5px;
            font-size: 12px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .price {
            margin-right: 2px;
            font-size: 18px;
            color: #ff8300;
            padding-right: 10px;
          }
        }
      }
    }
  }
}
</style>