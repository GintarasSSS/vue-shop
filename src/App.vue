<template>
  <the-header></the-header>

  <div class="container-xl mt-5">
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from './components/nav/TheHeader.vue';

export default {
  name: 'App',
  components: {
    TheHeader
  }
}
</script>
