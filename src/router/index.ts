import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import NotFind from '../components/error/NotFind.vue'

const routes: RouteRecordRaw[] = [
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFind },
    { path: '/', redirect: '/login'},
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login.vue'),
    },
    {
        path: '/user',
        name: 'UserHome',
        redirect: '/user/index',
        component: () => import('@/views/user/index.vue'),
        meta: {
            name: '用户'
        },
        children: [
            {
                path: '/user/index',
                name: 'UserIndex',
                component: () => import('@/views/user/Home.vue'),
            },
            {
                path: '/user/dataset',
                name: 'UserDataset',
                component: () => import('@/views/user/ImageSet.vue'),
            },
            {
                path: '/user/model',
                name: 'UserModel',
                component: () => import('@/views/user/Model.vue'),
            },
            {
                path: '/user/task',
                name: 'UserTask',
                component: () => import('@/views/user/Task.vue'),
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
  })

 export default router