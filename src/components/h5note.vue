<template>
<div >
    <div v-for="item in this.chuanh5notelist" :key="item.tit">
     <p>标题：{{item.tit}}</p>
     <p>内容：{{item.text}}</p>

    </div>
</div>

   
   
</template>
<script>
export default {

props:{

chuanh5notelist:{
    type:Array,
    default:()=>[],

    }},
    methods:{
show(){

    console.log(this.chuanh5notelist)
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