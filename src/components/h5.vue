<template>
  <div class="h5">
    <div class="h" @click="$router.push('/h5/h5answer')"><p>答题模式</p></div>
    <div class="five" @click="$router.push('/h5/h5cleetcode')"><p>刷题模式</p></div>
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
.h{position: relative;
    width: 150px;
    height: 150px;
    background-color: blueviolet;
    border-radius: 50%;
    margin: 100px auto;
}
.five{position: relative;
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