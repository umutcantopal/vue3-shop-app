<template>
    <button :productId="productId" :qty="qty" class="add-to-cart-btn" @click.prevent="click">Sepete Ekle</button>
</template>

<script>
export default{
    props:{
        productId:{
            type: String,
            required: true
        },
        qty:{
            type: Number,
            required: true
        }
    },
    methods:{
        click(){
            this.$store.dispatch('addProductToCart', {productId: this.productId, qty: this.qty})
            this.$router.push('/cart')
        }
    }
}
</script>

<style scoped>
.add-to-cart-btn {
    bottom: 0;
    padding: 10px;
    border: none;
    background-color: var(--red);
    color: white;
    font-size: 1.5rem;
    font-weight: 700;
    cursor: pointer;
    border-radius: 4px;
    margin-top: 15px;
    width: 100%;
}

.add-to-cart-btn:hover {
    background-color: brown;
}
</style>