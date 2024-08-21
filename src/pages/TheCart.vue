<template>
  <the-card>
    <h1 class="text-center mb-3 fs-3">Your Cart</h1>
    <div class="text-center fs-3">
      Total Amount:
      <span class="badge rounded-pill bg-success fs-4">£ {{ totalAmount }}</span>
    </div>

    <ul class="list-unstyled m-0 mt-5" v-if="totalAmount">
      <cart-item
        v-for="(product) in products"
        :key="product.product.id"
        :total="product.total"
        :id="product.product.id"
        :image="product.product.image"
        :title="product.product.title"
        :description="product.product.description"
        :price="product.product.price"
        :totalPrice="totalPrice(product.product.price, product.total)"
      />
    </ul>
  </the-card>
</template>

<script>
  import TheCard from "@/components/ui/TheCard.vue";
  import CartItem from "@/components/carts/CartItem.vue";

  export default {
    components: {TheCard, CartItem},
    computed: {
      products() {
        return this.$store.getters['cart/cartItems'];
      },
      totalAmount() {
        let total = 0;

        const items = this.$store.getters['cart/cartItems'];

        if  (!Object.keys(items).length) {
          return total;
        }

        for (const item in items) {
          const totalItems = items[item].total,
                itemPrice = items[item].product.price;

          total += totalItems * itemPrice;
        }

        return total.toFixed(2);
      }
    },
    methods: {
      totalPrice(price, total) {
        return (price * total).toFixed(2);
      }
    }
  }
</script>
