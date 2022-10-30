<template>
  <Header />
  <div class="asd">
    <RouterView name="HomePage"></RouterView>
    <RouterView name="Cart"></RouterView>
    <RouterView name="ProductDetailPage"></RouterView>
  </div>
</template>

<script>
import Header from "./components/Header.vue"

export default {
  components: {
    Header,
  }
}
</script>

<style scoped>
.asd{
  padding:10px;
}
</style>
