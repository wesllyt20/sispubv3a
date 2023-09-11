import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import EditUser from '../views/auth/EditUser.vue'
import ListUser from '../views/auth/ListUser.vue'
import LoginUser from '../views/auth/LoginUser.vue'
import RegisterUser from '../views/auth/Registeruser.vue'
import errorNotFound from '../views/pages/errorNotFound.vue'
import { useUserStore } from '../stores/userAuth'

const linkAccess = '/geovisor/test';
const routes = [

    {
        path: '/',
        component: Dashboard
        //meta: { auth: true }
    },
    { path: '/login', component: LoginUser },
    { path: '/register', component: RegisterUser },
    { path: '/edit', component: EditUser },
    { path: '/list', component: ListUser },
    {
        path: "/:catchAll(.*)*", component: errorNotFound
    }
]
const router = createRouter({
    history: createWebHistory(linkAccess),
    routes
});

router.beforeEach(async (to, from, next) => {
    const requireAuth = to.meta.auth
    const userStore = useUserStore();

    if (userStore.token) {
        return next();
    }

    if (requireAuth || sessionStorage.getItem('user')) {
        await userStore.refreshToken();
        if (userStore.token) {
            return next();
        }
        return next("/login")
    }
    return next()
});


export default router