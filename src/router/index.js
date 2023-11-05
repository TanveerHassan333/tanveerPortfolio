// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import( '@/views/Home.vue'),
      },
      {
        path: '/services',
        name: 'Services',
        component: () => import( '@/views/Services.vue'),
      },
      {
        path: '/about',
        name: 'About',
        component: () => import( '@/views/About.vue'),
      },
      {
        path: '/works',
        name: 'Works',
        component: () => import( '@/views/Works.vue'),
      },
      {
        path: '/blogs',
        name: 'Blogs',
        component: () => import( '@/views/Blogs.vue'),
      },
      {
        path: '/contact',
        name: 'Contact',
        component: () => import( '@/views/Contact.vue'),
      },
      {
        path: '/resume',
        name: 'Resume',
        component: () => import( '@/views/Resume.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
