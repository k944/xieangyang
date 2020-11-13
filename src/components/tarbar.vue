<template>
    <div>
      <div id="span">
        <span class="span1" @click="Pro" :style="{backgroundColor:color1}">题库</span>
        
      <span class="span2" @click="Col" :style="{backgroundColor:color2}">笔记</span>
      </div>
      <!-- <router-link to="./collect">收藏</router-link> -->
    </div>
</template>
<script>
export default {
  data(){
return{
    color1:'lightskyblue',
  color2:' white'
}
  },
  
  methods:{
    

Pro(){
this.$router.push('./problems')
this.color1='lightskyblue'
this.color2='lightgray'


},
Col(){
this.$router.push('./collect')
this.color1='lightgray'
this.color2='lightskyblue'

}

  }
    
}
</script>
<style scoped>
*{
    margin: 0;
    padding: 0;
}#span{
position: fixed;
width: 100%;
bottom: 0;
background-color: lightgray;
}
.span1{
  display:inline-block;
margin-left: 22%;
height: 50px;
line-height: 50px;
background-color:lightskyblue;
width: 50px;
text-align: center;
border: 1px solid beige;
border-radius: 50%;

}
.span2{
  position: absolute;
  display:inline-block;
right: 22%;
  height: 50px;
  line-height: 50px;
  /* background-color:lightskyblue; */
width: 50px;
text-align: center;
border: 1px solid beige;
border-radius: 50%;

}
.active{
  background-color: lightskyblue;
}


  
</style>