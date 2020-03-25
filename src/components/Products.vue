<template>
<div class="hom">
   <div class="products">
           <img :src="product.imageLink" height="150" width="250">
    <p>{{product.name}}  </p>
    <p> &#8358; {{product.price}} </p>
    <b-button  href="#" style="margin-top:10px" @click="gotoProductDetails(product.id)"> Buy Now </b-button>  
   </div>
</div>
      
</template>
<script>

export default {
    name: 'Products',
    props: ["product"],
    methods:{
        gotoProductDetails(productId) {
    this.$router.push({name:'products', params: {id:productId}})
    }
}
}
</script>
<style scoped>
.products{
    padding: 0;
    margin: 0;
    margin-left: 10px;
    margin-bottom: 1px;
    border: 2px solid black;
    text-align: center;
    padding-top: 20px;
    background-color: whitesmoke;
    border-radius: 20px;
}
.hom{
  width: 300px; 
  margin-bottom: 10px;
  margin-right: 10px;
   display: inline-block;

}

 

</style>
