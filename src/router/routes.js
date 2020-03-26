export default [
    {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
    },
    {
        path: '/timeline',
        name: 'timeline',
        component: () => import(/* webpackChunkName: "timeline" */ '../views/Timeline.vue')
    },
    {
        path: '/member',
        name: 'member',
        component: () => import(/* webpackChunkName: "member" */ '../views/Member.vue')
    },
    {
        path: '/yuebing',
        name: 'yuebing',
        component: () => import(/* webpackChunkName: "yuebing" */ '../views/Yuebing.vue')
    }
]
