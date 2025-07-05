import { createRouter, createWebHistory } from 'vue-router'
import CalendarView from './views/CalendarView.vue'
import EditDay from './views/EditDay.vue'
import InfoView from './views/InfoView.vue'

const routes = [
  {
    path: '/',
    name: 'CalendarView',
    component: CalendarView
  },  
  {
    path: '/edit/:dayId',
    name: 'EditDay',
    component: EditDay
  },
  {
    path: '/info',
    name: 'InfoTrash',
    component: InfoView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
