import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login.vue'
import cadastro from '../components/cadastro.vue'
import videosIndex from '../views/videos/videosIndex.vue'
import videosPlayer from '../views/videos/videosPlayer.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/cadastro',
    name: 'cadastro',
    component: cadastro
  },
  {
    path: "/videos",
    name: "videos",
    component: videosIndex,
    children: [
      {
        path: "/video/:id",
        name: "videoId",
        component: videosPlayer
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
