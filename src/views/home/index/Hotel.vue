<template>
  <div class="hotelWai" ref="top">
    <div class="hotelNei" ref="top">
      <div class="hotel" v-for="(item,index) in hotelStar" :key="index">
        <div class="img-wrapper">
          <img class="img" :src="item.frontImg | wh('126.115')" />
        </div>
        <div class="wrapper">
          <h1 class="title">{{item.name}}</h1>
          <div>
            <span class="score">{{item.scoreIntro}}</span>
            <span class="feedback">{{item.poiSaleAndSpanTag}}</span>
          </div>
          <div>
            <span class="address">{{item.posdescr}}</span>
          </div>
          <div class="cow">
            <span class="price">
              ¥
              <em class="price-num">{{item.originalPrice}}</em>起
            </span>
            <span class="bought">{{item.poiLastOrderTime}}</span>
          </div>
          <div>
            <span class="is-danger">订</span>
            <span class="is-blue">安心住</span>
            <span class="is-blue">超级团购</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from "@better-scroll/core";
import { get } from "@/api/http";
export default {
  data() {
    return {
      hotelStar: [],
    };
  },
  methods: {
    init() {
      this.bscroll = new BScroll(this.$refs.top, {
        scrollY: true,
        click: true,
      });
    },
    async getHotelList() {
      let rs = await get("/hotel.json");
      // console.log(rs);
      this.hotelStar = rs.data.data.searchresult;
      // console.log(rs.data.data.searchresult);
      this.$nextTick(() => {
        this.init();
      });
    },
  },
  created() {
    this.getHotelList();
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/mixin.scss";
.hotelWai {
  flex: 1;
  height: 100%;
  overflow: hidden;
  .hotelNei {
    overflow: hidden;
    .hotel {
      @include border1px(rgb(207, 202, 202));
      padding: 5px;
      height: 115px;
      display: flex;
      .img-wrapper {
        width: 126px;
        height: 115px;
        margin: 5px;
        img {
          width: 126px;
          height: 115px;
          background-size: cover;
        }
      }
      .wrapper {
        margin: 0 5px;
        // flex: 1;
        display: flex;
        flex-direction: column;
        span {
          font-size: 12px;
          color: #999999;
          margin: 5px;
        }
        .title {
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          width: 240px;
          height: 32px;
          font-size: 18px;
          font-weight: 200;
        }
        .score {
          color: #f9504c;
        }
        .cow {
          display: flex;
          justify-content: space-between;
          .price {
            color: #f9504c;
            .price-num {
              font-size: 16px;
            }
          }
        }

        .is-blue {
          border-color: #569cea;
          color: #569cea;
        }
        .is-danger {
          border-color: #f5716e;
          color: #f5716e;
        }
      }
    }
  }
}
</style>