<template>
   <div>
    <h1>{{ product.name }}</h1>
  </div>
</template>

<script>
export default {
  computed: {
    product() {
      return this.$store.state.selectedProduct;
    }
  }
};
</script> -->
    