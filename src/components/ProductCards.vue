<template>
    <div id="product-cards">
        <ProductCard :product="product" v-for="product in products" />
    </div>
</template>

<script>
import ProductCard from "./ProductCard.vue"

export default {
    computed: {
        products(){ 
            return this.$store.getters.getProducts
        }
    },
    components: {
        ProductCard,
    }
}

</script>

<style scoped>
#product-cards {
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    /* grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); */
    gap: 10px;
    
}
</style>
  