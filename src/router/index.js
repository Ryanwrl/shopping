import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const Home = () =>
    import ('../views/home/Home.vue')
const Category = () =>
    import ('../views/category/Category.vue')
const Shopcar = () =>
    import ('../views/shopcar/shopcar.vue')
const Profile = () =>
    import ('../views/profile/profile.vue')

Vue.use(VueRouter)

const routes = [

    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
        name: Home
    },
    {
        path: '/category',
        component: Category,
        name: Category
    },
    {
        path: '/shopcar',
        component: Shopcar,
        name: Shopcar
    },
    {
        path: '/profile',
        component: Profile,
        name: Profile
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router