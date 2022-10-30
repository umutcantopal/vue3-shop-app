<template>
    <button :productId="productId" @click="click"><i class="trash-icon"></i>Sepetten Sil</button>
</template>

<script>
export default{
    props:{
        productId:{
            type: String,
            required: true
        }
    },
    methods:{
        click(){
            this.$store.dispatch("deleteProductFromCart",this.productId)
        }
    }
}
</script>

<style scoped>
button{
    width: 100%;
    border: none;
    border-radius: 4px;
    color: white;
    background-color: crimson;
    padding: 10px 0 10px 0;
    display: flex;
    justify-content: center;
    font-weight: bold;
    font-size: 1rem;
    align-items: flex-end;
}

button:hover{
    background-color: #820820;
}

.trash-icon{
    background: url(/src/assets/trash-icon.svg);
    background-repeat: no-repeat;
    background-size: cover;
    display: inline-block;
    height: 20px;
    width: 20px;
    margin-right: 5px;
}
</style>