import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/HelloWorld.vue'

Vue.use(Router)

export default new Router({
    routes: [
       {
        path: '/',
        name: 'HelloWorld',
        component: Hello
       },
       {
           path: '/user',
           name: '登录',
           component: () => import('@/components/user/User')
       }
    ]
})