import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function lazyLoad(view) {
    return () => import(`../Pages/${view}.vue`);
}

const routes = [{
        path: "/",
        component: lazyLoad("Home"),
    },
    {
        path: "/about",
        component: lazyLoad("About"),
    },
    {
        path: "/teams",
        name: "teams",
        component: lazyLoad("Teams"),
    },
    {
        path: "/teams/:id",
        component: lazyLoad("TeamMemberDetails"),
        name: "teamsDetails",
    },
];

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router