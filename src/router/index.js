import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import EventDetails from '../components/EventDetails'
import Login from '../components/Login'
import User from '../components/User'
import Admin from '../components/Admin'
import Registration from '../components/Registration'
import ModifyUser from '../components/ModifyUser'
import ModifyGame from '../components/ModifyGame'
import bg from '../components/bg'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/user',
    name: 'user',
    component: User
  },
  {
    path: '/registration',
    name: 'registration',
    component: Registration
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin
  },
  {
    path: '/eventdetails/:id',
    name: 'eventdetails',
    component: EventDetails
  },
  {
    path: '/modifyUser',
    name: 'modifyUser',
    component: ModifyUser
  },
  {
    path: '/modifyGame',
    name: 'modifyGame',
    component: ModifyGame
  },
  {
    path: '/bg/:id',
    name: 'bg',
    component: bg
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
