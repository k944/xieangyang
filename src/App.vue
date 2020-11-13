<template>
  <div>
    <!-- <hcanswer @drawerShow="drawerShow" ></hcanswer> -->
    <headerbar v-show="$route.meta.hh"></headerbar>
    <router-view @drawerShow="drawerShow" @listtrue='listtrue' @listfalse='listfalse' 
    @chuanlist='chuanlist'    v-bind:chuannotelist='notelists'
     v-bind:chuanjsnotelist='jsnotelists'
     v-bind:chuanjqnotelist='jqnotelists'
     v-bind:chuanh5notelist='h5notelists'
     v-bind:chuannodenotelist='nodenotelists'
     v-bind:chuanvuenotelist='vuenotelists'
     v-bind:chuanwebnotelist='webnotelists'
     v-bind:chuanwebpacknotelist='webpacknotelists'
    
    
    
    
    
    />
    <Tarbar v-show="$route.meta.istrun"></Tarbar>
    <tarbar1 v-show="$route.meta.cleetcode"  v-bind:fData="list" 
    v-bind:listtrues="trues" v-bind:listfalses="falses"
     v-bind:chuanlistss="chuanlists" v-bind:lengths="lengths"
  
      @notelist='notelistt'
      @jqnotelist='jqnotelistt'
      @h5notelist='h5notelistt'
      @nodenotelist='nodenotelistt'
      @vuenotelist='vuenotelistt'
      @jsnotelist='jsnotelistt'
      @webnotelist='webnotelistt'
      @webpacknotelist='webpacknotelistt'
     ></tarbar1>
  </div>
</template>

<script>
// const Tarbar = () =>import('../tarbar')
import tarbar from './components/tarbar'
import headerbar from './components/headerbar'
import tarbar1 from './components/tarbar1'
// import hcanswer from './components/hcanswer'

export default {
  name:'App',
  
  components:{
    "Tarbar":tarbar,
    'headerbar':headerbar,
    'tarbar1':tarbar1,
     
    // 'hcanswer':hcanswer

  },
  data(){
    return{
     list:[],
     trues:[],
     falses:[],
   chuanlists:[],
   notelists:[],
   jsnotelists:[],
      jqnotelists:[],
      h5notelists:[],
      nodenotelists:[],
      vuenotelists:[],
      webnotelists:[],
      webpacknotelists:[],
   lengths:0,
    }

  },
  
  methods: {
    drawerShow(index) {
      // console.log(index)
      this.list.unshift(index)
    },
    listtrue(listtrue){
      // console.log(listtrue)
      this.trues=listtrue
     

    },
  listfalse(listfalse){
  this.falses=listfalse

  },
 chuanlist(l,le){
    this.chuanlists=l
    this.lengths=le

  },
  getall(){
    this.list=[]
    this.trues=[]
    this.falses=[]
    this.chuanlists=[]
    this.lengths=0
    // this.notelists=[]

  },
  notelistt(note){
this.notelists=note
console.log(this.notelists)
  },
  jsnotelistt(note){
this.jsnotelists=note

  },
    jqnotelistt(note){
this.jqnotelists=note

  },
    h5notelistt(note){
this.h5notelists=note

  },
    nodenotelistt(note){
this.nodenotelists=note

  },
    vuenotelistt(note){
this.vuenotelists=note

  },
    webnotelistt(note){
this.webnotelists=note

  },
    webpacknotelistt(note){
this.webpacknotelists=note

  },


  },
  watch:{
$route:'getall'


  }
  
}

</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
</style>>

