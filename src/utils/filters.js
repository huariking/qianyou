import Vue from 'vue'
Vue.filter('wh',function(val,params){
  return val.replace(/w.h/,params)
})