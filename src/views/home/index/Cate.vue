<template>
  <div class="food">
    <div class="foodlist">
      <div class="list" v-for="item in 6" :key="item">
        <img
          class="img"
          src="https://img.meituan.net/msmerchant/21294a17f78119446723f10048bd33664085811.jpg@320w_320h_1e_1c"
          alt
        />
        <div class="des">
          <p>金釜山烤肉海鲜</p>
          <!-- <span> -->
          <span class="price">￥52/人</span>
          <span>大山洞>100KM</span>
          <span>自助烧烤</span>
          <span>单人午餐59.9元</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { get } from "@/api/http";
export default {
  methods: {
    async getfoodlist() {
      let res = await get("/food.json");
      console.log(res);
    },
  },
};
</script>
<style lang="scss" scoped>
.food {
  .foodlist {
    display: flex;
    flex-wrap: wrap;
    .list {
      padding-bottom: 25px;
      width: 185px;

      align-items: center;
      display: flex;
      flex-direction: column;
      .img {
        width: 130px;
        height: 135px;
      }
      .des {
        display: flex;
        flex-direction: column;

        p {
          font-size: 16px;
          height: 26px;
          line-height: 26px;
          color: #333333;
          // letter-spacing: 0.28px;
          font-weight: 500;
          // overflow: hidden;
          // text-overflow: ellipsis;
          // white-space: nowrap;
        }
        span {
          font-size: 12px;
          height: 16px;
          margin: 3px 0;
          line-height: 16px;
          color: #999;
        }
        .price {
          color: #faaf00;
        }
      }
    }
  }
}
</style>