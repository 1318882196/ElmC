import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import City from '@/components/city/City'
import City_detill from '@/components/city/City_detill'
// import Geohasha from '@/components/geohashLb/Geohasha'
import Geot from '@/components/geo/Geot'
import swiperdet from '@/components/geo/swiperdet'
import listdet from '@/components/geo/listdet'

import CentO from '@/components/geo/cent/CentO'
import CentT from '@/components/geo/cent/CentT'

Vue.use(Router)

export default new Router({
  routes: [
      // {
      //   path: '/',
      //   name: 'HelloWorld',
      //   component: HelloWorld
      // },
      {
        path: '/',
        name: 'City',
        component: City
      },
      {
        path: '/city_detill',
        name: 'City_detill',
        component: City_detill
      },
      // {
      //   path: '/geohasha',
      //   name: 'Geohasha',
      //   component: Geohasha
      // }
      {
          path:'/geot',
          name:'Geot',
          component:Geot
      },
      {
        path:'/swiperdet',
        name:'swiperdet',
        component:swiperdet
      },
      {
        path:'/listdet/:id',
        name:'listdet',
        component:listdet,
        children:[
            {
              path:"/listdet/centO",
              name:"CentO",
              component:CentO
            },
            {
              path:"/listdet/centT",
              name:"CentT",
              component:CentT
            },
            
        ],
        redirect:"/listdet/centO"
      },
  ]
})
