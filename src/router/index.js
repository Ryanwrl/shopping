import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const Home = () =>
    import ('../views/home/Home.vue')
const Category = () =>
    import ('../views/category/Category.vue')
const Profile = () =>
    import ('../views/profile/Profile.vue')
const Shopcart = () =>
    import ('../views/cart/Cart.vue')

const Detail = () =>
    import ('../views/detail/Detail.vue')

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
        component: Shopcart,
        name: Shopcart
    },
    {
        path: '/profile',
        component: Profile,
        name: Profile
    },
    {
        path: '/detail/:iid',
        component: Detail,
        name: Detail
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router