<template>
  <nav class="navbar navbar-expand navbar-dark bg-dark">
    <div class="container-xl">
      <router-link :to="{ name: 'home' }" class="fw-bolder text-decoration-none fs-3 text-warning">VueShop</router-link>

      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link :to="{ name: 'products' }" class="nav-link">Products</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'cart' }" class="nav-link">
            Cart
            <span class="badge rounded-pill bg-light text-dark">{{ cartTotal }}</span>
          </router-link>
        </li>
        <li class="nav-item" v-if="isLoggedIn">
          <router-link :to="{ name: 'admin' }" class="nav-link">Admin</router-link>
        </li>
      </ul>

      <router-link :to="{ name: 'home' }" class="btn btn-outline-light" @click="logout" v-if="isLoggedIn">Logout</router-link>
      <router-link :to="{ name: 'home' }" class="btn btn-outline-light" @click="login" v-else>Login</router-link>
    </div>
  </nav>
</template>

<script>
  export default {
    computed: {
      isLoggedIn() {
        return this.$store.getters.isLoggedIn;
      },
      cartTotal() {
        return this.$store.getters['cart/cartTotal'];
      }
    },
    methods: {
      login() {
        this.$store.dispatch('login');
      },
      logout() {
        this.$store.dispatch('logout');
      }
    }
  }
</script>

<style scoped>

</style>