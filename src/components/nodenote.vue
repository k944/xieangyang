<template>
<div >
    <div v-for="item in this.chuannodenotelist" :key="item.tit">
     <p>标题：{{item.tit}}</p>
     <p>内容：{{item.text}}</p>

    </div>
</div>

   
   
</template>
<script>
export default {

props:{

chuannodenotelist:{
    type:Array,
    default:()=>[],

    }},
    methods:{
show(){

    console.log(this.chuannodenotelist)
}

    }
    
    
}
</script>

<style scoped>
p{
    word-wrap: break-word;
    /* 换行 */
}


</style>