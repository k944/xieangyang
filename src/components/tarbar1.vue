<template>
  <div>
    <div id="true" v-show="flag">
      <!-- {{listtrue}} -->
      <div id="hcanswer">
        <div
          class="question"
          v-for="(item, index) in listtruesorfalse"
          :key="item.id"
        >
          <span>{{ item.type }}</span>
          <p>{{ item.id }}:{{ item.tittle }}</p>
          <div>
            <div class="true">
              <label>
                <input type="radio" value="A" :name="'question' + index" />{{
                  item.true
                }}
              </label>
            </div>
            <div class="false">
              <label>
                <input type="radio" value="B" :name="'question' + index" />{{
                  item.false
                }}
              </label>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div class="answer">
            <p>{{ item.Tittleanalysis }}</p>
            <br />
            <span>{{ item.answer }}</span>
            <br /><br />
            <p>{{ item.analysis }}</p>
          </div>
          <div></div>
        </div>
      </div>
    </div>

    <textarea
      v-show="flags"
      class="texwidth"
      v-model="text"
      placeholder="内容"
    ></textarea>
    <button class="btn" value="保存" v-show="flags" @click="add">保存</button>
    <input
      type="text"
      placeholder="标题"
      v-show="flags"
      id="tittle"
      v-model="tit"
    />
    <div class="tarbar11">
      <div class="tarbar1">
        <div class="note" @click="shownote">
          <img src="../assets/img/tarbar/all.png" alt="" /><input
            type="button"
            value="写笔记"
          />
        </div>
        <div class="true" @click="showtrue">
          <img src="../assets/img/tarbar/true3x.png" alt="" /><input
            type="button"
            value="0"
            v-model="trues"
          />
        </div>
        <div class="false" @click="showfalse">
          <img src="../assets/img/tarbar/false3x.png" alt="" /><input
            type="button"
            value="0"
            v-model="falses"
          />
        </div>
        <div class="all" @click="showall">
          <img src="../assets/img/tarbar/all.png" alt="" /><input
            type="button"
            v-model="i"
          />
          <input type="button" value="/" /><input
            type="button"
            v-model="lengths"
          />

          <!-- {{fData}} -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import vm from "../main";
export default {
  props: {
    fData: {
      type: Array,
      default: () => [],
    },
    listtrues: {
      type: Array,
      default: () => [],
    },
    listfalses: {
      type: Array,
      default: () => [],
    },
    chuanlistss: {
      type: Array,
      default: () => [],
    },
    lengths: {
      type: Number,
    },
  },
  data() {
    return {
      trues: 0,
      falses: 0,
      i: 0,
      flag: false,
      flags: false,
      listtruesorfalse: [],
      text: "",
      tit: "",
      notelist: [],
      jsnotelist:[],
      jqnotelist:[],
      h5notelist:[],
      nodenotelist:[],
      vuenotelist:[],
      webnotelist:[],
      webpacknotelist:[],
   
    };
  },

  methods: {
    getpath() {
      //监听路由变化 变化清零
      this.trues = 0;
      this.falses = 0;
      this.listtruesorfalse = [];
      this.i = 0;
      this.chuanlists = [];
      // this.notelist=[]
    },
    showtrue() {
      this.flag = !this.flag;
      this.listtruesorfalse = this.listtrues;
      if (this.flags == true) {
        this.flags = false;
      }
    },
    showfalse() {
      this.flag = !this.flag;
      this.listtruesorfalse = this.listfalses;
      if (this.flags == true) {
        this.flags = false;
      }
    },
    showall() {
      this.flag = !this.flag;
      this.listtruesorfalse = this.chuanlistss;
      if (this.flags == true) {
        this.flags = false;
      }
    },
    shownote() {
      this.flags = !this.flags;
      if (this.flag == true) {
        this.flag = false;
      }
      // if(this.flags==true){
      //    this.notelist.text=this.text
      // console.log(this.notelist)
      // }
      // else{
      //   this.text=''
      // }
    },

    add() {
if(this.$route.path.indexOf('hcanswer')!=-1){
      this.notelist.unshift({ tit: this.tit, text: this.text });
      // console.log(this.notelist[0].text)
      // console.log(this.notelist)
      if(this.notelist.text!=''){
         this.$emit("notelist", this.notelist);
      }
      this.text = "";
      this.tit = "";
      this.flags = false;
    }
    if(this.$route.path.indexOf('jsanswer')!=-1){
      console.log("js")
      this.jsnotelist.unshift({ tit: this.tit, text: this.text });
      // console.log(this.notelist[0].text)
      // console.log(this.notelist)
      if(this.jsnotelist.text!=''){
         this.$emit("jsnotelist", this.jsnotelist);
      }
      this.text = "";
      this.tit = "";
      this.flags = false;
    }
    if(this.$route.path.indexOf('jqanswer')!=-1){
      this.jqnotelist.unshift({ tit: this.tit, text: this.text });
      // console.log(this.notelist[0].text)
      // console.log(this.notelist)
      if(this.jqnotelist.text!=''){
         this.$emit("jqnotelist", this.jqnotelist);
      }
      this.text = "";
      this.tit = "";
      this.flags = false;
    }
    if(this.$route.path.indexOf('h5answer')!=-1){
      this.h5notelist.unshift({ tit: this.tit, text: this.text });
      // console.log(this.notelist[0].text)
      // console.log(this.notelist)
      if(this.h5notelist.text!=''){
         this.$emit("h5notelist", this.h5notelist);
      }
      this.text = "";
      this.tit = "";
      this.flags = false;
    }
    
    if(this.$route.path.indexOf('nodeanswer')!=-1){
      this.nodenotelist.unshift({ tit: this.tit, text: this.text });
      // console.log(this.notelist[0].text)
      // console.log(this.notelist)
      if(this.nodenotelist.text!=''){
         this.$emit("nodenotelist", this.nodenotelist);
      }
      this.text = "";
      this.tit = "";
      this.flags = false;
    }
    if(this.$route.path.indexOf('vueanswer')!=-1){
      
      console.log('vue')
      this.vuenotelist.unshift({ tit: this.tit, text: this.text });
      // console.log(this.notelist[0].text)
      // console.log(this.notelist)
      if(this.vuenotelist.text!=''){
         this.$emit("vuenotelist", this.vuenotelist);
      }
      this.text = "";
      this.tit = "";
      this.flags = false;
    }
    if(this.$route.path.indexOf('webanswer')!=-1){
      this.webnotelist.unshift({ tit: this.tit, text: this.text });
      // console.log(this.notelist[0].text)
      // console.log(this.notelist)
      if(this.webnotelist.text!=''){
         this.$emit("webnotelist", this.webnotelist);
      }
      this.text = "";
      this.tit = "";
      this.flags = false;
    }
    if(this.$route.path.indexOf('webpackanswer')!=-1){
      this.webpacknotelist.unshift({ tit: this.tit, text: this.text });
      // console.log(this.notelist[0].text)
      // console.log(this.notelist)
      if(this.webpacknotelist.text!=''){
         this.$emit("webpacknotelist", this.webpacknotelist);
      }
      this.text = "";
      this.tit = "";
      this.flags = false;
    }
    
    
    },
  },

  watch: {
    fData: function (newval) {
      console.log(newval[0]);

      if (newval[0] == 1) {
        this.$data.trues = this.$data.trues + 1;
        this.i = this.i + 1;
      } else {
        this.$data.falses = this.$data.falses + 1;
        this.i = this.i + 1;
      }
    },

    $route: "getpath",
  },

  //   mounted() {
  //     vm.$on("drawerShow", function (l) {
  //       console.log(l);
  //     })
  //   },
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.tarbar11 {
  width: 100%;
  height: 50px;
  background-color: lightsteelblue;
  position: fixed;
  bottom: 0;
  line-height: 50px;
  /* vertical-align: middle; */
}
.tarbar11 div {
  display: flex;
  /* display: inline-block; */
  justify-content: space-between;
  margin-top: 5px;
}
.tarbar1 img {
  width: 30px;
  height: 30px;
}
.false img {
  background-color: red;
}

.tarbar1 input {
  font-size: 14px;
  border: none;
  background-color: lightsteelblue;
}
#true {
  position: fixed;

  bottom: 10%;
  z-index: 10;
  height: 50%;
  width: 80%;
  overflow: scroll;
  background-color: beige;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* display: none; */
  /* visibility: hidden; */
}
/* button{
  visibility: hidden;
} */
.texwidth {
  width: 80%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 50%;
  overflow: auto;
}
.btn {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 75%;
}
#tittle {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 17.5%;
  width: 80%;
  height: 40px;
  z-index: 100;
  border: beige 1px solid;

  /* display: inline-block; */
}
</style>
