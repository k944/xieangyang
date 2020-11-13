<template>
  <div class="node">
    <div class="no" @click="$router.push('/node/nodeanswer')"><p>答题模式</p></div>
    <div class="de" @click="$router.push('/node/nodecleetcode')"><p>刷题模式</p></div>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
}
.no{position: relative;
    width: 150px;
    height: 150px;
    background-color: blueviolet;
    border-radius: 50%;
    margin: 100px auto;
}
.de{position: relative;
    width: 150px;
    height: 150px;
    background-color: red;
    border-radius: 50%;
     margin: 100px auto;
}

p{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
</style>