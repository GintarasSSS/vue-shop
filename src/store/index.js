import {createStore} from "vuex";
import products from "@/store/modules/products";
import card from "@/store/modules/cart";

const store = createStore({
    modules: {
        products: products,
        cart: card
    },
    state() {
        return {
            isLoggedIn: false
        }
    },
    mutations: {
        login(state) {
            state.isLoggedIn = true;
        },
        logout(state) {
            state.isLoggedIn = false;
        }
    },
    actions: {
        login(context) {
            context.commit("login");
        },
        logout(context) {
            context.commit("logout");
        }
    },
    getters: {
        isLoggedIn(state) {
            return state.isLoggedIn;
        }
    }
});

export default store;