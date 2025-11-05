export const RouterMap = [
    {
        path: '/',
        redirect: '/Home'
    },//默认路由

    {
        path: "/login",
        name: "Login",
        component: () => import("@/views/Login/index.vue"),
        meta: {
            requiresAuth: false
        }
    },
    {
        path: "/home",
        name: "Home",
        component: () => import("../views/Layout/index.vue"),
        meta: {
            requiresAuth: true
        },
        children: []
    }
];