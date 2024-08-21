<template>
  <li class="mb-3">
    <the-card>
      <div class="row justify-content-start align-items-center">
        <div class="col-2">
          <div class="image-wrp">
            <img :src="image" class="card-img-top rounded-circle" alt="{{ title }}">
          </div>
        </div>
        <div class="col-10">
          <h2 class="card-title fs-3 mb-3">{{ title }}</h2>
          <ul class="list-unstyled">
            <li>Price per Item: £{{ price }}</li>
            <li class="mb-3">Quantity: {{ total }}</li>
            <li class="fw-bolder">
              Total Price:
              <span class="fs-4">£{{ totalPrice }}</span>
              <button
                  title="Remove"
                  type="button"
                  class="btn-close ms-2"
                  aria-label="Close"
                  @click="removeProduct(id)"
              ></button>
            </li>
          </ul>
        </div>
      </div>
    </the-card>
  </li>
</template>

<script>
  import TheCard from "@/components/ui/TheCard.vue";

  export default {
    components: {TheCard},
    props: ['id', 'image', 'title', "description", "price", "total", "totalPrice"],
    methods: {
      removeProduct(id) {
        this.$store.dispatch("cart/removeProduct", id);
      }
    }
  }
</script>

<style scoped>
  .image-wrp {
    position: relative;
    padding-top: 100%;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
</style>