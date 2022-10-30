<template>
    <p v-if="isEmpty">Sepetin Şu Anda Boş</p>
    <div :class="[products.length < 1 ? emptyCartClass : filledCartClass]">
        <ProductCard :product="product" v-for="product in products" />
    </div>
    <CartTotal v-if="products.length > 0" />
</template>

<script>
import ProductCard from "@/components/ProductCard.vue"
import CartTotal from "@/components/CartTotal.vue";

export default {
    data(){
        return{
            emptyCartClass: 'sepet-bos',
            filledCartClass: 'product-cards-cart'
        }
    },
    computed: {
        products(){ 
            return this.$store.getters.getProductsAddedToCart
        },
        isEmpty(){
            return this.products.length < 1
        }
    },
    components: {
        ProductCard,
        CartTotal
    }
}
</script>

<style scoped>
.product-cards-cart{
    gap: 10px;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    min-height: 80vh;
}

.sepet-bos{
    background: url('../assets/empty-cart.svg');
    background-repeat: no-repeat;
    min-height: 80vh;
}

p{
    font-size: 2rem;
    text-align: center;
    font-weight: bold;
}
</style>