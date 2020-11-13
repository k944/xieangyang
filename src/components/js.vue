<template>
  <div class="js">
    <div class="j" @click="$router.push('/js/jsanswer')"><p>答题模式</p></div>
    <div class="s" @click="$router.push('/js/jscleetcode')"><p>刷题模式</p></div>
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
.j{position: relative;
    width: 150px;
    height: 150px;
    background-color: blueviolet;
    border-radius: 50%;
    margin: 100px auto;
}
.s{position: relative;
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