<template>
    <div 
    class="quantity-container" 
    :price="price" :qtyVal="qtyVal" 
    >
        <span>Ürün Adeti: </span>
        <div>
            <button class="quantity-control-btn" @click="reduce">-</button>
            <input type="text" :value="quantity" />
            <button class="quantity-control-btn" @click="add">+</button>
        </div>
        <span>Toplam Fiyat: {{totalPrice}}$</span>
    </div>
</template>

<script>
export default{
    props:{
        price:{
            type: Number,
            required: true
        },
        qtyVal:{
            type: Number,
            required: true
        }
    },
    data(){
        return{
            quantity: this.qtyVal
        }
    },
    methods:{
        add(){
            this.quantity += 1
            this.emitChanges()
        },
        reduce(){
            if(this.quantity > 1){
                this.quantity -= 1
                this.emitChanges()
            }
        },
        emitChanges(){
            this.$emit('totalQty',this.quantity)
        }
    },
    computed:{
        totalPrice(){
            return this.quantity * this.price
        }
    }
}
</script>

<style scoped>
.quantity-container{
    margin-top: 10px;
    display: flex;
    gap: 10px;
    align-items: baseline;
    flex-direction: column;
}
.quantity-control-btn{
    border: none;
    font-weight: bold;
    cursor: pointer;
}

input[type="text"]{
    width: 30px; 
    text-align: center;
}

.quantity-control-btn, input[type="text"]{
    padding: .6rem;
    border: 1px solid #ccc;
}

input[type="text"]:focus{
    outline: none;
}
</style>