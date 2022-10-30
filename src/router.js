import { createWebHistory, createRouter } from "vue-router"
import Cart from './views/Cart.vue'
import HomePage from './views/HomePage.vue'
import ProductDetailPage from './views/ProductDetailPage.vue'

const routes = [
    {path: '/', name:'home-page', components: {HomePage}},
    {path: '/cart', name:'cart-page', components: {Cart}},
    {path: '/product-detail/:id', props: true, name:'product-detail-page', components: {ProductDetailPage}},
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    scrollBehavior(to, from) {
        // always scroll to top
        return { top: 0 }
    },
})

export default router