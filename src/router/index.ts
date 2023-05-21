import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import LoginView from "@/views/LoginView.vue";
import HomeView from "@/views/HomeView.vue";
import DashboardView from "@/views/DashboardView.vue";
import MesasView from "@/views/MesasView.vue";
import CardapioView from "@/views/CardapioView.vue";
import PedidosView from "@/views/PedidosView.vue";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView
  },
  {
    path: '/mesas',
    name: 'mesas',
    component: MesasView
  },
  {
    path: '/cardapio',
    name: 'cardapio',
    component: CardapioView
  },
  {
    path: '/pedidos',
    name: 'pedidos',
    component: PedidosView
  },
  {
    path: '/',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
