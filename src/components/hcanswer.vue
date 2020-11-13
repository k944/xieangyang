<template>
  <div id="hcanswer">
    <div class="question" v-for="(item, index) in this.list" :key="item.id">
      <span>{{ item.type }}</span>
      <p>{{item.id}}:{{ item.tittle }}</p>
      <div>
        <div class="true">
          <label>
            <input
              type="radio"
              value="A"
              :name="'question' + index"
              @click="shows(item, index)"
              ref="checke"
            />{{ item.true }}
          </label>
        </div>
        <div class="false">
          <label>
            <input
              type="radio"
              value="B"
              :name="'question' + index"
              @click="shows(item, index)"
              ref="checke"
            />{{ item.false }}
          </label>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div :class="{ active: index == isactive }" class="answer" v-show="flag">
        <p>{{ item.Tittleanalysis }}</p>
        <br />
        <span>{{ item.answer }}</span>
        <br /><br />
        <p>{{ item.analysis }}</p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <div></div>
    </div>
  </div>
</template>
<script>
// import vm from '../main'
export default {
  name: "hcanswer",
  data() {
    return {
      drawerstart: false,
      // radioval: "",
      flag: false,
      isactive: 0,
      i: false, //为了emit只提交一次
      j: 0,
      list: [
        {
          id: "1",
          type: "判断题",
          tittle: "去掉文本框的外边框的样式是outline:no",
          true: "A:正确",
          false: "B:错误",
          Tittleanalysis: "试题解析",
          answer: "B",
          analysis:
            "我们在布局的时候经常要去除input的默认样式，一定要记住哈 经常用的",
        },
        {
          id: "2",
          type: "判断题",
          tittle: "去掉文本框的外边框的样式是outline:no",
          true: "A:正确",
          false: "B:错误",
          Tittleanalysis: "试题解析",
          answer: "B",
          analysis:
            "我们在布局的时候经常要去除input的默认样式，一定要记住哈 经常用的",
        },
        {
          id: "3",
          type: "判断题",
          tittle: "去掉文本框的外边框的样式是outline:no",
          true: "A:正确",
          false: "B:错误",
          Tittleanalysis: "试题解析",
          answer: "B",
          analysis:
            "我们在布局的时候经常要去除input的默认样式，一定要记住哈 经常用的",
        },
      ],
      listindex: [100],
      listtrue: [],
      listfalse: [],
    };
  },
  mounted(){
    this.$emit('chuanlist',this.list,this.list.length)

  },

  watch: {
    $route: "getall",
  },
  methods: {
    getall() {
      this.listtrue = [];
      this.listfalse = [];
    },
    // getval(item, radioval) {
    //   this.$emit("drawerShow", radioval);
    // },

    shows(item, index) {
      console.log(index + 1000);
      // if (this.j < index) {
      //   this.j++;
      //   this.i = false;
      // }
      //   if (this.j > index) {
      //   this.j=this.j+2;
      //   this.i = false;
      // }

      this.isactive = index;
      // console.log(index)
      if (index + 1 == item.id) {
        this.flag = true;
        //  console.log(item.id)
        //  console.log(this.$refs.index)
        //  console.log(  $("input[name='question']:checked").val)
      }
      // console.log(index);
      // console.log(this.$refs.checke)
      // console.log(this.$refs.checke[index*2])
      // console.log(this.$refs.checke[index*2+1])
      if (this.listindex.indexOf(index) == -1) {
        this.listindex.unshift(index);
        this.i = false;

        if (this.$refs.checke[index * 2].checked) {
          //选择A
          // console.log(this.$refs.checke[index * 2].value)
          // console.log(this.list[index].answer)
          if (this.i == false) {
            if (
              this.$refs.checke[index * 2].checked.value ==
              this.list[index].answer
            ) {
              // console.log("ok");
              this.$emit("drawerShow", 1);
              this.listtrue.push(this.list[index]);
              console.log(this.listtrue[0]);
              this.$emit("listtrue", this.listtrue);
            } else {
              // console.log("no");
              this.$emit("drawerShow", -1);
              this.listfalse.push(this.list[index]);
              this.$emit("listfalse", this.listfalse);
            }
            this.i = true;
          }
        } else {
          if (this.i == false) {
            if (
              this.$refs.checke[index * 2 + 1].value == this.list[index].answer
            ) {
              //选择B
              // console.log("ok");
              this.$emit("drawerShow", 1);
              this.listtrue.push(this.list[index]);
              this.$emit("listtrue", this.listtrue);
              
              console.log(this.listtrue[0]);
            } else {
              // console.log("no");
              this.$emit("drawerShow", -1);
              this.listfalse.push(this.list[index]);
              this.$emit("listfalse", this.listfalse);
            }

            this.i = true;
          }
          // console.log(this.$refs.checke[index * 2 + 1]);
        }
      }

      // watch:{
      // }
    },
  },
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  border: 0;
}

.question span {
  background-color: rgb(11, 200, 200);
  border-radius: 7%;
}
.false {
  margin-top: 20px;
}

.answer {
  position: relative;
}
.answer p:nth-of-type(1) {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-weight: bold;
}
.answer span {
  background-color: #fff;
  color: rgb(11, 200, 200);
  font-size: 18px;
}
.answer {
  display: none;
}
.active {
  display: block;
}
</style>