<template>
   <div>
    <!-- <div>
      <a href="#" @click="goToPage('/', 'Home')">Home</a>&nbsp;|&nbsp;
      <a href="#" @click="goToPage('/about', 'About What we do')">About Us</a>
    </div> -->

    <!-- Router Outlet -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    //
  }),
  methods: {
    goToPage(path, title) {
      //Update the page name in our store
      this.$store.commit("changePageName", title);
      //Route to the appropriate page
      this.$router.push({ path: path });
    }
  }
};
</script>

<style>
</style>
