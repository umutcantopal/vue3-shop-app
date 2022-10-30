<template>
    <h2>{{ product.Title }}</h2>
    <hr />

    <div class="product-img">
        <img :src="product.img">
    </div>
    <hr />

    <div class="info">
        <span>
            {{ product.Maker }} tarafından
        </span>
        <span class="total-rating">
            <img v-for="j in avgRating" src="@/assets/star-filled.svg">
            <img v-if="avgRating != 5" v-for="j in (5-avgRating)" src="@/assets/star-empty.svg">
        </span>
        <span class="price">{{ product.Price }}$</span>
    </div>

    <hr/>

    <Quantity :price="product.Price" :qtyVal="qtyVal" @totalQty="totalQty" />

    <AddToCartButton :productId="product.Id" :qty="qtyVal" />

    <h4>Açıklama</h4>
    <p>{{ product.Description }}</p>
    <p v-if="product.Url"><a target="_blank" :href="product.Url">Ürün Sitesi</a></p>

    <h4>Değerlendirmeler</h4>
    <div v-if="product.Ratings" v-for="index in product.Ratings.length" class="rating">
        Anonim Kullanıcı :
        <img v-for="j in product.Ratings[index - 1]" src="@/assets/star-filled.svg">
    </div>
    <div v-else>Bu Ürün İçin Yorum Yapılmamış</div>
</template>

<script>
import AddToCartButton from '@/components/AddToCartButton.vue'
import Quantity from '@/components/Quantity.vue'

export default {
    components:{
        AddToCartButton,
        Quantity
    },
    data(){
        return{
            qtyVal: 1
        }
    },
    props: {
        id: {
            type: String,
            required: true
        }
    },
    computed: {
        product() {
            return this.$store.getters.productDetail(this.id)
        },
        avgRating(){
            if(this.product.Ratings){
                let sum = this.product.Ratings.reduce((pv, cv) => pv + cv, 0)
                let avg = sum / this.product.Ratings.length
                return Math.round(avg,1)
            }
            else{
                return 0
            }
        }
    },
    methods:{
        totalQty(e){
            this.qtyVal = e
        }
    }
}
</script>

<style scoped>
h3 {
    font-size: 1rem;
}

.product-img {
    display: flex;
    justify-content: center;
}

.product-img>img {
    width: 80%;
}

.price {
    font-size: 1.5rem;
    font-weight: 900;
}

.info {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
}

.rating {
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

a {
    color: brown;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}
</style>