<template>
  <div class="webs">
    <div class="hcjs">
      <div class="hc" @click="hc">
        <p>html+css</p>
        <p>前端第一阶段</p>
        <p>总分100分</p>
      </div>
      <div class="js" @click="js">
        <p>javascript</p>
        <p>前端第二阶段</p>
        <p>总分100分</p>
      </div>
    </div>
    <div class="jqh5">
      <div class="jq" @click="jq">
        <p>jQuery</p>
        <p>前端第三阶段</p>
        <p>总分100分</p>
      </div>
      <div class="h5" @click="h5">
        <p>H5C3</p>
        <p>前端第四阶段</p>
        <p>总分100分</p>
      </div>
    </div>
    <div class="nw">
      <div class="node" @click="node">
        <p>nodejs</p>
        <p>前端第五阶段</p>
        <p>总分100分</p>
      </div>
      <div class="webpack" @click="webpack">
        <p>webpack+Es6</p>
        <p>前端第六阶段</p>
        <p>总分100分</p>
      </div>
    </div>
    <div class="vues">
      <div class="vue" @click="vue">
        <p>vue</p>
        <p>前端第七阶段</p>
        <p>总分100分</p>
      </div>
      <div class="web" @click="web">
        <p>互联网公司</p>
        <p>大厂面试题</p>
        <p>总分100分</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    hc() {
      this.$router.push("./hc");
    },
    js() {
      this.$router.push("./js");
    },
    jq() {
      this.$router.push("./jq");
    },
    h5() {
      this.$router.push("./h5");
    },
    node() {
      this.$router.push("./node");
    },
    webpack() {
      this.$router.push("./webpack");
    },
    vue() {
      this.$router.push("./vue");
    },
    web() {
      this.$router.push("./web");
    },
  },
};
</script>
<style  scoped>
* {
  margin: 0 0;
  padding: 0 0;
  border: 0;
}
.webs {

  width: 100%;
  height: 100%;
position: relative;
  margin: 0;

  /* position: relative; */
  /* background-color: lightsteelblue; */
  /* background-color: lightgoldenrodyellow; */
}
.hcjs,
.jqh5,
.nw,
.vues {
  display: flex;
  justify-content: space-around;
  /* margin: 0 auto; */
  padding: 4px;


  /* position: relative; */
}
.hc,
.js,
.jq,
.h5,
.node,
.webpack,
.vue,
.web {
  /* flex: 1; */
  display: inline-block;
  /* position: absolute; */

  border-radius: 7%;
  border: 1px solid lightskyblue;

  height: 100px;
  text-align: center;
  width: 160px;

  margin-top: 5%;
}
p {
  
  margin: 7px;
}
.hc p:nth-of-type(1),
.js p:nth-of-type(1),
.jq p:nth-of-type(1),
.h5 p:nth-of-type(1),
.node p:nth-of-type(1),
.webpack p:nth-of-type(1),
.vue p:nth-of-type(1),
.web p:nth-of-type(1) {
  color: lightskyblue;
}
.hc p:nth-of-type(3),
.js p:nth-of-type(3),
.jq p:nth-of-type(3),
.h5 p:nth-of-type(3),
.node p:nth-of-type(3),
.webpack p:nth-of-type(3),
.vue p:nth-of-type(3),
.web p:nth-of-type(3) {
  font-size: 12px;
}
</style>