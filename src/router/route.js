// import Vue from "vue"
//  import VueRouter from "vue-router"
// // import { Field } from 'mint-ui';
// // Vue.component(Field.name, Field);

// const Home = () => import('../home/home')
// const Mine = () => import('../mine/mine')
// const Community = () => import('../community/community')
// const myactivity = () => import('../mine/myactivity')
// const person = () => import('../mine/person')
// // const Cart = () => import('views/cart/cart')
// // const Category = () => import('views/category/category')
// // const Profile = () => import('views/profile/profile')

Vue.use(VueRouter)

// const routes = [
//   {
//     path: '',
//     redirect: '/home'
//   },
//   {
//     path: '/home',
//     component: Home,

//   },
//   {
//     path: '/mine',
//     component: Mine,



//     // query: {
//     //   id: 1
//     // }
//   },
//   {
//     path:'/mine/myactivity',
//     component:myactivity,


// },
// {
//   path:'/mine/person',
//   component:person,


// },
//   {
//     path: '/community',
//     component: Community
//   },
//   // {
//   //   path: '/profile',
//   //   component: Profile
//   // } 

// ]

// const router = new VueRouter({
//   routes,
//   mode: 'history'
// })

// export default router
import Vue from "vue"
import VueRouter from 'vue-router'
const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)

}

Vue.use(VueRouter)
// const Test = () =>import('../components/test')
const problems = () => import('../components/problems')
const collect = () => import('../components/collect')
const hcnote = () => import('../components/hcnote')
const hc = () => import('../components/hc')
const js = () => import('../components/js')
const jq = () => import('../components/jq')
const h5 = () => import('../components/h5')
const node = () => import('../components/node')
const webpack = () => import('../components/webpack')
const vue = () => import('../components/vue')
const web = () => import('../components/web')

const hcanswer = () => import('../components/hcanswer')
const hcleetcode = () => import('../components/hcleetcode')

const jsanswer = () => import('../components/jsanswer')
const jscleetcode = () => import('../components/jscleetcode')

const jqanswer = () => import('../components/jqanswer')
const jqcleetcode = () => import('../components/jqcleetcode')

const h5answer = () => import('../components/h5answer')
const h5cleetcode = () => import('../components/h5cleetcode')

const nodeanswer = () => import('../components/nodeanswer')
const nodecleetcode = () => import('../components/nodecleetcode')

const vueanswer = () => import('../components/vueanswer')
const vuecleetcode = () => import('../components/vuecleetcode')

const webanswer = () => import('../components/webanswer')
const webcleetcode = () => import('../components/webcleetcode')

const webpackanswer = () => import('../components/webpackanswer')
const webpackcleetcode = () => import('../components/webpackcleetcode')
const jsnote = () => import('../components/jsnote')
const jqnote = () => import('../components/jqnote')
const h5note = () => import('../components/h5note')
const nodenote = () => import('../components/nodenote')
const vuenote = () => import('../components/vuenote')
const webnote = () => import('../components/webnote')
const webpacknote = () => import('../components/webpacknote')
// const tarbar1 = () => import('../tarbar1')



const routes = [
  {
    path: '', component: problems,
    meta: {
      istrun: true
    },
  },
  {
    path: '/problems', component: problems, meta: {
      istrun: true
    },
  },
  {
    path: '/collect', component: collect, meta: {
      istrun: true
    },
  },

  {
    path: '/collect/hcnote', component: hcnote, meta: {

      istrun: false
    }
  },
  {
    path: '/collect/jsnote', component: jsnote, meta: {

      istrun: false
    }
  },
  {
    path: '/collect/jqnote', component: jqnote, meta: {

      istrun: false
    }
  },
  {
    path: '/collect/h5note', component: h5note, meta: {

      istrun: false
    }
  },
  {
    path: '/collect/nodenote', component: nodenote, meta: {

      istrun: false
    }
  },
  {
    path: '/collect/vuenote', component: vuenote, meta: {

      istrun: false
    }
  },
  {
    path: '/collect/webnote', component: webnote, meta: {

      istrun: false
    }
  },
  {
    path: '/collect/webpacknote', component: webpacknote, meta: {

      istrun: false
    }
  },








  {
    path: '/hc', component: hc,
    meta: {
      istrun: false
    },
  },
  {
    path: '/hc/hcanswer', component: hcanswer,
    meta: {
      istrun: false,
      hh: true,
      cleetcode: true
    },
  },
  {
    path: '/hc/hcleetcode', component: hcleetcode,
    meta: {
      istrun: false,
      hh: true,
      cleetcode: false
    },
  },



  {
    path: '/js', component: js, meta: {
      istrun: false
    },
  },
  {
    path: '/js/jsanswer', component: jsanswer,
    meta: {
      istrun: false,
      hh: true,
      cleetcode: true
    },
  },
  {
    path: '/js/jscleetcode', component: jscleetcode,
    meta: {
      istrun: false,
      hh: true,
      cleetcode: false
    },
  },


  {
    path: '/jq', component: jq, meta: {
      istrun: false
    },
  },
  {
    path: '/jq/jqanswer', component: jqanswer,
    meta: {
      istrun: false,
      hh: true,
      cleetcode: true
    },
  },
  {
    path: '/jq/jqcleetcode', component: jqcleetcode,
    meta: {
      istrun: false,
      hh: true,
      cleetcode: false
    },
  },
  {
    path: '/h5', component: h5, meta: {
      istrun: false
    },
  },


  {
    path: '/h5/h5answer', component: h5answer,
    meta: {
      istrun: false,
      hh: true,
      cleetcode: true
    },
  },
  {
    path: '/h5/h5cleetcode', component: h5cleetcode,
    meta: {
      istrun: false,
      hh: true,
      cleetcode: false
    },
  },
  {
    path: '/node', component: node, meta: {
      istrun: false
    },
  },

  {
    path: '/node/nodeanswer', component: nodeanswer,
    meta: {
      istrun: false,
      hh: true,
      cleetcode: true

    },
  },
  {
    path: '/node/nodecleetcode', component: nodecleetcode,
    meta: {
      istrun: false,
      hh: true,
      cleetcode: false
    },
  },

  {
    path: '/webpack', component: webpack, meta: {
      istrun: false
    },
  },

  {
    path: '/webpack/webpackanswer', component: webpackanswer,
    meta: {
      istrun: false,
      hh: true,
      cleetcode: true
    },
  },
  {
    path: '/webpack/webpackcleetcode', component: webpackcleetcode,
    meta: {
      istrun: false,
      hh: true,
      cleetcode: false
    },
  },
  {
    path: '/vue', component: vue, meta: {
      istrun: false
    },
  },
  {
    path: '/vue/vueanswer', component: vueanswer,
    meta: {
      istrun: false,
      hh: true,
      cleetcode: true
    },
  },
  {
    path: '/vue/vuecleetcode', component: vuecleetcode,
    meta: {
      istrun: false,
      hh: true,
      cleetcode: false
    },
  },
  {
    path: '/web', component: web, meta: {
      istrun: false
    },
  },
  {
    path: '/web/webanswer', component: webanswer,
    meta: {
      istrun: false,
      hh: true,
      cleetcode: true
    },
  },
  {
    path: '/web/webcleetcode', component: webcleetcode,
    meta: {
      istrun: false,
      hh: true,
      cleetcode: false
    },
  },
  //  { path:'/tarbar1',component:tarbar1, meta: {
  //   istrun: false,
  //   hh:true
  // },

  //}

]
const router = new VueRouter({
  routes
})
export default router