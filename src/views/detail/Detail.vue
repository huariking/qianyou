<template>
  <div>
    <HeardTop>
      <template #back>
        <span class="iconfont" style="fontSize:35px" @click="back()">&#xe662;</span>
      </template>
    </HeardTop>
    <Ad></Ad>
    <div class="img">
      <img :src="item.img" alt />
    </div>

    <div class="des">
      <span class="price">￥{{item.price}}/人</span>
      <p>{{item.nm}}</p>
      <span class="gey">{{item.des}}</span>
      <span>{{item.day}}</span>
      <span>{{item.time}}</span>
      <span class="my">{{item.fell}}满意</span>
    </div>
    <div class="btn">
      <button>加入购物车</button>
      <button>立即预定</button>
      <button>与黔友组团</button>
    </div>
  </div>
</template>
<script>
import "@/assets/iconfont/iconfont.css";
import HeardTop from "@/components/HeardTop";
import Ad from "@/components/Ad";
export default {
  components: {
    HeardTop,
    Ad,
  },
  computed: {
    item() {
      return this.$route.query;
    },
  },
//   mounted() {
//     console.log(this.$route.query);
//   },
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
} ;
</script>

<style lang="scss" scoped>
@import "@/assets/style/mixin.scss";
.img {
  padding: 20px 0;
  height: 260px;
  @include border1px(rgb(185, 171, 171));
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
}
.des {
  @include border1px(rgb(185, 171, 171));
  padding: 8px;
  display: flex;
  flex-direction: column;
  p {
    margin-bottom: 8px;
    height: 40px;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    font-size: 18px;
    line-height: 20px;
    font-weight: 700;
    color: #333;
  }
  span {
    margin-bottom: 5px;
    font-size: 14px;
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
  .gey {
    color: #666;
  }
  .my {
    width: 65px;
    background: yellow;
    color: #999;
    border-radius: 2px;
    position: absolute;
    right: 10px;
    bottom: 10px;
  }
}
.btn {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  button {
    height: 35px;
    width: 85px;
    color: #fff;
    background: #ff9800;
    border: 1px solid pink;
    border-radius: 5px;
  }
}
</style>