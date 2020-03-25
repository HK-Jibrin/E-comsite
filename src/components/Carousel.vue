<template>
<div id="caro">
    
        <carousel :per-page="1" :mouse-drag= "true" :autoplay= true  :loop= true  :speed ="10000">

            <slide v-for="image in carouselImage" :key="image.imageUrl" >
                <img :src="image.imageUrl"  width= 900; height= 300; />
            </slide>
        </carousel>
</div>
    
</template>
<script>

export default {
    name: "jubrin",
    data(){
        return{
            carouselImage:[
          {
         imageUrl: require("../assets/banner.jpg")  
          },
          {
         imageUrl: require("../assets/made3.jpeg")  
          },
          {
         imageUrl: require("../assets/powerbike.jpg")  
          },

        ],
        }
    }
    }
</script>
<style>
#caro {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
  /* height: 1000px; */
}

</style>