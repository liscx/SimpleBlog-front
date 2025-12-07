export const RouterMap = [
    {
        path: '/',
        redirect: '/home/coffee'
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
        name: "home",
        component: () => import("../views/Layout/index.vue"),
        meta: {
            requiresAuth: true
        },
        children: [
            {
                path: '/home',
                redirect: '/home/Technology'
            },
            {
                path: "coffee",
                name: "Coffee",
                component: () => import("../views/Home/Coffee/index.vue"),
            },
            {
                path: "Life",
                name: "Life",
                component: () => import("../views/Home/Technology/index.vue"),
            },
            {
                path: "Sport",
                name: "Sport",
                component: () => import("../views/Home/Sport/index.vue"),
            },
            {
                path: "Security",
                name: "Security",
                component: () => import("../views/Home/Security/index.vue"),
            },
            {
                path: "Technology",
                name: "Technology",
                component: () => import("../views/Home/Technology/index.vue"),
            },
        ]
    }
];