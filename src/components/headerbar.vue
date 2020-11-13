<template>
  <div class="header">
    <img
      src="../assets/img/header/fanhui2x.png"
      alt="ll"
      @click="$router.go(-1)"
    />

    <div class="input">
      <input type="button" :style="{ backgroundColor:color1}" value="答题模式" @click="show1" />
      <input  type="button" :style="{backgroundColor:color2}" value="刷题模式" @click="show2"/>
    </div>
  </div>
</template>
<script>
export default {
data(){

return{
  color1:' lightskyblue',
  color2:' white'

}
},

 
methods:{


  show1(){
  this.color1='lightskyblue'
  this.color2='white'


  if(this.$route.path=='/hc/hcanswer'||this.$route.path=='/hc/hcleetcode'){
    this.$router.push('/hc/hcanswer')
  }


  if(this.$route.path=='/js/jsanswer'||this.$route.path=='/js/jscleetcode'){
    this.$router.push('/js/jsanswer')
  }
  if(this.$route.path=='/jq/jqanswer'||this.$route.path=='/jq/jqcleetcode'){
    this.$router.push('/jq/jqanswer')
  }
  if(this.$route.path=='/h5/h5answer'||this.$route.path=='/h5/h5cleetcode'){
    this.$router.push('/h5/h5answer')
  }
  if(this.$route.path=='/node/nodeanswer'||this.$route.path=='/node/nodecleetcode'){
    this.$router.push('/node/nodeanswer')
  }
    if(this.$route.path=='/webpack/webpackanswer'||this.$route.path=='/webpack/webpackcleetcode'){
    this.$router.push('/webpack/webpackanswer')
  }
     if(this.$route.path=='/vue/vueanswer'||this.$route.path=='/vue/vuecleetcode'){
    this.$router.push('/vue/vueanswer')
  }
      if(this.$route.path=='/web/webanswer'||this.$route.path=='/web/webcleetcode'){
    this.$router.push('/web/webanswer')
  }

  },
  show2(){
    this.color1='white'
    this.color2='lightskyblue'
    if(this.$route.path=='/hc/hcanswer'||this.$route.path=='/hc/hcleetcode'){
    this.$router.push('/hc/hcleetcode')
  }
   if(this.$route.path=='/js/jsanswer'||this.$route.path=='/js/jscleetcode'){
    this.$router.push('/js/jscleetcode')
  }
   if(this.$route.path=='/jq/jqanswer'||this.$route.path=='/jq/jqcleetcode'){
    this.$router.push('/jq/jqcleetcode')
  }
   if(this.$route.path=='/h5/h5answer'||this.$route.path=='/h5/h5cleetcode'){
    this.$router.push('/h5/h5cleetcode')
  }
    if(this.$route.path=='/node/nodeanswer'||this.$route.path=='/node/nodecleetcode'){
    this.$router.push('/node/nodecleetcode')
  }
      if(this.$route.path=='/webpack/webpackanswer'||this.$route.path=='/webpack/webpackcleetcode'){
    this.$router.push('/webpack/webpack')
  }
     if(this.$route.path=='/vue/vueanswer'||this.$route.path=='/vue/vuecleetcode'){
    this.$router.push('/vue/vuecleetcode')
  }

    if(this.$route.path=='/web/webanswer'||this.$route.path=='/web/webcleetcode'){
    this.$router.push('/web/webcleetcode')
  }

 
  }
},
 mounted(){

    if(this.$route.path.endsWith('code')){
    this.color1='white'
    this.color2='lightskyblue'
  }
     

  
  },

};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  border: 0;
}
.header {
  position: relative;
  height: 40px;
  margin-top: 10px;
}
.header img {
  width: 30px;
  height: 30px;
  background-color: #fff;
  line-height: 30px;
  vertical-align: middle;
}
.header input:nth-of-type(1) {
  display: inline-block;
  height: 30px;
  line-height: 30px;
border: none;
  /* background-color: #fff; */
  /* background-color: lightskyblue; */
}
.header input:nth-of-type(2) {
  display: inline-block;
  height: 30px;
  line-height: 30px;
  border: none;
    /* background-color: #fff; */

  /* padding-left: 0; */
}
.input {

  position: absolute;
  display: inline-block;
    height: 30px;
  left: 50%;
  transform: translateX(-50%);
  border: 0.5px solid lightskyblue;  
  border-radius: 15px;
  overflow:auto;
}
.p1{

  background-color: lightskyblue;
}
.p2{
  background-color:white
}
.active{
  background-color: red;
}
</style>