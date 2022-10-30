<template>
    <div class="cart-total">
        <span>Toplam Tutar: {{finalPrice}}$</span>
        <button>Ödeme Ekranına Geç</button>
    </div>
</template>

<script>
export default{
    computed:{
        finalPrice(){
            return this.$store.getters.finalPriceCart
        }
    }
}
</script>

<style scoped>
.cart-total{
    display: flex;
    flex-direction: column;
    position: sticky;
    bottom: 0;
    background-color: white;
    font-size:2rem;
    width: 100%;
}

.cart-total>button{
    border: none;
    padding: 10px 0 10px 0;
    background-color: #e68b34;
    color: white;
    font-weight: bold;
    cursor: pointer;
}

.cart-total>button:enabled:hover{
    background-color: #c66f1d;
}

button:disabled, button[disabled]{
    cursor: not-allowed;
    background-color: #fad2ac;
}
</style>