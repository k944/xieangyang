<template>
  <div class="collect">
    <div>
      <input type="button" value="HTML+CSS" @click="hcrouter" />
    </div>
    <div>
      <input type="button" value="javaScript"  @click="jsrouter" />
    </div>
    <div>
      <input type="button" value="jQuery"  @click="jqrouter" />
    </div>
    <div>
      <input type="button" value="H5C3"  @click="h5router" />
    </div>
    <div>
      <input type="button" value="nodejs"  @click="noderouter" />
    </div>
    <div>
      <input type="button" value="webpack+ES6"  @click="webpackrouter" />
    </div>
    <div>
      <input type="button" value="vue"  @click="vuerouter"/>
    </div>
    <div>
      <input type="button" value="互联网公司"  @click="webrouter"/>
    </div>
  </div>
</template>
<script>
export default {

methods:{


hcrouter(){
this.$router.push('/collect/hcnote')

},
jsrouter(){
this.$router.push('/collect/jsnote')

},
jqrouter(){
this.$router.push('/collect/jqnote')

},
h5router(){
this.$router.push('/collect/h5note')

},
noderouter(){
this.$router.push('/collect/nodenote')

},
vuerouter(){
this.$router.push('/collect/vuenote')

},
webrouter(){
this.$router.push('/collect/webnote')

},
webpackrouter(){
this.$router.push('/collect/webpacknote')

},

}


};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
input {
  width: 100%;
  border: none;
  background-color: white;
  text-align: left;
  line-height: 50px;
  margin-left: 1%;
}
.collect div {
  height: 50px;
  border-bottom: 1px solid lightgray;
  /* position: relative; */
  overflow: hidden;
}
/* span {
  float: right;
  display: inline-block;
  width: 30px;
  height: 20px;
  background-color: lightsalmon;
  position: absolute;

  left: 100%;
} */
</style>