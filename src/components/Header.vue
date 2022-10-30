<template>
    <header>
        <RouterLink :to="{name: 'home-page'}">
            <div>Vue.js</div>
        </RouterLink>
        
        <input
            v-if="path == '/'"
            v-model="searchValue"
            @input="input" 
            type="search" 
            placeholder="Aradığın özel bir şey mi var?"
        />

        <RouterLink class="cart-link" :to="{name: 'cart-page'}">
            <span class="totalQty">{{totalProductQty}}</span>
            <div class="cart-icon"><img src="../assets/shopping-cart.svg" /></div>
        </RouterLink>
    </header>
</template>

<script>
import jsonData from "../assets/products.json"
export default {
    data() {
        return {
            searchValue: '',
        }
    },
    methods: {
        input() {
            let result = jsonData.filter(this.searchProducts)
            this.$store.dispatch('filterData', result)
        },
        searchProducts(e){
            return e.Title.toLowerCase().includes(this.searchValue.toLowerCase())
        }
    },
    computed:{
        path(){
            return this.$route.path
        },
        totalProductQty(){
            return this.$store.getters.getCartQty
        }
    },
    watch:{
        path(newVal, oldVal){
            if(newVal != '/'){
                this.searchValue = ''
                this.input()
            }
        }
    }
}
</script>

<style>
header {
    background-color: var(--red);
    color: white;
    padding: 1rem;
    font-size: 2rem;
    font-weight: 900;
    font-family: monospace;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
}

input[type='search'] {
    border: none;
    outline: none;
    border-radius: .2rem;
    width: 300px;
}

input[type='search']:focus {
    box-shadow: 0 0 7px 2px #863d3d;
}

a{
    color: white;
    text-decoration: none;
}

.cart-link{
    position: relative;
}

.totalQty{
    font-size: 1rem;
    padding: 4px;
    position: absolute;
    background-color: #c5333347;
    border-radius: 5px;
    bottom: -10px;
    left: -10px;
}
</style>