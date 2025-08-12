
import { createRouter, createWebHistory } from 'vue-router'
import AppView from '@/views/AppView.vue'
import DataSourceView from '@/views/DataSourceView.vue'
import LayoutView from '@/views/LayoutView.vue'
import ActionsView from '@/views/ActionsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/app'
    },
    {
      path: '/app',
      name: 'app',
      redirect: '/app/dataSource',
      component: AppView,
      children: [
        { path: 'dataSource', name: "dataSource", component: DataSourceView },
        { path: 'layout', name: 'layout', component: LayoutView },
        { path: 'actions', name: 'actions', component: ActionsView },
      ]
    }
  ],
})

export default router
