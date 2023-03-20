export default [
    {
        name: 'home',
        path: '/',
        component: () => import('../view/Home.vue')
    },
    {
        name:'record',
        path:'/record',
        component:()=>import('../view/Record.vue'),
    },
    {
        name:'select',
        path:'/select',
        component:()=>import('../view/Select.vue'),
    },
    {
        name:'test',
        path:'/test',
        component:()=>import('../view/Test.vue')
    }
]