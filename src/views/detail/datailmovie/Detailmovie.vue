<template>
  <div class="detail">
    <HeardTop>
      <template #back>
        <van-icon name="arrow-left" @click="back()" />
      </template>
      详情页面
    </HeardTop>

    <div class="desc">
      <!-- <img :src="item.img |wh('110.150')" alt /> -->
      <div>
        <h2>{{item.nm}}</h2>
        <p>{{item.showInfo}}</p>
        <p>{{item.star}}</p>
      </div>
    </div>
  </div>
</template>


<script>
import HeardTop from "@/components/HeardTop";
import { post } from "@/api/http";

export default {
  components: {
    HeardTop,
  },
  computed: {
    item() {
      return this.$route.query;
    },
  },
  mounted() {
    console.log(this.$route.query);
  },

  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" >
.detail {
  .van-icon-arrow-left::before {
    font-size: 20px;
  }
  .desc {
    padding: 15px;
    display: flex;
  }

  .bar {
    position: relative;
    height: 50px;
    overflow: hidden;
    ul {
      position: absolute;
      top: 0px;
      transition: all 1s;
      /* display: flex; */
      overflow: scroll;
      white-space: nowrap;
      li {
        width: 125px;
        display: inline-block;
        line-height: 43px;
        text-align: center;
      }
    }

    .active {
      position: relative;
      &::after {
        content: "";
        position: absolute;
        bottom: 0px;
        height: 2px;
        left: 0px;
        background: red;
        width: 115px;
      }
    }
  }
}
</style>


