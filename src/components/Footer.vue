<template>

<footer class="page-footer font-small "  style="background-color: black" height="100px">
>

  <!-- Footer Links -->
  <div class="container text-center text-md-left">

    <!-- Grid row -->
    <div class="row">

      <!-- Grid column -->
      <div class="col-md-3 mx-auto">

        <!-- Links -->
        <h5 class="font-weight-bold text-uppercase mt-3 mb-4">LET US HELP YOU</h5>

        <ul class="list-unstyled" v-for="foot in footer" :key="foot.id">
          <li>
            <a href="#!">{{foot.name}}</a>
          </li>
        </ul>

      </div>
      <!-- Grid column -->

      <hr class="clearfix w-100 d-md-none">

      <!-- Grid column -->
      <div class="col-md-3 mx-auto">

        <!-- Links -->
        <h5 class="font-weight-bold text-uppercase mt-3 mb-4">ABOUT CHARALITES</h5>

        <ul class="list-unstyled" v-for="fuot in footers" :key="fuot.id">
          <li>
          <li>
            <a href="#!">{{fuot.name}}</a>
          </li>
        </ul>

      </div>
      <!-- Grid column -->

      <hr class="clearfix w-100 d-md-none">

      <!-- Grid column -->
      <div class="col-md-3 mx-auto">

        <!-- Links -->
        <h5 class="font-weight-bold text-uppercase mt-3 mb-4">MAKE MONEY WITH CHARALITES</h5>
        <ul class="list-unstyled"  v-for="last in lasts" :key="last.id">
          <li>
            <a href="#!">{{last.name}}</a>
          </li>
        </ul>

      </div>
      <!-- Grid column -->

      <hr class="clearfix w-100 d-md-none">

      <!-- Grid column -->
      <div class="col-md-3 mx-auto">

        <!-- Links -->
        <h5 class="font-weight-bold text-uppercase mt-3 mb-4"> CHARALITES INTERNTIONAL</h5>

        <ul class="list-unstyled" v-for="country in countries" :key="country.id">
          <li>
            <a href="#!">{{country.name}}</a>
          </li>
        </ul>
        </div>
      <div class="row" style="margin-top:30px" >
    <div class="col-sm-4">
      <h5>JOIN US</h5>
       <a class="fb-ic mr-3" role="button"><i class="fab fa-lg fa-facebook-f"></i></a>
<!--Twitter-->
<a class="tw-ic mr-3" role="button"><i class="fab fa-lg fa-twitter"></i></a>
<!--Google +-->
<a class="gplus-ic mr-3" role="button"><i class="fab fa-lg fa-google-plus-g"></i></a>
<!--Linkedin-->
<a class="li-ic mr-3" role="button"><i class="fab fa-lg fa-linkedin-in"></i></a>
<!--Instagram-->
<a class="ins-ic mr-3" role="button"><i class="fab fa-lg fa-instagram"></i></a>
<a class="ins-ic mr-3" role="button"><i class="fas fa-shopping-cart"></i></a>
 </div>
    <div class="col-sm-8">
      <h5>PAYMENT METHOD AND DELIVERY PARTNER</h5>
        <a class="fb-ic mr-3" role="button"><i class="fab fa-dhl"></i></a>
         <a class="fb-ic mr-3" role="button"><i class="fab fa-cc-mastercard"></i></a>
         <a class="fb-ic mr-3" role="button"><i class="fab fa-maxcdn"></i></a></div>
    </div>
    </div>
    <!-- Grid row -->
  </div>
  <!-- Copyright -->
  <div class="footer-copyright text-center py-3">© 2020 Project:
    <a href="https://mdbootstrap.com/"> Charalites</a>
  </div>
  <!-- Copyright -->

</footer>
</template>
<script>
export default {
   name: 'Footer',
    data (){
    return{
       footer:[
        {
          id: 1,
          name: 'Help Centre',
        },
          {
          id: 2,
          name: 'Contact Us',
        },
          {
          id: 3,
          name: "How to shop on charalites shoping mall",
        },
          {
          id: 4,
          name: "Frequent ask questions",
        },
     ],
     footers:[
        {
          id: 1,
          name: 'About Us',
        },
          {
          id: 2,
          name: "charalites Careers",
        },
          {
          id: 3,
          name: "Terms and Conditions",
        },
          {
          id: 4,
          name: "Policy Privacy",
        }
     ],
      countries :[
        {
          id: 1,
          name: 'Morrocco',
        },
          {
          id: 2,
          name: 'Ghana',
        },
          {
          id: 3,
          name: "Suddan",
        },
          {
          id: 4,
          name: "Kenya",
        },
          {
          id: 5,
          name: 'South Africa',
        },
     ],
     lasts :[
        {
          id: 1,
          name: "Become an Afiliate Partner",
        },
          {
          id: 2,
          name: 'Become a Sales Consultant',
        },
          {
          id: 3,
          name: "Become a Vendor Service Provider",
        },
          {
          id: 4,
          name: 'Become a Logistics Service Partner',
        },
     ],
    }
  },
}
</script>
<style  scoped>
 .container{
        display: flex;
 }
</style>