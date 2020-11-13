import Vue from 'vue'
import App from './App.vue'

 import router from './router/route'
 
// import MinUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(MinUI)

// Vue.config.productionTip = false

new Vue({
  render: h => h(App),
 router
}).$mount('#app')
// export default vm
 
