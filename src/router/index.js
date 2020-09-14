import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home'
import Index from '../views/home/index/Index'
import Friends from '../views/home/friends/Friends'
import My from '../views/home/my/My'
import Discounts from '../views/home/index/Discounts'
import Attractions from '../views/home/index/Attractions'
import Cate from '../views/home/index/Cate'
import Hotel from '../views/home/index/Hotel'
import Play from '../views/home/index/Play'
import City from '../views/city/City'
import Detail from '../views/detail/Detail'
import Detailmovie from '../views/detail/datailmovie/Detailmovie'


Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: '/home/index/Discounts'

},
{
  path: '/city',
  component: City
},
{
  path: '/detail',
  component: Detail,
  children: [
    {
      path: '/detail/detailmovie',
      component: Detailmovie
    }

  ]

},
{
  path: '/home',
  component: Home,
  children: [
    {
      path: '/home/index',
      component: Index,
      children: [
        {
          path: '/home/index/Discounts',
          component: Discounts
        },
        {
          path: '/home/index/Attractions',
          component: Attractions
        },
        {
          path: '/home/index/Cate',
          component: Cate
        },
        {
          path: '/home/index/Hotel',
          component: Hotel
        },
        {
          path: '/home/index/Play',
          component: Play
        }
      ]
    },
    {
      path: '/home/friends',
      component: Friends
    },
    {
      path: '/home/my',
      component: My
    }
  ]
}
]

const router = new VueRouter({
  routes
})

export default router
