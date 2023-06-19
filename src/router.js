import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from './views/Dashboard.vue'
import EditUser from './views/auth/EditUser.vue'
import ListUser from './views/auth/ListUser.vue'
import LoginUser from './views/auth/LoginUser.vue'
import RegisterUser from './views/auth/Registeruser.vue'
const linkAccess = '/test';

const routes = [
    { path: '/', component: Dashboard },
    { path: '/login', component: LoginUser },
    { path: '/register', component: RegisterUser },
    { path: '/edit', component: EditUser },
    { path: '/list', component: ListUser },
]
const router = createRouter({
    history: createWebHistory(linkAccess),
    routes
})
export default router;