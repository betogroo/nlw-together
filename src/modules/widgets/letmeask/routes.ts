import { RouteRecordRaw } from 'vue-router'
import LetMeAsk from './views/LetMeAsk.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/letmeask',
    name: 'LetMeAsk',
    component: LetMeAsk,
    meta: {
      title: 'Home',
      requiresAuth: true
    }
  }
]

export default routes
