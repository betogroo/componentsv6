import { RouteRecordRaw } from 'vue-router'
import { HomeView } from './views'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  }
]

export default routes
