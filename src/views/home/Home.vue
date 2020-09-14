<template>
  <div class="con">
    <HeardTop></HeardTop>
    <div class="main">
      <router-view></router-view>
    </div>
    <ul class="nav">
      <router-link tag="li" active-class="active" to="/home/index">
        <span class="iconfont">&#xe659;</span>首页
      </router-link>
      <router-link tag="li" active-class="active" to="/home/friends">
        <span class="iconfont">&#xe625;</span>黔友
      </router-link>
      <router-link tag="li" active-class="active" to="/home/my">
        <span class="iconfont">&#xe607;</span>我的
      </router-link>
    </ul>
  </div>
</template>
<script>
import "@/assets/iconfont/iconfont.css";
import HeardTop from "../../components/HeardTop";
export default {
  components: {
    HeardTop,
  },
};
</script>

<style lang="scss" scoped>
.con {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  .main {
    flex: 1;
    height: 100%;
    overflow: hidden;
  }
  .nav {
    box-sizing: border-box;
    height: 58px;
    display: flex;
    padding-top: 5px;
    li {
      list-style: none;
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      font-size: 16px;
      color: hsl(0, 0%, 41%);
      span {
        font-size: 22px;
      }
    }
    .active {
      color: red;
    }
  }
}
</style>