export default {
    namespaced: true,
    state() {
        return {
            items: {}
        }
    },
    mutations: {
        addProduct(state, product) {
            const id = product.id;

            if (state.items[id] === undefined) {
                state.items[id] = {
                    total: 1,
                    product: product
                };
            } else {
                state.items[id].total ++;
            }
        },
        removeProduct(state, id) {
            const item = state.items[id];

            if (item.total === 1) {
                delete state.items[id];
            } else {
                state.items[id].total--;
            }
        }
    },
    actions: {
        addProduct(context, payload) {
            const products = context.rootGetters["products/products"];
            const product = products.filter(item => item.id === payload.id);

            context.commit("addProduct", product[0]);
        },
        removeProduct(context, id) {
            context.commit("removeProduct", id);
        }
    },
    getters: {
        cartTotal(state) {
            let total = 0;

            if (!Object.keys(state.items).length) {
                return total;
            }

            for (const item in state.items) {
                total += state.items[item].total;
            }

            return total;
        },
        cartItems(state) {
            return state.items;
        }
    }
}
