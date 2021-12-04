import { RouteRecordRaw } from 'vue-router'
import { HomeView } from './views'
import { AboutView } from './views'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  }
]

export default routes
