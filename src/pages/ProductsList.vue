<template>
  <ul class="list-unstyled m-0">
    <the-product
        v-for="product in products"
        :key="product.id"
        :id="product.id"
        :image="product.image"
        :title="product.title"
        :description="product.description"
        :price="product.price"
    />
  </ul>
</template>

<script>
  import TheProduct from "@/components/products/TheProduct.vue";

  export default {
    components: {TheProduct},
    computed: {
      products() {
        return this.$store.getters['products/products'];
      }
    }
  }
</script>

<style scoped>

</style>