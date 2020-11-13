<template>
  <div id="hcleetcode">
    <div class="question" v-for="item in list" :key="item.type">
      <span>{{ item.type }}</span>
      <p>{{ item.tittle }}</p>
      <div class="true">
        <label>
          <input type="radio" value="正确" name="question" />{{ item.true }}
        </label>
      </div>
      <div class="false">
        <label>
          <input type="radio" value="错误" name="question"/>{{
            item.false
          }}
        </label>
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
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          type: "判断题",
          tittle: "去掉文本框的外边框的样式是outline:no",
          true: "A:正确",
          false: "B:错误",
          Tittleanalysis: "试题解析",
          answer: "答案:B",
          analysis:
            "我们在布局的时候经常要去除input的默认样式，一定要记住哈 经常用的",
        },
      ],
    };
  },
  methods: {},
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

</style>