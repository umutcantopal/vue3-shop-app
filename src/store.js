import { createStore } from "vuex"
import jsonData from "./assets/products.json"

const store = createStore({
    state: {
        products: jsonData,
        productsAddedToCart: [
            // {Id: 'jenlooper-cactus', qty: 4},
            // {Id: 'jenlooper-light', qty: 1}
        ]
    },
    getters: {
        getProducts(state) {
            return state.products
        },
        productDetail: (state) => (productId) => {
            return state.products.find(products => products.Id === productId)
        },
        getProductsAddedToCart(state){
            let products = []
            for(let i=0;i < state.productsAddedToCart.length; i++){
                for(let x=0;x < state.products.length; x++){
                    if(state.productsAddedToCart[i].Id === state.products[x].Id){
                        products.push(state.products[x])
                    }
                }
            }
            return products
        },
        getCartQty(state){
            let products = state.productsAddedToCart
            let total = 0
            for(let i = 0;i < products.length;i++){
                total += products[i].qty
            }
            return total
        },
        getProductQty: (state) => (productId) => {
            return state.productsAddedToCart.find(x => x.Id === productId).qty
        },
        finalPriceCart(state){
            let finalPrice = 0
            let productsCart = state.productsAddedToCart // {Id, qty}
            for(let i = 0;i < productsCart.length;i++){
                let productPrice = state.products.find(x => x.Id === productsCart[i].Id).Price
                finalPrice += productPrice*productsCart[i].qty
            } 
            return finalPrice
        }
    },
    mutations: {
        filterData(state, result) {
            state.products = result
        },
        addProductToCart(state, { index, val, qty }){
            if(index === -1){
                state.productsAddedToCart.push(val)
            }else{
                state.productsAddedToCart[index].qty += qty
            }
        },
        changeQty(state, {index, newQty}){
            state.productsAddedToCart[index].qty = newQty
        },
        deleteProductFromCart(state, index){
            state.productsAddedToCart.splice(index, 1)
        }
    },
    actions:{
        filterData({ commit }, result){
            commit('filterData', result)
        },
        deleteProductFromCart({ commit }, productId){
            let index = this.state.productsAddedToCart.findIndex((x => x.Id === productId))
            commit('deleteProductFromCart', index)
        },
        changeQty({commit},{ productId, newQty }){
            let index = this.state.productsAddedToCart.findIndex((x => x.Id === productId))
            commit('changeQty', { index, newQty })
        },
        addProductToCart({ commit }, { productId, qty }){
            let index = this.state.productsAddedToCart.findIndex((x => x.Id === productId))
            let val = {Id: productId, qty: qty}
            commit('addProductToCart', { index, val, qty })
        }
    }
})

export default store