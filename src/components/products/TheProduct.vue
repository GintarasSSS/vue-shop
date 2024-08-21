<template>
  <li class="mb-3">
    <the-card>
      <h5 class="card-title">{{ title }}</h5>
      <div class="row">
        <img :src="image" class="card-img-left col-4" alt="title">
        <div class="col-8 d-flex flex-column">
          <p class="card-text">{{ description }}</p>
          <div>
            <span class="badge rounded-pill bg-primary fs-5 mb-3">£{{ price }}</span>
          </div>
          <div class="flex-grow-1 d-flex align-items-end justify-content-end">
            <button type="button" class="btn btn-warning rounded-pill fw-bolder fs-5 ps-3 pe-3" @click="addProduct(id)">Add to Cart</button>
          </div>
        </div>
      </div>
    </the-card>
  </li>
</template>

<script>
  import TheCard from "@/components/ui/TheCard.vue";

  export default {
    components: {TheCard},
    props: ['id', 'image', 'title', "description", "price"],
    methods: {
      addProduct(id) {
        this.$store.dispatch("cart/addProduct", { id: id });
      }
    }
  }
</script>
