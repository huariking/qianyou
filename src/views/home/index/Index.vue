<template>
  <div class="indexContainer">
    <Ad></Ad>
    <ul class="nav">
      <router-link tag="li" class="city" to="/city">{{$store.state.city.name}}</router-link>
      <router-link tag="li" active-class="active" to="/home/index/Discounts">
        <span class="iconfont" style="color: #e62c">&#xe62c;</span>
        特惠
      </router-link>
      <router-link tag="li" active-class="active" to="/home/index/Hotel">
        <span class="iconfont" style="color: #f4ea2a">&#xe645;</span>
        酒店
      </router-link>
      <router-link tag="li" active-class="active" to="/home/index/Play">
        <span class="iconfont" style="color: #1296db">&#xe646;</span>
        娱乐
      </router-link>
      <router-link tag="li" active-class="active" to="/home/index/Attractions">
        <span class="iconfont" style="color: #13227a">&#xeb55;</span>
        景点
      </router-link>
      <router-link tag="li" active-class="active" to="/home/index/Cate">
        <span class="iconfont" style="color: #fd9d21">&#xe66c;</span>
        美食
      </router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>
import "@/assets/iconfont/iconfont.css";
import Ad from "@/components/Ad";
export default {
  components: {
    Ad,
  },
};
</script>
// <style lang="scss" scoped>
@import "@/assets/style/mixin.scss";
.indexContainer {
  flex: 1;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .nav {
    z-index: 1;
    @include border1px(#333);
    background: white;
    display: flex;
    height: 54px;
    li {
      flex: 1;
      list-style: none;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      height: 54px;
      font-size: 14px;
      color: #666;
      span {
        font-size: 18px;
      }
    }
    .city {
      position: relative;
      &::before {
        content: "";
        position: absolute;
        right: 0;
        top: 20px;
        border: 4px solid transparent;
        border-top: 4px solid #666;
        width: 0;
      }
    }
    .classmovie {
      flex: 1.2;
    }
    .active {
      font-size: 16px;

      color: rgb(233, 71, 7);
      position: relative;
      &::after {
        content: "";
        position: absolute;
        bottom: 1px;
        left: 50%;
        width: 25px;
        height: 2px;
        background: #f03d37;
        transform: translateX(-50%);
      }
    }
  }
}
</style>