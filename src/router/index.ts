import {RouterMap} from "./router.config"
import {createRouter, createWebHistory} from "vue-router";


const router = createRouter({
    history: createWebHistory(),
    // 解决路由置于顶部
    scrollBehavior: () => ({top: 0}),
    routes: RouterMap,
})

//防止多次访问同一路由报错
const originalPush = router.push
router.push = function push(location) {
    return originalPush.call(this, location).catch((err: any) => err)
}

// router.beforeEach((to, form, next) => {
//
// })


export default router
