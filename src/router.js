import {createRouter, createWebHistory} from "vue-router";

import ProductsList from "@/pages/ProductsList.vue";
import TheCart from "@/pages/TheCart.vue";
import TheAdmin from "@/pages/TheAdmin.vue";
import store from "@/store";

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    },
    linkActiveClass: 'active',
    routes: [
        { name: 'products', path: '/products' , component: ProductsList},
        { name: 'cart', path: '/cart', component: TheCart },
        { name: 'admin', path: '/admin', component: TheAdmin},

        { name: 'home', path: '/', redirect: '/products' },
        { path: '/:pathMatch(.*)', redirect: '/products' }
    ]
});

router.beforeEach((to, from, next) => {
    const isLoggedIn = store.getters.isLoggedIn;

    if (to.name === 'admin' && !isLoggedIn) {
        next({ name: 'products' });
    } else {
        next();
    }
});

export default router;