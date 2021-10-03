import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function lazyLoad(view) {
    return () => import(`../Pages/${view}.vue`);
}

const routes = [
    {
        path: "/",
        component: lazyLoad("Products"),
    },
    {
        path: "/products/:id",
        component: lazyLoad("Product"),
        name: "productDetails",
    },
    {
        path: "/reviewOrder",
        component: lazyLoad("ReviewOrder"),
    },
    {
        path: "/:Notfound(.*)",
        component: lazyLoad("NotFound"),
    },
];

const router = new VueRouter({
    mode : 'hash',
    routes
})

export default router