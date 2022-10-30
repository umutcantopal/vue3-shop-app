<template>
    <RouterLink :to="{ name: 'product-detail-page', params: { id: product.Id } }">
        <div class="card">
            <div class="title">
                <h4>{{ product.Title }}</h4>
            </div>
            <div class="content"><img :src="product.img" /></div>
            <div class="price">Fiyat : {{ product.Price }}$</div>
            <!-- <AddToCartButton :productId="product.Id" /> -->
        </div>
    </RouterLink>
    <!-- buradan aşağısı sepette gösteriliyor -->
    <div v-if="currentPath === '/cart'">
        <Quantity :price="product.Price" :qtyVal=productQty @totalQty="qtyChange" />
        <DeleteProductFromCart :productId="product.Id" />
    </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import AddToCartButton from './AddToCartButton.vue'
import Quantity from './Quantity.vue'
import DeleteProductFromCart from './DeleteProductFromCart.vue'

export default {
    props: {
        product: {
            type: Object
        }
    },
    components: {
        RouterLink,
        RouterView,
        AddToCartButton,
        Quantity,
        DeleteProductFromCart
    },
    data() {
        return {
            currentPath: this.$router.currentRoute.value.path
        }
    },
    computed: {
        productQty() {
            return this.$store.getters.getProductQty(this.product.Id)
        }
    },
    methods: {
        qtyChange(e) {
            this.$store.dispatch('changeQty', { productId: this.product.Id, newQty: e })
        }
    }
}
</script>

<style scoped>
a {
    text-decoration: none;
    color: black;
    border: 1px solid #ccc;
    border-radius: .4rem;
    height: fit-content;
}

.card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.content {
    display: flex;
    justify-content: center;
}

img {
    width: 80%;
}

.title>h4 {
    text-align: center;
    font-size: 1.2rem;
}

.price {
    padding: 1rem;
    font-size: 1rem;
}

.price:hover {
    color: red;
}

a:hover {
    box-shadow: 0px 0px 6px 4px #e1e1e1;
    cursor: pointer;
}
</style>